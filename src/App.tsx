import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import ScrollTop from "./components/ScrollTop";

import Home from "./components/pages/Home";
import AboutPage from "./components/pages/AboutPage";
import SkillsPage from "./components/pages/SkillsPage";
import ProjectsPage from "./components/pages/ProjectsPage";
import ContactPage from "./components/pages/ContactPage";
import AchievementsPage from "./components/pages/AchievementsPage";

import Education from "./components/Education";
import Experience from "./components/Experience";

import { useTheme } from "./context/ThemeContext";

function App() {
  const [loading, setLoading] = useState(true);

  const { theme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        theme === "dark"
          ? "bg-[#020617] text-white"
          : "bg-gray-100 text-black"
      }`}
    >
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<AboutPage />} />

        <Route path="/education" element={<Education />} />

        <Route path="/experience" element={<Experience />} />

        <Route path="/skills" element={<SkillsPage />} />

        <Route path="/projects" element={<ProjectsPage />} />

        <Route
          path="/achievements"
          element={<AchievementsPage />}
        />

        <Route path="/contact" element={<ContactPage />} />

      </Routes>

      <Footer />

      <ScrollTop />
    </div>
  );
}

export default App;