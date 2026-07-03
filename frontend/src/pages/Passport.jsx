import { useState } from "react";
import { getPassport } from "../services/api";

export default function Passport() {

    const [id, setId] = useState("1");
    const [patient, setPatient] = useState(null);

    const loadPassport = async () => {
        try {
            const data = await getPassport(id);
            setPatient(data);
        } catch (e) {
            alert("Patient not found");
        }
    };

    return (

        <div className="max-w-4xl mx-auto p-8">

            <h1 className="text-3xl font-bold mb-6">
                ❤️ Health Passport
            </h1>

            <div className="flex gap-4">

                <input
                    value={id}
                    onChange={(e)=>setId(e.target.value)}
                    className="border rounded-xl p-3"
                    placeholder="Patient ID"
                />

                <button
                    onClick={loadPassport}
                    className="bg-blue-600 text-white px-6 rounded-xl"
                >
                    Load
                </button>

            </div>

            {patient && (

                <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">

                    <h2 className="text-2xl font-bold mb-6">
                        {patient.name}
                    </h2>

                    <div className="space-y-3">

                        <p><b>ID:</b> {patient.id}</p>

                        <p><b>Age:</b> {patient.age}</p>

                        <p><b>Gender:</b> {patient.gender}</p>

                        <p><b>Language:</b> {patient.language}</p>

                        <p><b>Created:</b> {patient.created_at}</p>

                    </div>

                </div>

            )}

        </div>

    );

}