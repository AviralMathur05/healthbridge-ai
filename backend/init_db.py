from healthbridge.database.database import Base, engine
from healthbridge.database.models import Patient

Base.metadata.create_all(bind=engine)

print("✅ Database created successfully!")