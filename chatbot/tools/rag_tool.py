from langchain_core.tools import tool
from langchain_chroma import Chroma
from langchain_huggingface import HuggingFaceEmbeddings

PERSIST_DIRECTORY = "./database"
COLLECTION_NAME = "pdf_docs"

embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")

vectorstore = Chroma(
    persist_directory=PERSIST_DIRECTORY,
    embedding_function=embeddings,
    collection_name=COLLECTION_NAME,
)

retriever = vectorstore.as_retriever(
    search_type="mmr", search_kwargs={"k": 5, "fetch_k": 20}
)


@tool
def retriever_tool(query: str) -> str:
    """
    Search information from company policy documents.
    """

    docs = retriever.invoke(query)

    if not docs:
        return "No information found."

    return "\n\n".join([doc.page_content for doc in docs])
