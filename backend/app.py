from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes import (
    symptom,
    medicine,
    report,
    passport,
    hospital,
    emergency,
)

app = FastAPI(
    title="HealthBridge AI",
    version="1.0",
)

app.add_middleware(
   app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)
)

app.include_router(symptom.router, prefix="/symptom")
app.include_router(medicine.router, prefix="/medicine")
app.include_router(report.router, prefix="/report")
app.include_router(passport.router, prefix="/passport")
app.include_router(hospital.router, prefix="/hospital")
app.include_router(emergency.router, prefix="/emergency")


@app.get("/")
def home():
    return {
        "message": "HealthBridge AI Running 🚀"
    }