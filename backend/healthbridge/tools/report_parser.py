import re


def extract_values(text: str):
    pattern = r"([A-Za-z ]+)\s*[:\-]?\s*([0-9]+\.?[0-9]*)"

    matches = re.findall(pattern, text)

    results = {}

    for name, value in matches:
        results[name.strip()] = value

    return results