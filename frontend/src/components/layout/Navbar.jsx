import { useState } from "react";
import {
  Bell,
  Menu,
  Moon,
  Sun,
  UserCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../theme/ThemeProvider";

export default function Navbar({ onOpenMenu }) {
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();

  const [notificationsOpen, setNotificationsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/65 backdrop-blur-2xl dark:border-white/10 dark:bg-[#090d16]/65">
      <div className="mx-auto flex h-[76px] w-full max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-10">
        <div className="flex min-w-0 items-center gap-3">
          <button
            onClick={onOpenMenu}
            className="rounded-xl border border-slate-200 bg-white p-2.5 text-slate-700 shadow-sm transition hover:bg-slate-50 lg:hidden dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            aria-label="Open navigation"
          >
            <Menu size={20} />
          </button>

          <div className="min-w-0">
            <p className="truncate text-[15px] font-semibold tracking-[-0.01em] text-slate-950 dark:text-white">
              Your health workspace
            </p>

            <p className="mt-0.5 hidden text-xs text-slate-500 sm:block dark:text-slate-400">
              Private, accessible and AI-assisted guidance
            </p>
          </div>
        </div>

        <div className="relative flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/80 bg-white/80 text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-white"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setNotificationsOpen((open) => !open)}
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/80 bg-white/80 text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-white"
            aria-label="Open notifications"
          >
            <Bell size={18} />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full border-2 border-white bg-blue-500 dark:border-[#111827]" />
          </button>

          <button
            onClick={() => navigate("/passport")}
            className="ml-1 flex items-center gap-2 rounded-2xl border border-slate-200/80 bg-white/80 p-1.5 pr-3 text-left shadow-sm transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/5"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 text-white">
              <UserCircle size={20} />
            </span>

            <span className="hidden sm:block">
              <span className="block text-xs font-semibold text-slate-900 dark:text-white">
                Health Profile
              </span>

              <span className="block text-[10px] text-slate-500 dark:text-slate-400">
                View passport
              </span>
            </span>
          </button>

          {notificationsOpen && (
            <div className="absolute right-0 top-14 w-[min(340px,calc(100vw-2rem))] rounded-3xl border border-slate-200/80 bg-white/95 p-3 shadow-2xl shadow-slate-900/10 backdrop-blur-2xl dark:border-white/10 dark:bg-[#111827]/95">
              <div className="px-2 pb-3 pt-1">
                <p className="text-sm font-semibold text-slate-950 dark:text-white">
                  Notifications
                </p>

                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  HealthBridge updates and activity.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4 dark:bg-white/5">
                <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                  Your AI health workspace is ready.
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                  Explore symptoms, medicines, reports, hospitals, and your health passport.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}