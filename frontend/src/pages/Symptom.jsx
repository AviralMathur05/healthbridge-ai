import { Activity } from "lucide-react";
import AIWorkspace from "../components/ai/AIWorkspace";
import { analyzeSymptoms } from "../services/api";

export default function Symptom() {
  return (
    <AIWorkspace
      eyebrow="Symptom Agent"
      title="Understand your symptoms"
      description="Describe what you're experiencing and receive structured, safety-focused AI guidance about possible concerns and appropriate next steps."
      icon={Activity}
      placeholder="Example: I have had fever, headache and fatigue for the past two days..."
      submitLabel="Analyze symptoms"
      request={analyzeSymptoms}
      accent="blue"
      examples={[
        "I have fever and headache for 2 days",
        "I have been coughing and feeling tired since yesterday",
        "I have mild stomach pain after eating",
      ]}
      safetyText="HealthBridge AI does not provide medical diagnoses. Seek professional medical care for persistent, severe, or worsening symptoms."
    />
  );
}