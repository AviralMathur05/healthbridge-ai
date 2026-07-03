import AIFeaturePage from "../components/AIFeaturePage";
import { emergencyHelp } from "../services/api";

export default function Emergency() {
  return (
    <AIFeaturePage
      title="Emergency Assistant"
      placeholder="Describe the emergency..."
      apiFunction={emergencyHelp}
    />
  );
}