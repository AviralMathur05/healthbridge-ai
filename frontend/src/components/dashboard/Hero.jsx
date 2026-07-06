import { motion } from "framer-motion";
import {
  ArrowRight,
  FileUp,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="relative overflow-hidden rounded-[32px] border border-white/60 bg-gradient-to-br from-[#1768ff] via-[#078ee8] to-[#08bfd4] px-7 py-8 text-white shadow-[0_24px_70px_rgba(37,99,235,0.20)] sm:px-10 sm:py-10 lg:px-12"
    >
      <div className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-white/15 blur-3xl" />
      <div className="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-cyan-200/15 blur-3xl" />

      <div className="relative z-10 max-w-3xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-xs font-medium backdrop-blur-xl">
          <Sparkles size={14} />
          Powered by specialized AI healthcare agents
        </div>

        <h1 className="max-w-2xl text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-[58px] lg:leading-[1.03]">
          Healthcare guidance,
          <span className="block text-cyan-100">
            made more accessible.
          </span>
        </h1>

        <p className="mt-5 max-w-2xl text-[15px] leading-7 text-white/80 sm:text-base">
          Understand symptoms, medicines, medical reports and nearby care
          through one intelligent health workspace.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={() => navigate("/symptom")}
            className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3.5 text-sm font-semibold text-blue-700 shadow-lg shadow-blue-950/10 transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            <Stethoscope size={18} />
            Check symptoms
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </button>

          <button
            onClick={() => navigate("/report")}
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-slate-950/20 px-5 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-slate-950/30"
          >
            <FileUp size={18} />
            Analyze report
          </button>
        </div>

        <div className="mt-8 flex items-center gap-2 text-xs text-white/65">
          <ShieldCheck size={15} />
          AI-assisted guidance · Not a replacement for professional diagnosis
        </div>
      </div>

      <div className="absolute bottom-8 right-8 hidden xl:block">
        <div className="w-[270px] rounded-[28px] border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-2xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-white/60">AI Workspace</p>
              <p className="mt-1 text-sm font-semibold">
                6 health services
              </p>
            </div>

            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15">
              <Sparkles size={20} />
            </span>
          </div>

          <div className="mt-5 space-y-3">
            {["Specialized AI agents", "Health data context", "Nearby care discovery"].map(
              (item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2.5 text-xs text-white/80"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-200" />
                  {item}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
}