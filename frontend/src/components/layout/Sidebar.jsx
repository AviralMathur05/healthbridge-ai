import {
  Activity,
  Pill,
  FileText,
  Hospital,
  HeartPulse,
  AlertTriangle,
  LayoutDashboard,
} from "lucide-react";

import { useNavigate, useLocation } from "react-router-dom";

export default function Sidebar() {

  const navigate = useNavigate();
  const location = useLocation();

  const menu = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/" },
    { name: "Symptoms", icon: Activity, path: "/symptom" },
    { name: "Medicine", icon: Pill, path: "/medicine" },
    { name: "Reports", icon: FileText, path: "/report" },
    { name: "Hospitals", icon: Hospital, path: "/hospital" },
    { name: "Passport", icon: HeartPulse, path: "/passport" },
    { name: "Emergency", icon: AlertTriangle, path: "/emergency" },
  ];

  return (
    <aside className="w-72 bg-slate-900 text-white p-6">

      <h1 className="text-3xl font-bold mb-10">
        ❤️ HealthBridge
      </h1>

      <div className="space-y-3">

        {menu.map((item) => {

          const Icon = item.icon;

          return (
            <button
              key={item.name}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-3 rounded-xl p-4 transition ${
                location.pathname === item.path
                  ? "bg-blue-600"
                  : "hover:bg-slate-700"
              }`}
            >
              <Icon size={20} />
              {item.name}
            </button>
          );

        })}

      </div>

    </aside>
  );
}