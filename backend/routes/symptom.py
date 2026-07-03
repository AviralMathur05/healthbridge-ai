from fastapi import APIRouter
from healthbridge.services.gemini_service import ask_gemini
router = APIRouter()

@router.post("/")
def symptom(data: dict):

    prompt = data["prompt"]

    answer = ask_gemini(f"""
You are an AI healthcare assistant.

The user says:
{prompt}

Do NOT diagnose.

Return:

1. Possible concern
2. Risk Level
3. Self-care advice
4. When to visit a doctor
""")

    return {
        "status": "success",
        "agent": "symptom",
        "response": answer
    }