from langchain_core.tools import tool


@tool
def add2numbers(a: int, b: int) -> str:
    """
    Add two numbers.
    """
    return str(a + b)
