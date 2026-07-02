import {
    Activity,
    Pill,
    FileText,
    Hospital,
    HeartPulse,
    AlertTriangle
} from "lucide-react";

export default function Sidebar() {

    const menu = [
        ["Symptoms", Activity],
        ["Medicine", Pill],
        ["Reports", FileText],
        ["Hospitals", Hospital],
        ["Passport", HeartPulse],
        ["Emergency", AlertTriangle],
    ];

    return (

        <aside className="w-72 bg-slate-900 text-white p-6">

            <h1 className="text-3xl font-bold mb-10">
                ❤️ HB
            </h1>

            <div className="space-y-4">

                {menu.map(([name, Icon]) => (

                    <button
                        key={name}
                        className="w-full flex items-center gap-3 rounded-xl p-4 hover:bg-slate-700 transition"
                    >

                        <Icon size={20} />

                        {name}

                    </button>

                ))}

            </div>

        </aside>
    );

}