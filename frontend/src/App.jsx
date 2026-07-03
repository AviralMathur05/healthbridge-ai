import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Symptom from "./pages/Symptom";
import Medicine from "./pages/Medicine";
import Report from "./pages/Report";
import Emergency from "./pages/Emergency";
import Hospital from "./pages/Hospital";
import Passport from "./pages/Passport";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/symptom" element={<Symptom />} />
        <Route path="/medicine" element={<Medicine />} />
        <Route path="/report" element={<Report />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/hospital" element={<Hospital />} />
        <Route path="/passport" element={<Passport />} />
      </Routes>
    </BrowserRouter>
  );
}