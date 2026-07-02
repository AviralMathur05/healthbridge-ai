import { Bell, Moon, UserCircle } from "lucide-react";

export default function Navbar() {

    return (

        <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-slate-200">

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

                    <Moon size={22}/>

                    <Bell size={22}/>

                    <UserCircle size={34}/>

                </div>

            </div>

        </header>

    );

}