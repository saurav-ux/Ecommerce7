from langchain_groq import ChatGroq
from langchain_core.messages import SystemMessage

from tools.rag_tool import retriever_tool
from tools.product_tool import search_products
from tools.calculator_tool import add2numbers

import os

tools = [retriever_tool, search_products, add2numbers]

llm = ChatGroq(
    model="openai/gpt-oss-120b", groq_api_key=os.getenv("GROQ_API_KEY"), temperature=0
).bind_tools(tools)


def orchestrator(state):

    system_prompt = SystemMessage(content="""
You are an Ecommerce Assistant.

Use retriever_tool for:
- return policy
- refund policy
- shipping policy
- cancellation policy
- terms and conditions

Use search_products for:
- products
- tshirts
- clothing
- color based search
- brand based search
- price based search

Use add2numbers only for maths.
""")

    response = llm.invoke([system_prompt] + list(state["messages"]))

    answer = getattr(response, "content", None)
    action = (
        response.additional_kwargs.get("action")
        if isinstance(response.additional_kwargs, dict)
        else None
    )
    filters = (
        response.additional_kwargs.get("filters")
        if isinstance(response.additional_kwargs, dict)
        else None
    )

    return {
        "messages": [response],
        "answer": answer,
        "action": action,
        "filters": filters,
    }
