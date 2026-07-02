from pathlib import Path
from google.adk.agents import Agent

PROMPT = Path(
    Path(__file__).parent.parent / "prompts" / "emergency_prompt.txt"
).read_text(encoding="utf-8")

emergency_agent = Agent(
    name="emergency_agent",
    model="gemini-2.5-flash",
    instruction=PROMPT,
)