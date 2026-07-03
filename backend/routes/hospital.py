from fastapi import APIRouter
from healthbridge.tools.hospital_lookup import find_hospitals

router = APIRouter()

@router.get("/{city}")
def hospitals(city: str):
    data = find_hospitals(city)

    hospitals = []

    for item in data:
        hospitals.append({
            "name": item.get("display_name"),
            "lat": item.get("lat"),
            "lon": item.get("lon"),
        })

    return {"results": hospitals}