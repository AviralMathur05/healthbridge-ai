from fastapi import APIRouter
from healthbridge.services.gemini_service import ask_gemini
router = APIRouter()

@router.post("/")
def emergency(data: dict):

    prompt = data["prompt"]

    answer = ask_gemini(f"""
Assess if this sounds like a medical emergency.

Situation:
{prompt}

First determine if this sounds like a medical emergency.

If yes:
- Tell them to contact emergency services immediately.
- Explain why.

If not:
- Give safe first-aid advice.
- Recommend seeing a healthcare professional if needed.

Never diagnose.
""")

    return {
        "status": "success",
        "agent": "emergency",
        "response": answer
    }