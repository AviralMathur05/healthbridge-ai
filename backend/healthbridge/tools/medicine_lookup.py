MEDICINES = {
    "paracetamol": {
        "purpose": "Relieves pain and reduces fever.",
        "side_effects": [
            "Nausea",
            "Rare allergic reactions"
        ],
        "precautions": [
            "Do not exceed the recommended daily dose.",
            "Avoid combining multiple medicines containing paracetamol."
        ]
    },
    "ibuprofen": {
        "purpose": "Reduces pain, inflammation, and fever.",
        "side_effects": [
            "Stomach upset",
            "Heartburn"
        ],
        "precautions": [
            "Take with food if it upsets your stomach.",
            "Avoid if advised by your doctor due to kidney disease or stomach ulcers."
        ]
    }
}


def lookup_medicine(name: str):
    return MEDICINES.get(name.lower())