from typing import Optional

from fastapi import APIRouter
from langchain_core.messages import HumanMessage
from pydantic import BaseModel

from graph.app import app

router = APIRouter()


class ChatRequest(BaseModel):
    question: str
    session_id: Optional[str] = None


class ChatResponse(BaseModel):
    answer: str
    action: Optional[str] = None
    filters: Optional[dict] = None


@router.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):

    result = app.invoke({"messages": [HumanMessage(content=request.question)]})

    # print("Result:", result)  # Debugging line to print the result

    answer = result.get("answer")
    if not isinstance(answer, str) or not answer.strip() or answer.strip() == "...":
        messages = result.get("messages")
        if isinstance(messages, list):
            for msg in reversed(messages):
                if isinstance(msg, HumanMessage):
                    continue
                content = getattr(msg, "content", None)
                if (
                    isinstance(content, str)
                    and content.strip()
                    and content.strip() != "..."
                ):
                    answer = content
                    break

    action = result.get("action")
    if not isinstance(action, str) or action.strip() == "...":
        action = None

    filters = result.get("filters")
    if not isinstance(filters, dict):
        filters = None

    if (action is None or filters is None) and isinstance(result.get("messages"), list):
        for msg in result["messages"]:
            additional_kwargs = getattr(msg, "additional_kwargs", None)
            if not isinstance(additional_kwargs, dict):
                continue

            tool_calls = additional_kwargs.get("tool_calls") or additional_kwargs.get(
                "tool_call"
            )
            if not isinstance(tool_calls, list):
                continue

            for tool_call in tool_calls:
                name = tool_call.get("name")
                function = tool_call.get("function") or {}
                if not name:
                    name = function.get("name")

                if name != "search_products":
                    continue

                args = tool_call.get("args") or function.get("arguments")
                if isinstance(args, str):
                    import json

                    try:
                        args = json.loads(args)
                    except ValueError:
                        args = None

                if not isinstance(args, dict):
                    continue

                inferred_filters = {}
                if "category" in args and isinstance(args["category"], str):
                    inferred_filters["category"] = args["category"]
                if "color" in args and isinstance(args["color"], str):
                    inferred_filters["color"] = args["color"]
                if "brand" in args and isinstance(args["brand"], str):
                    inferred_filters["brand"] = args["brand"]
                if "max_price" in args and isinstance(args["max_price"], (int, float)):
                    inferred_filters["maxPrice"] = args["max_price"]
                elif "maxPrice" in args and isinstance(args["maxPrice"], (int, float)):
                    inferred_filters["maxPrice"] = args["maxPrice"]

                if inferred_filters:
                    filters = inferred_filters if filters is None else filters
                    action = action or "FILTER_PRODUCTS"
                    break

            if action and filters:
                break

    return ChatResponse(
        answer=answer or "",
        action=action,
        filters=filters,
    )
