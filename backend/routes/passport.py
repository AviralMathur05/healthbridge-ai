from fastapi import APIRouter
from healthbridge.services.patient_memory import PatientMemory

router = APIRouter()

memory = PatientMemory()

@router.get("/{patient_id}")
def get_passport(patient_id: int):
    patient = memory.get_patient(patient_id)

    if not patient:
        return {"error": "Patient not found"}

    return {
        "id": patient.id,
        "name": patient.name,
        "age": patient.age,
        "gender": patient.gender,
        "language": patient.language,
        "created_at": patient.created_at,
    }