import { motion } from "framer-motion";
import {
  Activity,
  AlertTriangle,
  ArrowUpRight,
  FileText,
  HeartPulse,
  Hospital,
  Pill,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const features = [
  {
    title: "Symptom Checker",
    description: "Describe symptoms and receive structured AI-assisted guidance.",
    path: "/symptom",
    icon: Activity,
    accent: "bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300",
  },
  {
    title: "Medicine Guide",
    description: "Understand medicine usage, precautions and general information.",
    path: "/medicine",
    icon: Pill,
    accent: "bg-violet-50 text-violet-600 dark:bg-violet-400/10 dark:text-violet-300",
  },
  {
    title: "Medical Reports",
    description: "Turn complex medical report information into clearer explanations.",
    path: "/report",
    icon: FileText,
    accent: "bg-cyan-50 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-300",
  },
  {
    title: "Hospital Finder",
    description: "Discover healthcare facilities based on your selected city.",
    path: "/hospital",
    icon: Hospital,
    accent: "bg-emerald-50 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-300",
  },
  {
    title: "Health Passport",
    description: "Access persistent patient information through one health profile.",
    path: "/passport",
    icon: HeartPulse,
    accent: "bg-rose-50 text-rose-600 dark:bg-rose-400/10 dark:text-rose-300",
  },
  {
    title: "Emergency Guidance",
    description: "Get safety-focused next-step guidance for urgent situations.",
    path: "/emergency",
    icon: AlertTriangle,
    accent: "bg-amber-50 text-amber-600 dark:bg-amber-400/10 dark:text-amber-300",
  },
];

export default function FeatureGrid() {
  const navigate = useNavigate();

  return (
    <section>
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600 dark:text-blue-400">
            AI health services
          </p>

          <h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-slate-950 dark:text-white">
            Everything you need in one workspace
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
            Explore specialized tools designed to make health information easier
            to understand and access.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <motion.button
              key={feature.path}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16 + index * 0.045 }}
              onClick={() => navigate(feature.path)}
              className="group min-h-[220px] rounded-[28px] border border-slate-200/70 bg-white/80 p-6 text-left shadow-[0_14px_45px_rgba(15,23,42,0.045)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_24px_65px_rgba(37,99,235,0.10)] dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-blue-400/20"
            >
              <div className="flex items-start justify-between">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${feature.accent}`}
                >
                  <Icon size={22} />
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-400 transition group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-600 dark:border-white/10 dark:group-hover:bg-blue-400/10">
                  <ArrowUpRight size={17} />
                </span>
              </div>

              <h3 className="mt-7 text-lg font-semibold tracking-[-0.025em] text-slate-950 dark:text-white">
                {feature.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                {feature.description}
              </p>

              <p className="mt-5 text-xs font-semibold text-blue-600 opacity-0 transition group-hover:opacity-100 dark:text-blue-400">
                Open service →
              </p>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}