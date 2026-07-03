from fastapi import APIRouter
from healthbridge.services.gemini_service import ask_gemini
router = APIRouter()

@router.post("/")
def report(data: dict):

    prompt = data["prompt"]

    answer = ask_gemini(f"""
Explain this medical report in simple language.

Explain this medical report in simple language.

Report:
{prompt}

Include:
- Important findings
- What they could indicate
- Questions to ask a doctor

Never diagnose.
""")

    return {
        "status": "success",
        "agent": "report",
        "response": answer
    }