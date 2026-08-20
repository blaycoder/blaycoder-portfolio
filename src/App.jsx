import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import CaseStudyPage from "./pages/CaseStudy/CaseStudyPage";
import "./App.css";

const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/case-studies/:slug" element={<CaseStudyPage />} />
  </Routes>
);

export default App;
