import axios from "axios";

const api = axios.create({
  baseURL: "https://healthbridge-ai.onrender.com/"
});

export default api;

export const analyzeSymptoms = async (prompt) =>
  (await api.post("/symptom", { prompt })).data;

export const explainMedicine = async (prompt) =>
  (await api.post("/medicine", { prompt })).data;

export const analyzeReport = async (prompt) =>
  (await api.post("/report", { prompt })).data;

export const emergencyHelp = async (prompt) =>
  (await api.post("/emergency", { prompt })).data;

export const findHospitals = async (city) =>
  (await api.get(`/hospital/${city}`)).data;

export const getPassport = async (id) =>
  (await api.get(`/passport/${id}`)).data;