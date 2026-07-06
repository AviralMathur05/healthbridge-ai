import { FileText } from "lucide-react";
import AIWorkspace from "../components/ai/AIWorkspace";
import { analyzeReport } from "../services/api";

export default function Report() {
  return (
    <AIWorkspace
      eyebrow="Report Agent"
      title="Make medical reports easier to understand"
      description="Enter medical report findings or laboratory values to receive a clearer, structured explanation of the information."
      icon={FileText}
      placeholder="Paste your medical report findings or laboratory values here..."
      submitLabel="Analyze report"
      request={analyzeReport}
      accent="cyan"
      examples={[
        "Hemoglobin: 11.2 g/dL, WBC: 7,500 cells/µL",
        "Fasting glucose: 118 mg/dL",
        "Total cholesterol: 220 mg/dL, HDL: 42 mg/dL",
      ]}
      safetyText="AI interpretation is informational and may miss important clinical context. Discuss medical reports and abnormal results with a qualified healthcare professional."
    />
  );
}