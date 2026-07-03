from fastapi import APIRouter
from healthbridge.services.gemini_service import ask_gemini

router = APIRouter()

@router.post("/")
def medicine(data: dict):
    prompt = data["prompt"]

    answer = ask_gemini(f"""
Explain this medicine in simple language.

Medicine:
{prompt}

Include:
- Uses
- Common side effects
- Precautions
- When to consult a doctor

Never prescribe medicine.
""")

    return {
        "status": "success",
        "response": answer
    }