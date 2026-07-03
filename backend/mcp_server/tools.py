from healthbridge.tools.medicine_lookup import lookup_medicine
from healthbridge.tools.hospital_lookup import find_hospitals


def medicine_tool(name: str):
    return lookup_medicine(name)


def hospital_tool(city: str):
    return find_hospitals(city)