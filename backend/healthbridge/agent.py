from pathlib import Path

from google.adk.agents import Agent

ROOT_PROMPT = Path(
    Path(__file__).parent / "prompts" / "root_prompt.txt"
).read_text(encoding="utf-8")

root_agent = Agent(
    name="healthbridge_root",
    model="gemini-2.5-flash",
    instruction=ROOT_PROMPT,
)