from mcp.server.fastmcp import FastMCP
from mcp_server.tools import medicine_tool, hospital_tool

mcp = FastMCP("HealthBridge")


@mcp.tool()
def lookup_medicine(name: str):
    """Look up medicine information."""
    return medicine_tool(name)


@mcp.tool()
def lookup_hospital(city: str):
    """Find hospitals in a city."""
    return hospital_tool(city)


if __name__ == "__main__":
    mcp.run()