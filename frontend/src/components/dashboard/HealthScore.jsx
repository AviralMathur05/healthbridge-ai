import { motion } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  HeartPulse,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const metrics = [
  {
    label: "Health status",
    value: "Improving",
    detail: "Based on recent activity",
    icon: Activity,
  },
  {
    label: "AI services",
    value: "6 active",
    detail: "Specialized health tools",
    icon: Sparkles,
  },
  {
    label: "Guidance mode",
    value: "Safety first",
    detail: "Non-diagnostic assistance",
    icon: ShieldCheck,
  },
];

export default function HealthScore() {
  return (
    <section className="grid gap-4 xl:grid-cols-[1.25fr_2fr]">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08 }}
        className="rounded-[28px] border border-slate-200/70 bg-white/80 p-6 shadow-[0_14px_45px_rgba(15,23,42,0.06)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.045]"
      >
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Health overview
            </p>

            <div className="mt-3 flex items-end gap-3">
              <span className="text-5xl font-semibold tracking-[-0.05em] text-slate-950 dark:text-white">
                82
              </span>

              <span className="mb-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-300">
                +4 this week
              </span>
            </div>
          </div>

          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-500 dark:bg-rose-400/10">
            <HeartPulse size={23} />
          </span>
        </div>

        <div className="mt-7">
          <div className="mb-2 flex justify-between text-xs">
            <span className="text-slate-500 dark:text-slate-400">
              Overall wellness
            </span>
            <span className="font-semibold text-slate-700 dark:text-slate-200">
              82%
            </span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-white/10">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "82%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"
            />
          </div>
        </div>

        <button className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400">
          View health insights
          <ArrowUpRight size={14} />
        </button>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-3">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;

          return (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 + index * 0.05 }}
              className="rounded-[28px] border border-slate-200/70 bg-white/75 p-5 shadow-[0_14px_45px_rgba(15,23,42,0.045)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300">
                <Icon size={19} />
              </span>

              <p className="mt-6 text-xs font-medium text-slate-500 dark:text-slate-400">
                {metric.label}
              </p>

              <p className="mt-1 text-lg font-semibold tracking-[-0.02em] text-slate-950 dark:text-white">
                {metric.value}
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-400">
                {metric.detail}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}