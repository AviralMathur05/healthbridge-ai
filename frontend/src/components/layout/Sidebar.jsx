import {
  Activity,
  AlertTriangle,
  FileText,
  HeartPulse,
  Hospital,
  LayoutDashboard,
  Pill,
  Sparkles,
  X,
} from "lucide-react";

import { useLocation, useNavigate } from "react-router-dom";

const menu = [
  { name: "Overview", icon: LayoutDashboard, path: "/" },
  { name: "Symptoms", icon: Activity, path: "/symptom" },
  { name: "Medicine", icon: Pill, path: "/medicine" },
  { name: "Reports", icon: FileText, path: "/report" },
  { name: "Hospitals", icon: Hospital, path: "/hospital" },
  { name: "Passport", icon: HeartPulse, path: "/passport" },
  { name: "Emergency", icon: AlertTriangle, path: "/emergency" },
];

export default function Sidebar({
  mobileMenuOpen = false,
  setMobileMenuOpen = () => {},
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const goTo = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  const sidebar = (
    <aside className="flex h-full flex-col border-r border-slate-200/70 bg-white/80 px-4 py-5 backdrop-blur-2xl dark:border-white/10 dark:bg-[#0d121d]/90">
      <div className="mb-8 flex items-center justify-between px-2">
        <button
          onClick={() => goTo("/")}
          className="flex items-center gap-3 text-left"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 text-white shadow-lg shadow-blue-500/20">
            <HeartPulse size={23} />
          </span>

          <span>
            <span className="block text-[17px] font-semibold tracking-[-0.02em] text-slate-950 dark:text-white">
              HealthBridge AI
            </span>

            <span className="mt-0.5 block text-xs text-slate-500 dark:text-slate-400">
              Intelligent health guidance
            </span>
          </span>
        </button>

        <button
          onClick={() => setMobileMenuOpen(false)}
          className="rounded-xl p-2 text-slate-500 hover:bg-slate-100 lg:hidden dark:hover:bg-white/10"
          aria-label="Close navigation"
        >
          <X size={20} />
        </button>
      </div>

      <nav className="health-scrollbar flex-1 space-y-1 overflow-y-auto">
        <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
          Workspace
        </p>

        {menu.map((item) => {
          const Icon = item.icon;
          const active = location.pathname === item.path;

          return (
            <button
              key={item.path}
              onClick={() => goTo(item.path)}
              className={`group flex w-full items-center gap-3 rounded-2xl px-3.5 py-3 text-sm font-medium transition-all ${
                active
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-white/[0.07] dark:hover:text-white"
              }`}
            >
              <Icon
                size={19}
                strokeWidth={active ? 2.2 : 1.8}
              />

              <span>{item.name}</span>

              {active && (
                <span className="ml-auto h-1.5 w-1.5 rounded-full bg-white" />
              )}
            </button>
          );
        })}
      </nav>

      <div className="mt-5 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 p-4 dark:border-blue-400/10 dark:from-blue-500/10 dark:to-cyan-400/5">
        <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm dark:bg-white/10 dark:text-blue-300">
          <Sparkles size={18} />
        </div>

        <p className="text-sm font-semibold text-slate-900 dark:text-white">
          AI health companion
        </p>

        <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
          Guidance powered by specialized healthcare agents.
        </p>
      </div>

      <p className="px-3 pt-5 text-[11px] text-slate-400">
        HealthBridge AI · v1.0
      </p>
    </aside>
  );

  return (
    <>
      <div className="fixed inset-y-0 left-0 z-40 hidden w-[280px] lg:block">
        {sidebar}
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[70] lg:hidden">
          <button
            className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close navigation overlay"
          />

          <div className="relative h-full w-[min(86vw,300px)] shadow-2xl">
            {sidebar}
          </div>
        </div>
      )}
    </>
  );
}