import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-[32px] bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-400 p-10 text-white shadow-xl"
    >
      <h1 className="text-5xl font-bold">
        Good Evening 👋
      </h1>

      <p className="mt-4 text-lg opacity-90">
        Your AI Healthcare Companion is ready to assist you.
      </p>

      <div className="mt-8 flex gap-4">

        <button
          onClick={() => navigate("/symptom")}
          className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-slate-100"
        >
          Check Symptoms
        </button>

        <button
          onClick={() => navigate("/report")}
          className="bg-slate-900 px-6 py-3 rounded-xl font-semibold hover:bg-slate-800"
        >
          Upload Report
        </button>

      </div>
    </motion.div>
  );
}