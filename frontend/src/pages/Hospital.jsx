import { useState } from "react";
import { findHospitals } from "../services/api";

export default function Hospital() {
  const [city, setCity] = useState("");
  const [results, setResults] = useState([]);

  const search = async () => {
    const data = await findHospitals(city);
    setResults(data.results);
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Hospital Finder</h1>

      <div className="flex gap-3">
        <input
          className="border rounded-xl p-3 flex-1"
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button
          onClick={search}
          className="bg-blue-600 text-white px-6 rounded-xl"
        >
          Search
        </button>
      </div>

      <div className="mt-8 space-y-4">
        {results.map((hospital, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-xl p-4"
          >
            <h2 className="font-semibold">
              {hospital.name}
            </h2>

            <p className="text-sm text-gray-500">
              Lat: {hospital.lat} | Lon: {hospital.lon}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}