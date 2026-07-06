import FeatureGrid from "../components/dashboard/FeatureGrid";
import HealthScore from "../components/dashboard/HealthScore";
import Hero from "../components/dashboard/Hero";
import MainLayout from "../components/layout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div className="space-y-7">
        <Hero />
        <HealthScore />
        <FeatureGrid />

        <section className="rounded-[28px] border border-slate-200/70 bg-white/70 px-6 py-5 text-center shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.035]">
          <p className="text-xs leading-5 text-slate-500 dark:text-slate-400">
            HealthBridge AI provides informational AI-assisted guidance and does
            not replace professional medical diagnosis, treatment, or emergency
            services.
          </p>
        </section>
      </div>
    </MainLayout>
  );
}