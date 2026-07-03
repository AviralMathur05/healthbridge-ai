import AIFeaturePage from "../components/AIFeaturePage";
import { explainMedicine } from "../services/api";

export default function Medicine() {
  return (
    <AIFeaturePage
      title="Medicine Guide"
      placeholder="Enter medicine name..."
      apiFunction={explainMedicine}
    />
  );
}