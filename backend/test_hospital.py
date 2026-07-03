from healthbridge.tools.hospital_lookup import find_hospitals

results = find_hospitals("Manipal")

for hospital in results:
    print(hospital["display_name"])