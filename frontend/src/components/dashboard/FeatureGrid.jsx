import { useNavigate } from "react-router-dom";
import {
  Activity,
  Pill,
  FileText,
  Hospital,
  HeartPulse,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";

export default function FeatureGrid() {
  const navigate = useNavigate();

  const features = [
    {
      title: "Symptom Checker",
      description: "Analyze symptoms with AI",
      path: "/symptom",
      icon: Activity,
    },
    {
      title: "Medicine Guide",
      description: "Explain medicines safely",
      path: "/medicine",
      icon: Pill,
    },
    {
      title: "Medical Reports",
      description: "Understand lab reports",
      path: "/report",
      icon: FileText,
    },
    {
      title: "Hospitals",
      description: "Find nearby hospitals",
      path: "/hospital",
      icon: Hospital,
    },
    {
      title: "Health Passport",
      description: "View your medical profile",
      path: "/passport",
      icon: HeartPulse,
    },
    {
      title: "Emergency",
      description: "Emergency guidance",
      path: "/emergency",
      icon: AlertTriangle,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {features.map((feature) => {
        const Icon = feature.icon;

        return (
          <div
            key={feature.title}
            onClick={() => navigate(feature.path)}
            className="bg-white rounded-2xl shadow-md p-6 cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <Icon className="text-blue-600 mb-4" size={36} />

            <h2 className="text-xl font-semibold">
              {feature.title}
            </h2>

            <p className="text-gray-500 mt-2">
              {feature.description}
            </p>

            <div className="flex justify-end mt-4">
              <ArrowRight className="text-blue-600" />
            </div>
          </div>
        );
      })}
    </div>
  );
}