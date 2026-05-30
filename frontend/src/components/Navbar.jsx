import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../store/themeSlice";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  const navLinks = [
    { name: "home", href: "/" },
    { name: "about", href: "/about" },
    { name: "projects", href: "/projects" },
    { name: "skills", href: "/skills" },
    { name: "contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-800/80 bg-transparent font-mono transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo / Coder System Init */}
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="text-sm font-bold tracking-tight text-slate-800 dark:text-slate-200 hover:text-teal-500 dark:hover:text-teal-400 transition"
          >
            <span className="text-teal-500">anand_vp</span>
            <span className="text-slate-400 dark:text-slate-600 font-normal">::</span>
            <span className="text-slate-500 dark:text-slate-400">system</span>
          </Link>
        </div>

        {/* Desktop Links - File Path Style */}
        <ul className="hidden md:flex items-center gap-1 text-xs font-bold text-slate-500 dark:text-slate-500">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;

            return (
              <li key={link.name} className="flex items-center">
                <span className="text-slate-300 dark:text-slate-800 select-none px-1">/</span>
                <Link
                  to={link.href}
                  className={`px-2 py-1.5 rounded transition-all duration-150 ${isActive
                      ? "text-teal-500 dark:text-teal-400 bg-slate-500/10"
                      : "hover:text-slate-800 dark:hover:text-slate-200"
                    }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop Terminal Utilities */}
        <div className="hidden md:flex items-center gap-4">
          {/* Theme Toggle Module */}
          <button
            onClick={() => dispatch(toggleTheme())}
            aria-label="Toggle Environment"
            className="group relative p-2 rounded-md bg-slate-500/5 dark:bg-slate-400/5 border border-slate-200/40 dark:border-slate-800/60 text-slate-600 dark:text-slate-400 hover:bg-slate-500/10 dark:hover:bg-slate-400/10 transition-all duration-150 active:scale-95"
          >
            <div className="relative w-4 h-4 flex items-center justify-center overflow-hidden text-[10px] font-bold">
              {darkMode ? (
                <span className="text-indigo-400">DARK</span>
              ) : (
                <span className="text-amber-600">LITE</span>
              )}
            </div>
          </button>

          {/* Code Execution CTA */}
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-md border border-slate-900 text-slate-900 dark:border-slate-100 dark:text-slate-100 font-bold text-xs hover:bg-slate-900 hover:text-white dark:hover:bg-slate-100 dark:hover:text-slate-900 transition-all duration-200"
          >
            ./connect
          </Link>
        </div>

        {/* Mobile Shell Controls */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Mobile Theme String Indicator */}
          <button
            onClick={() => dispatch(toggleTheme())}
            aria-label="Toggle Theme"
            className="px-2 py-1 rounded text-[10px] font-bold bg-slate-500/5 dark:bg-slate-400/5 border border-slate-200/40 dark:border-slate-800/60"
          >
            {darkMode ? (
              <span className="text-indigo-400">DEV.dark</span>
            ) : (
              <span className="text-amber-600">DEV.lite</span>
            )}
          </button>

          {/* Menu Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="p-1.5 rounded text-slate-700 dark:text-slate-300 hover:bg-slate-500/5 dark:hover:bg-slate-400/5 transition"
            aria-label="Toggle Menu"
          >
            <span className="text-sm font-bold">{open ? "CLOSE" : "MENU"}</span>
          </button>
        </div>
      </div>

      {/* Mobile Shell Dropdown Overlay */}
      <div
        className={`md:hidden border-b border-slate-200/40 dark:border-slate-800/80 bg-slate-50/90 dark:bg-slate-950/90 backdrop-blur-md transition-all duration-300 ease-in-out ${open ? "max-h-screen opacity-100 visible" : "max-h-0 opacity-0 invisible overflow-hidden"
          }`}
      >
        <ul className="px-6 py-5 space-y-3 text-xs font-bold text-slate-500 dark:text-slate-500">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;

            return (
              <li key={link.name} className="flex items-center gap-1">
                <span className="text-slate-300 dark:text-slate-800 select-none">~_</span>
                <Link
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className={`block py-1 transition-colors ${isActive ? "text-teal-500 dark:text-teal-400" : "hover:text-slate-800 dark:hover:text-slate-200"
                    }`}
                >
                  {link.name}()
                </Link>
              </li>
            );
          })}

          <li className="pt-4 border-t border-slate-200/40 dark:border-slate-800/60">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block w-full text-center border border-slate-900 text-slate-900 dark:border-slate-100 dark:text-slate-100 px-4 py-2 rounded-md font-bold text-xs"
            >
              ./execute_contact_routine
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
