BLOCKED_PATTERNS = [
    "ignore previous instructions",
    "forget your instructions",
    "system prompt",
    "reveal your prompt",
    "bypass safety",
    "act as doctor",
    "prescribe medicine"
]


def is_safe_prompt(text: str):
    lower = text.lower()

    for pattern in BLOCKED_PATTERNS:
        if pattern in lower:
            return False

    return True