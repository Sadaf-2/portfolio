import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Education", path: "/education" },
    { name: "Experience", path: "/experience" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Achievements", path: "/achievements" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-lg border-b border-slate-700 z-50">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        <Link
          to="/"
          className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          Sadaf.
        </Link>

        {/* Desktop Menu */}

        <nav className="hidden md:flex items-center gap-8">

          {links.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`transition duration-300 ${
                location.pathname === item.path
                  ? "text-cyan-400"
                  : "hover:text-cyan-400"
              }`}
            >
              {item.name}
            </Link>
          ))}

          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full bg-slate-800 hover:bg-cyan-500 flex items-center justify-center transition"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>

        </nav>

        {/* Mobile Button */}

        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>

      </div>

      {/* Mobile Menu */}

      {open && (
        <div className="md:hidden bg-slate-900 border-t border-slate-700">

          {links.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 hover:bg-slate-800"
            >
              {item.name}
            </Link>
          ))}

          <button
            onClick={toggleTheme}
            className="m-5 w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>

        </div>
      )}

    </header>
  );
};

export default Navbar;