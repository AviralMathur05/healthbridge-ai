from datetime import datetime

from sqlalchemy import Column, DateTime, Integer, String

from healthbridge.database.database import Base


class Patient(Base):
    __tablename__ = "patients"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    age = Column(Integer)
    gender = Column(String)
    language = Column(String, default="English")
    created_at = Column(DateTime, default=datetime.utcnow)