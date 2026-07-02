from healthbridge.services.patient_memory import PatientMemory

memory = PatientMemory()

patient = memory.create_patient(
    name="Aviral",
    age=20,
    gender="Male"
)

print("Created:", patient.id, patient.name)

patients = memory.get_all_patients()

for p in patients:
    print(p.id, p.name, p.age, p.gender)