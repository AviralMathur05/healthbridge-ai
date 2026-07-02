import {
    Activity,
    Pill,
    FileText,
    Hospital,
    HeartPulse,
    AlertTriangle
} from "lucide-react";

const features = [
    {
        title: "Symptoms",
        icon: Activity
    },
    {
        title: "Medicine",
        icon: Pill
    },
    {
        title: "Reports",
        icon: FileText
    },
    {
        title: "Hospitals",
        icon: Hospital
    },
    {
        title: "Passport",
        icon: HeartPulse
    },
    {
        title: "Emergency",
        icon: AlertTriangle
    }
];

export default function FeatureGrid() {

    return (

        <div className="grid md:grid-cols-3 gap-6">

            {features.map((f) => {

                const Icon = f.icon;

                return (

                    <div
                        key={f.title}
                        className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition cursor-pointer"
                    >

                        <Icon size={36} />

                        <h2 className="text-xl font-bold mt-4">

                            {f.title}

                        </h2>

                    </div>

                );

            })}

        </div>

    );

}