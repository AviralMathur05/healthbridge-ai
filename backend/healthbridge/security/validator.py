def validate_input(text: str):

    if len(text) > 5000:
        return False, "Input too long."

    if len(text.strip()) == 0:
        return False, "Input cannot be empty."

    return True, ""