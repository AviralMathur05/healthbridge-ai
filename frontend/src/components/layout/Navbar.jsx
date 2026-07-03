import { Bell, Moon, Sun, UserCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {

  const navigate = useNavigate();

  const [dark, setDark] = useState(false);

  useEffect(() => {

    if (dark)
      document.documentElement.classList.add("dark");
    else
      document.documentElement.classList.remove("dark");

  }, [dark]);

  return (

    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">

      <div className="flex items-center justify-between px-10 h-20">

        <div>

          <h1 className="text-3xl font-bold">
            ❤️ HealthBridge AI
          </h1>

          <p className="text-slate-500">
            Digital Community Health Worker
          </p>

        </div>

        <div className="flex items-center gap-5">

          <button onClick={() => setDark(!dark)}>
            {dark ? <Sun size={22}/> : <Moon size={22}/>}
          </button>

          <button
            onClick={() => alert("No new notifications")}
          >
            <Bell size={22}/>
          </button>

          <button
            onClick={() => navigate("/passport")}
          >
            <UserCircle size={34}/>
          </button>

        </div>

      </div>

    </header>

  );

}