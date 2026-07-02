from sqlalchemy.orm import Session

from healthbridge.database.database import SessionLocal
from healthbridge.database.models import Patient


class PatientMemory:
    def __init__(self):
        self.db: Session = SessionLocal()

    def create_patient(self, name: str, age: int = None, gender: str = None):
        patient = Patient(
            name=name,
            age=age,
            gender=gender,
        )

        self.db.add(patient)
        self.db.commit()
        self.db.refresh(patient)

        return patient

    def get_patient(self, patient_id: int):
        return (
            self.db.query(Patient)
            .filter(Patient.id == patient_id)
            .first()
        )

    def get_all_patients(self):
        return self.db.query(Patient).all()