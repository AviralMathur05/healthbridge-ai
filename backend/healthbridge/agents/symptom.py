from pathlib import Path

from google.adk.agents import Agent

PROMPT = Path(
    Path(__file__).parent.parent / "prompts" / "symptom_prompt.txt"
).read_text(encoding="utf-8")

symptom_agent = Agent(
    name="symptom_agent",
    model="gemini-2.5-flash",
    instruction=PROMPT,
)