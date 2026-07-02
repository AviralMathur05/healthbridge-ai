from pathlib import Path

from google.adk.agents import Agent

PROMPT = Path(
    Path(__file__).parent.parent / "prompts" / "report_prompt.txt"
).read_text(encoding="utf-8")

report_agent = Agent(
    name="report_agent",
    model="gemini-2.5-flash",
    instruction=PROMPT,
)