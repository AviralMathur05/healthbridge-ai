import { useState } from "react";
import {
  AlertCircle,
  ArrowRight,
  Bot,
  CheckCircle2,
  LoaderCircle,
  RotateCcw,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import MainLayout from "../layout/MainLayout";

function normalizeResponse(result) {
  if (typeof result === "string") return result;

  return (
    result?.response ||
    result?.answer ||
    result?.message ||
    JSON.stringify(result, null, 2)
  );
}

export default function AIWorkspace({
  eyebrow,
  title,
  description,
  icon: Icon,
  examples = [],
  placeholder,
  submitLabel = "Analyze",
  safetyText,
  request,
  accent = "blue",
}) {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const accentStyles = {
    blue: "from-blue-600 to-cyan-400",
    violet: "from-violet-600 to-fuchsia-400",
    cyan: "from-cyan-600 to-sky-400",
    rose: "from-rose-600 to-orange-400",
  };

  const gradient = accentStyles[accent] || accentStyles.blue;

  const handleSubmit = async () => {
    const cleanPrompt = prompt.trim();

    if (!cleanPrompt || loading) return;

    setLoading(true);
    setError("");
    setResponse("");

    try {
      const result = await request(cleanPrompt);
      setResponse(normalizeResponse(result));
    } catch (err) {
      console.error(err);

      setError(
        err?.response?.data?.detail ||
          err?.response?.data?.message ||
          "The AI service could not complete your request. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const resetWorkspace = () => {
    setPrompt("");
    setResponse("");
    setError("");
  };

  const handleKeyDown = (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <MainLayout>
      <div className="mx-auto max-w-[1200px] space-y-6">
        <motion.section
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-[32px] border border-slate-200/70 bg-white/75 p-7 shadow-[0_18px_55px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:p-9 dark:border-white/10 dark:bg-white/[0.04]"
        >
          <div
            className={`absolute -right-20 -top-24 h-64 w-64 rounded-full bg-gradient-to-br ${gradient} opacity-[0.10] blur-3xl`}
          />

          <div className="relative flex flex-col justify-between gap-6 lg:flex-row lg:items-start">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} text-white shadow-lg`}
                >
                  <Icon size={22} />
                </span>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600 dark:text-blue-400">
                    {eyebrow}
                  </p>

                  <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                    <Sparkles size={13} />
                    Specialized AI assistance
                  </p>
                </div>
              </div>

              <h1 className="mt-6 text-3xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-4xl dark:text-white">
                {title}
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 dark:text-slate-400">
                {description}
              </p>
            </div>

            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700 dark:border-emerald-400/15 dark:bg-emerald-400/10 dark:text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              AI service online
            </div>
          </div>
        </motion.section>

        <section className="grid gap-6 xl:grid-cols-[1fr_320px]">
          <div className="space-y-6">
            <div className="rounded-[30px] border border-slate-200/70 bg-white/80 p-5 shadow-[0_18px_55px_rgba(15,23,42,0.055)] backdrop-blur-xl sm:p-6 dark:border-white/10 dark:bg-white/[0.04]">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h2 className="text-sm font-semibold text-slate-950 dark:text-white">
                    How can HealthBridge help?
                  </h2>

                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    Provide clear and relevant information for better guidance.
                  </p>
                </div>

                {(prompt || response || error) && (
                  <button
                    onClick={resetWorkspace}
                    className="flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-white/10 dark:hover:text-white"
                  >
                    <RotateCcw size={14} />
                    Clear
                  </button>
                )}
              </div>

              <textarea
                value={prompt}
                onChange={(event) => setPrompt(event.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                rows={7}
                className="w-full resize-none rounded-[22px] border border-slate-200 bg-slate-50/80 p-5 text-sm leading-7 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:focus:border-blue-400/30 dark:focus:bg-white/[0.06]"
              />

              <div className="mt-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                <p className="text-[11px] text-slate-400">
                  Tip: Press Ctrl + Enter to submit
                </p>

                <button
                  onClick={handleSubmit}
                  disabled={!prompt.trim() || loading}
                  className={`inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r ${gradient} px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0`}
                >
                  {loading ? (
                    <>
                      <LoaderCircle size={17} className="animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      {submitLabel}
                    </>
                  )}
                </button>
              </div>
            </div>

            {loading && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-[30px] border border-blue-200/70 bg-blue-50/60 p-6 dark:border-blue-400/15 dark:bg-blue-400/[0.06]"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white">
                    <Bot size={20} />
                  </span>

                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      HealthBridge AI is analyzing your request
                    </p>

                    <p className="mt-2 text-xs leading-6 text-slate-500 dark:text-slate-400">
                      A specialized agent is preparing structured guidance.
                    </p>

                    <div className="mt-4 flex gap-1.5">
                      {[0, 1, 2].map((item) => (
                        <span
                          key={item}
                          className="h-2 w-2 animate-pulse rounded-full bg-blue-500"
                          style={{ animationDelay: `${item * 150}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {response && !loading && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="overflow-hidden rounded-[30px] border border-slate-200/70 bg-white/85 shadow-[0_18px_55px_rgba(15,23,42,0.06)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.045]"
              >
                <div className="flex items-center justify-between border-b border-slate-200/70 px-6 py-4 dark:border-white/10">
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-white`}
                    >
                      <Bot size={17} />
                    </span>

                    <div>
                      <p className="text-sm font-semibold text-slate-950 dark:text-white">
                        AI Guidance
                      </p>

                      <p className="text-[11px] text-slate-400">
                        Generated by HealthBridge AI
                      </p>
                    </div>
                  </div>

                  <CheckCircle2 size={18} className="text-emerald-500" />
                </div>

                <div className="whitespace-pre-wrap px-6 py-6 text-sm leading-7 text-slate-700 dark:text-slate-300">
                  {response}
                </div>
              </motion.div>
            )}

            {error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-3 rounded-[24px] border border-rose-200 bg-rose-50 p-5 text-rose-700 dark:border-rose-400/15 dark:bg-rose-400/[0.07] dark:text-rose-300"
              >
                <AlertCircle size={19} className="mt-0.5 shrink-0" />

                <div>
                  <p className="text-sm font-semibold">
                    Unable to complete request
                  </p>

                  <p className="mt-1 text-xs leading-6">{error}</p>
                </div>
              </motion.div>
            )}
          </div>

          <aside className="space-y-5">
            <div className="rounded-[28px] border border-slate-200/70 bg-white/75 p-5 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                Try an example
              </p>

              <div className="mt-4 space-y-2">
                {examples.map((example) => (
                  <button
                    key={example}
                    onClick={() => setPrompt(example)}
                    className="group flex w-full items-center justify-between gap-3 rounded-2xl border border-slate-200/70 bg-slate-50/70 p-3.5 text-left text-xs leading-5 text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 dark:border-white/10 dark:bg-white/[0.035] dark:text-slate-400 dark:hover:border-blue-400/20 dark:hover:bg-blue-400/[0.07] dark:hover:text-blue-300"
                  >
                    <span>{example}</span>
                    <ArrowRight
                      size={14}
                      className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-amber-200/70 bg-amber-50/70 p-5 dark:border-amber-400/15 dark:bg-amber-400/[0.06]">
              <div className="flex items-center gap-2 text-amber-700 dark:text-amber-300">
                <ShieldCheck size={18} />
                <p className="text-sm font-semibold">Safety guidance</p>
              </div>

              <p className="mt-3 text-xs leading-6 text-amber-800/70 dark:text-amber-200/60">
                {safetyText}
              </p>
            </div>
          </aside>
        </section>
      </div>
    </MainLayout>
  );
}