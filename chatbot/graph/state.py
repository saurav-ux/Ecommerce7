from typing import Annotated, Optional
from typing import Sequence
from typing import TypedDict

from langchain_core.messages import BaseMessage
from langgraph.graph.message import add_messages


class AgentState(TypedDict):
    messages: Annotated[Sequence[BaseMessage], add_messages]

    answer: Optional[str]
    action: Optional[str]
    filters: Optional[dict]
