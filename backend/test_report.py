from healthbridge.tools.report_parser import extract_values

sample = """
Hemoglobin : 10.2
WBC : 12500
Platelets : 220000
"""

print(extract_values(sample))