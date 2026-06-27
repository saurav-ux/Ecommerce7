from langgraph.graph import StateGraph
from langgraph.graph import END

from langgraph.prebuilt import ToolNode

from graph.state import AgentState

from agents.orchestrator_agent import orchestrator, tools


def should_continue(state):

    last_message = state["messages"][-1]

    if last_message.tool_calls:
        return "tools"

    return END


builder = StateGraph(AgentState)

builder.add_node("agent", orchestrator)

builder.add_node("tools", ToolNode(tools))

builder.set_entry_point("agent")

builder.add_conditional_edges("agent", should_continue)

builder.add_edge("tools", "agent")

app = builder.compile()
