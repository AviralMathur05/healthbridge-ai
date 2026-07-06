import { Pill } from "lucide-react";
import AIWorkspace from "../components/ai/AIWorkspace";
import { explainMedicine } from "../services/api";

export default function Medicine() {
  return (
    <AIWorkspace
      eyebrow="Medicine Agent"
      title="Understand medicines more clearly"
      description="Ask about medicine uses, general precautions, common side effects, and other safety-focused information."
      icon={Pill}
      placeholder="Example: Explain the uses and common precautions of paracetamol..."
      submitLabel="Explain medicine"
      request={explainMedicine}
      accent="violet"
      examples={[
        "What is paracetamol commonly used for?",
        "Explain common precautions for ibuprofen",
        "What should I generally know about amoxicillin?",
      ]}
      safetyText="Do not start, stop, or change medication based only on AI-generated information. Follow guidance from a qualified healthcare professional."
    />
  );
}