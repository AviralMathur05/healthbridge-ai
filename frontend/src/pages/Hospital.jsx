import { useState } from "react";
import { motion } from "framer-motion";
import {
  AlertCircle,
  ArrowUpRight,
  Building2,
  Hospital as HospitalIcon,
  LoaderCircle,
  MapPin,
  Navigation,
  Search,
  ShieldCheck,
} from "lucide-react";

import MainLayout from "../components/layout/MainLayout";
import { findHospitals } from "../services/api";

export default function Hospital() {
  const [city, setCity] = useState("");
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searched, setSearched] = useState(false);

  const searchHospitals = async () => {
    const cleanCity = city.trim();

    if (!cleanCity || loading) return;

    setLoading(true);
    setError("");
    setHospitals([]);
    setSearched(true);

    try {
      const result = await findHospitals(cleanCity);

      const data = Array.isArray(result)
        ? result
        : result?.hospitals || result?.results || [];

      setHospitals(data);
    } catch (err) {
      console.error(err);

      setError(
        err?.response?.data?.detail ||
          err?.response?.data?.message ||
          "Unable to find hospitals right now. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      searchHospitals();
    }
  };

  const openMap = (hospital) => {
    const lat = hospital.lat;
    const lon = hospital.lon;

    const query =
      lat && lon
        ? `${lat},${lon}`
        : hospital.display_name || hospital.name || city;

    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        query
      )}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <MainLayout>
      <div className="mx-auto max-w-[1200px] space-y-6">
        <motion.section
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-[32px] border border-slate-200/70 bg-white/75 p-7 shadow-[0_18px_55px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:p-9 dark:border-white/10 dark:bg-white/[0.04]"
        >
          <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-400 opacity-10 blur-3xl" />

          <div className="relative max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/20">
                <HospitalIcon size={22} />
              </span>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-600 dark:text-emerald-400">
                  Healthcare Discovery
                </p>

                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  Location-based hospital search
                </p>
              </div>
            </div>

            <h1 className="mt-6 text-3xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-4xl dark:text-white">
              Find healthcare facilities near you
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 dark:text-slate-400">
              Search by city to discover hospitals and healthcare facilities
              using location-based healthcare data.
            </p>
          </div>
        </motion.section>

        <section className="rounded-[30px] border border-slate-200/70 bg-white/80 p-5 shadow-[0_18px_55px_rgba(15,23,42,0.055)] backdrop-blur-xl sm:p-6 dark:border-white/10 dark:bg-white/[0.04]">
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <MapPin
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                value={city}
                onChange={(event) => setCity(event.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Enter a city, e.g. Manipal"
                className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50/80 pl-12 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-300 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:focus:border-emerald-400/30"
              />
            </div>

            <button
              onClick={searchHospitals}
              disabled={!city.trim() || loading}
              className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-cyan-500 px-6 text-sm font-semibold text-white shadow-lg shadow-emerald-500/15 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
            >
              {loading ? (
                <>
                  <LoaderCircle size={18} className="animate-spin" />
                  Searching...
                </>
              ) : (
                <>
                  <Search size={18} />
                  Find hospitals
                </>
              )}
            </button>
          </div>

          <div className="mt-4 flex items-start gap-2 text-xs leading-5 text-slate-400">
            <ShieldCheck size={15} className="mt-0.5 shrink-0" />
            Search results are provided for discovery purposes. Verify facility
            details before visiting.
          </div>
        </section>

        {loading && (
          <div className="grid gap-4 md:grid-cols-2">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="h-[220px] animate-pulse rounded-[28px] border border-slate-200/70 bg-white/60 dark:border-white/10 dark:bg-white/[0.035]"
              />
            ))}
          </div>
        )}

        {error && !loading && (
          <div className="flex items-start gap-3 rounded-[24px] border border-rose-200 bg-rose-50 p-5 text-rose-700 dark:border-rose-400/15 dark:bg-rose-400/[0.07] dark:text-rose-300">
            <AlertCircle size={19} className="mt-0.5 shrink-0" />

            <div>
              <p className="text-sm font-semibold">
                Unable to complete search
              </p>
              <p className="mt-1 text-xs leading-6">{error}</p>
            </div>
          </div>
        )}

        {!loading && !error && hospitals.length > 0 && (
          <section>
            <div className="mb-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-600 dark:text-emerald-400">
                Search results
              </p>

              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-slate-950 dark:text-white">
                Healthcare facilities in {city}
              </h2>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {hospitals.length} facilities returned by the hospital discovery
                service.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {hospitals.map((hospital, index) => (
                <motion.article
                  key={hospital.place_id || `${hospital.display_name}-${index}`}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group flex min-h-[220px] flex-col rounded-[28px] border border-slate-200/70 bg-white/80 p-6 shadow-[0_14px_45px_rgba(15,23,42,0.045)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_24px_65px_rgba(16,185,129,0.10)] dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-emerald-400/20"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-300">
                      <Building2 size={22} />
                    </span>

                    <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
                      Healthcare facility
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold tracking-[-0.025em] text-slate-950 dark:text-white">
                    {hospital.name ||
                      hospital.display_name?.split(",")[0] ||
                      "Hospital"}
                  </h3>

                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                    {hospital.display_name || "Location details unavailable"}
                  </p>

                  <button
                    onClick={() => openMap(hospital)}
                    className="mt-auto flex items-center gap-2 pt-5 text-xs font-semibold text-emerald-600 transition group-hover:gap-3 dark:text-emerald-400"
                  >
                    <Navigation size={15} />
                    Open in maps
                    <ArrowUpRight size={14} />
                  </button>
                </motion.article>
              ))}
            </div>
          </section>
        )}

        {searched &&
          !loading &&
          !error &&
          hospitals.length === 0 && (
            <div className="rounded-[30px] border border-dashed border-slate-300 bg-white/50 px-6 py-14 text-center dark:border-white/15 dark:bg-white/[0.025]">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400 dark:bg-white/[0.06]">
                <HospitalIcon size={24} />
              </span>

              <h3 className="mt-5 text-base font-semibold text-slate-950 dark:text-white">
                No facilities found
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">
                Try searching for a nearby larger city or verify the city name.
              </p>
            </div>
          )}

        {!searched && (
          <section className="grid gap-4 md:grid-cols-3">
            {[
              ["Search by city", "Enter a city to discover healthcare facilities."],
              ["Explore results", "Review facility names and location information."],
              ["Open directions", "Continue to maps for navigation and verification."],
            ].map(([title, description], index) => (
              <div
                key={title}
                className="rounded-[26px] border border-slate-200/70 bg-white/65 p-5 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.035]"
              >
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
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