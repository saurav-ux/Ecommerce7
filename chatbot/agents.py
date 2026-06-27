from dotenv import load_dotenv
from langchain_core.messages import (
    BaseMessage,
    SystemMessage,
    HumanMessage,
    AIMessage,
    ToolMessage,
)

from langchain_groq import ChatGroq
from langchain_core.tools import tool

from langgraph.graph.message import add_messages
from langgraph.graph import StateGraph, END

import os
from typing import Annotated, Sequence, TypedDict
from operator import add

from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_chroma import Chroma

# from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_huggingface import HuggingFaceEmbeddings
from langgraph.prebuilt import ToolNode

load_dotenv()


class AgentState(TypedDict):
    messages: Annotated[Sequence[BaseMessage], add_messages]


# llm = ChatGroq(
#     model="openai/gpt-oss-120b", groq_api_key=os.getenv("GROQ_API_KEY"), temperature=0
# ).bind_tools(tools)

# -----------------------------
# Configuration
# -----------------------------
PERSIST_DIRECTORY = "./database"
COLLECTION_NAME = "pdf_docs"

# -----------------------------
# Load Embedding Model
# -----------------------------
embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")

# -----------------------------
# Load Existing ChromaDB
# -----------------------------
vectorstore = Chroma(
    persist_directory=PERSIST_DIRECTORY,
    embedding_function=embeddings,
    collection_name=COLLECTION_NAME,
)

print("Loaded existing ChromaDB")

# -----------------------------
# Create Retriever
# -----------------------------
retriever = vectorstore.as_retriever(
    search_type="mmr", search_kwargs={"k": 5, "fetch_k": 20}
)


# -----------------------------
# Tool
# -----------------------------
@tool
def retriever_tool(query: str) -> str:
    """
    Searches and returns information from the uploaded documents.
    """

    docs = retriever.invoke(query)

    if not docs:
        return "No data available in the document."

    results = []

    for i, doc in enumerate(docs):
        content = doc.page_content.strip()

        if content:
            results.append(f"Document {i + 1}:\n{content}")

    return "\n\n".join(results)


@tool
def add2numbers(a: int, b: int) -> str:
    """Adds two numbers and returns the result."""
    return f"The sum of {a} and {b} is {a + b}."


tools = [retriever_tool, add2numbers]

tools_dict = {tool.name: tool for tool in tools}

llm = ChatGroq(
    model="openai/gpt-oss-120b", groq_api_key=os.getenv("GROQ_API_KEY"), temperature=0
).bind_tools(tools)


def aur_agents(state: AgentState) -> AgentState:
    system_prompt = SystemMessage(content="""
       You are a helpful assistant.
       
       Use retriever_tool for any question related to the uploaded document,
       including:
       - return policy
       - cancellation policy
       - terms and conditions
       - user conduct
       - refunds
       - platform rules
       - shipping
       - payments
       
       Use add2numbers only when the user asks for addition.
       """)
    response = llm.invoke([system_prompt] + list(state["messages"]))
    return {"messages": [response]}


def should_continue(state: AgentState):
    message = state["messages"]
    last_message = message[-1]

    if not last_message.tool_calls:
        return "end"
    else:
        return "continue"


graph = StateGraph(AgentState)
graph.add_node("our_agent", aur_agents)

tool_node = ToolNode(tools=tools)
graph.add_node("tools", tool_node)

graph.set_entry_point("our_agent")

graph.add_conditional_edges(
    "our_agent", should_continue, {"continue": "tools", "end": END}
)

graph.add_edge("tools", "our_agent")

app = graph.compile()


def print_stream(stream):
    for s in stream:
        message = s["messages"][-1]
        if isinstance(message, tuple):
            print(message)
        else:
            message.pretty_print()


inputs = {
    "messages": [("user", "what are the Disclaimer of Warranties and Liability:")]
}
print_stream(app.stream(inputs, stream_mode="values"))
