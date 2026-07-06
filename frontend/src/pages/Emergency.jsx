import { AlertTriangle } from "lucide-react";
import AIWorkspace from "../components/ai/AIWorkspace";
import { emergencyHelp } from "../services/api";

export default function Emergency() {
  return (
    <AIWorkspace
      eyebrow="Emergency Guidance"
      title="Get immediate next-step guidance"
      description="Describe an urgent health situation to receive safety-focused information about immediate actions and when to contact emergency services."
      icon={AlertTriangle}
      placeholder="Describe the urgent situation clearly..."
      submitLabel="Get emergency guidance"
      request={emergencyHelp}
      accent="rose"
      examples={[
        "Someone has severe chest pain and difficulty breathing",
        "A person has suddenly become unconscious",
        "Someone has a deep cut and heavy bleeding",
      ]}
      safetyText="For life-threatening emergencies, contact local emergency services immediately. Do not wait for or rely solely on an AI response."
    />
  );
}