import AIFeaturePage from "../components/AIFeaturePage";
import { analyzeSymptoms } from "../services/api";

export default function Symptom() {
  return (
    <AIFeaturePage
      title="Symptom Checker"
      placeholder="Describe your symptoms..."
      apiFunction={analyzeSymptoms}
    />
  );
}