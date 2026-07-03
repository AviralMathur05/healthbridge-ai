import requests


def find_hospitals(city: str):

    url = "https://nominatim.openstreetmap.org/search"

    params = {
        "q": f"hospital in {city}",
        "format": "json",
        "limit": 5
    }

    headers = {
        "User-Agent": "HealthBridgeAI"
    }

    response = requests.get(
        url,
        params=params,
        headers=headers
    )

    if response.status_code != 200:
        return []

    return response.json()