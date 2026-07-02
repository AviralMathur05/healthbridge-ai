HOSPITALS = {
    "manipal": [
        {
            "name": "KMC Hospital",
            "type": "Multi Specialty",
            "phone": "+91-820-2922326"
        },
        {
            "name": "Dr. TMA Pai Hospital",
            "type": "General",
            "phone": "+91-820-2922208"
        }
    ]
}


def find_hospitals(city: str):
    return HOSPITALS.get(city.lower(), [])