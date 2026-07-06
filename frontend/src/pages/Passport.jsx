import { useState } from "react";
import { motion } from "framer-motion";
import {
  AlertCircle,
  CalendarDays,
  CheckCircle2,
  Database,
  HeartPulse,
  Languages,
  LoaderCircle,
  Search,
  ShieldCheck,
  UserRound,
  Users,
} from "lucide-react";

import MainLayout from "../components/layout/MainLayout";
import { getPassport } from "../services/api";

function formatDate(value) {
  if (!value) return "Not available";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return date.toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

function displayValue(value) {
  return value === null || value === undefined || value === ""
    ? "Not provided"
    : value;
}

export default function Passport() {
  const [id, setId] = useState("1");
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searched, setSearched] = useState(false);

  const loadPassport = async () => {
    const cleanId = id.trim();

    if (!cleanId || loading) return;

    setLoading(true);
    setError("");
    setPatient(null);
    setSearched(true);

    try {
      const data = await getPassport(cleanId);

      if (data?.error) {
        throw new Error(data.error);
      }

      setPatient(data);
    } catch (err) {
      console.error(err);

      setError(
        err?.response?.data?.detail ||
          err?.response?.data?.message ||
          err?.message ||
          "Patient passport could not be loaded."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      loadPassport();
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
          <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-gradient-to-br from-rose-500 to-blue-500 opacity-10 blur-3xl" />

          <div className="relative max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-blue-600 text-white shadow-lg shadow-blue-500/15">
                <HeartPulse size={23} />
              </span>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-rose-600 dark:text-rose-400">
                  Digital Health Passport
                </p>

                <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                  <Database size={13} />
                  Persistent patient information
                </p>
              </div>
            </div>

            <h1 className="mt-6 text-3xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-4xl dark:text-white">
              Access your health profile
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 dark:text-slate-400">
              Retrieve persistent patient information stored by HealthBridge AI
              through a unique patient identifier.
            </p>
          </div>
        </motion.section>

        <section className="rounded-[30px] border border-slate-200/70 bg-white/80 p-5 shadow-[0_18px_55px_rgba(15,23,42,0.055)] backdrop-blur-xl sm:p-6 dark:border-white/10 dark:bg-white/[0.04]">
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <UserRound
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="number"
                min="1"
                value={id}
                onChange={(event) => setId(event.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Enter patient ID"
                className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50/80 pl-12 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-rose-300 focus:bg-white focus:ring-4 focus:ring-rose-500/10 dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:focus:border-rose-400/30"
              />
            </div>

            <button
              onClick={loadPassport}
              disabled={!id.trim() || loading}
              className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-rose-500 to-blue-600 px-6 text-sm font-semibold text-white shadow-lg shadow-blue-500/15 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
            >
              {loading ? (
                <>
                  <LoaderCircle size={18} className="animate-spin" />
                  Loading...
                </>
              ) : (
                <>
                  <Search size={18} />
                  Load passport
                </>
              )}
            </button>
          </div>

          <div className="mt-4 flex items-start gap-2 text-xs leading-5 text-slate-400">
            <ShieldCheck size={15} className="mt-0.5 shrink-0" />
            Patient records are retrieved from the persistent HealthBridge
            database using the supplied identifier.
          </div>
        </section>

        {loading && (
          <div className="grid gap-6 xl:grid-cols-[1.05fr_1.5fr]">
            <div className="h-[350px] animate-pulse rounded-[30px] border border-slate-200/70 bg-white/60 dark:border-white/10 dark:bg-white/[0.035]" />
            <div className="h-[350px] animate-pulse rounded-[30px] border border-slate-200/70 bg-white/60 dark:border-white/10 dark:bg-white/[0.035]" />
          </div>
        )}

        {error && !loading && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-start gap-3 rounded-[24px] border border-rose-200 bg-rose-50 p-5 text-rose-700 dark:border-rose-400/15 dark:bg-rose-400/[0.07] dark:text-rose-300"
          >
            <AlertCircle size={19} className="mt-0.5 shrink-0" />

            <div>
              <p className="text-sm font-semibold">
                Patient passport not found
              </p>

              <p className="mt-1 text-xs leading-6">{error}</p>
            </div>
          </motion.div>
        )}

        {patient && !loading && (
          <motion.section
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid gap-6 xl:grid-cols-[1.05fr_1.5fr]"
          >
            <article className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#165DFF] via-[#237CEB] to-[#06B6D4] p-7 text-white shadow-[0_24px_70px_rgba(37,99,235,0.22)]">
              <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-white/15 blur-3xl" />

              <div className="relative flex h-full min-h-[300px] flex-col">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-xl">
                      <HeartPulse size={22} />
                    </span>

                    <div>
                      <p className="text-sm font-semibold">
                        HealthBridge AI
                      </p>

                      <p className="mt-0.5 text-[11px] text-white/60">
                        Digital Health Passport
                      </p>
                    </div>
                  </div>

                  <CheckCircle2 size={20} className="text-cyan-100" />
                </div>

                <div className="my-auto py-10">
                  <p className="text-xs uppercase tracking-[0.16em] text-white/60">
                    Patient
                  </p>

                  <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em]">
                    {displayValue(patient.name)}
                  </h2>

                  <p className="mt-3 text-sm text-white/70">
                    Patient ID · HB-{String(patient.id).padStart(5, "0")}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-white/15 pt-5 text-xs text-white/65">
                  <span>{displayValue(patient.language)}</span>
                  <span>Persistent profile</span>
                </div>
              </div>
            </article>

            <article className="rounded-[32px] border border-slate-200/70 bg-white/80 p-6 shadow-[0_18px_55px_rgba(15,23,42,0.055)] backdrop-blur-xl sm:p-7 dark:border-white/10 dark:bg-white/[0.04]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-600 dark:text-blue-400">
                    Patient Information
                  </p>

                  <h2 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-slate-950 dark:text-white">
                    Health profile details
                  </h2>
                </div>

                <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-[11px] font-semibold text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
                  Record found
                </span>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <DetailCard
                  icon={UserRound}
                  label="Full name"
                  value={displayValue(patient.name)}
                />

                <DetailCard
                  icon={Users}
                  label="Gender"
                  value={displayValue(patient.gender)}
                />

                <DetailCard
                  icon={HeartPulse}
                  label="Age"
                  value={
                    patient.age === null || patient.age === undefined
                      ? "Not provided"
                      : `${patient.age} years`
                  }
                />

                <DetailCard
                  icon={Languages}
                  label="Preferred language"
                  value={displayValue(patient.language)}
                />

                <DetailCard
                  icon={Database}
                  label="Patient ID"
                  value={`HB-${String(patient.id).padStart(5, "0")}`}
                />

                <DetailCard
                  icon={CalendarDays}
                  label="Profile created"
                  value={formatDate(patient.created_at)}
                />
              </div>

              <div className="mt-6 rounded-[22px] border border-blue-100 bg-blue-50/60 p-4 dark:border-blue-400/10 dark:bg-blue-400/[0.06]">
                <div className="flex items-start gap-3">
                  <Database
                    size={18}
                    className="mt-0.5 shrink-0 text-blue-600 dark:text-blue-400"
                  />

                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      Persistent patient context
                    </p>

                    <p className="mt-1 text-xs leading-6 text-slate-500 dark:text-slate-400">
                      This patient profile is stored in the HealthBridge database
                      and can be retrieved across application sessions.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </motion.section>
        )}

        {!searched && !patient && (
          <section className="grid gap-4 md:grid-cols-3">
            {[
              [
                "Persistent records",
                "Patient profiles are stored through the backend database layer.",
              ],
              [
                "Unique identity",
                "Each health passport is retrieved using a unique patient ID.",
              ],
              [
                "Accessible context",
                "Stored profile information can support future health workflows.",
              ],
            ].map(([title, description], index) => (
              <div
                key={title}
                className="rounded-[26px] border border-slate-200/70 bg-white/65 p-5 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.035]"
              >
                <span className="text-xs font-semibold text-rose-600 dark:text-rose-400">
                  0{index + 1}
                </span>

                <h3 className="mt-4 text-sm font-semibold text-slate-950 dark:text-white">
                  {title}
                </h3>

                <p className="mt-2 text-xs leading-6 text-slate-500 dark:text-slate-400">
                  {description}
                </p>
              </div>
            ))}
          </section>
        )}
      </div>
    </MainLayout>
  );
}

function DetailCard({ icon: Icon, label, value }) {
  return (
    <div className="rounded-[20px] border border-slate-200/70 bg-slate-50/65 p-4 dark:border-white/10 dark:bg-white/[0.035]">
      <div className="flex items-center gap-2 text-slate-400">
        <Icon size={15} />
        <p className="text-[11px] font-medium uppercase tracking-[0.1em]">
          {label}
        </p>
      </div>

      <p className="mt-3 break-words text-sm font-semibold text-slate-900 dark:text-white">
        {value}
      </p>
    </div>
  );
}