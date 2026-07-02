from pathlib import Path

from google.adk.agents import Agent

PROMPT = Path(
    Path(__file__).parent.parent / "prompts" / "medicine_prompt.txt"
).read_text(encoding="utf-8")

medicine_agent = Agent(
    name="medicine_agent",
    model="gemini-2.5-flash",
    instruction=PROMPT,
)