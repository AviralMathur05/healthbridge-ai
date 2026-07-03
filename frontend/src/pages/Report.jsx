import AIFeaturePage from "../components/AIFeaturePage";
import { analyzeReport } from "../services/api";

export default function Report() {
  return (
    <AIFeaturePage
      title="Medical Report Analyzer"
      placeholder="Paste your report values here..."
      apiFunction={analyzeReport}
    />
  );
}