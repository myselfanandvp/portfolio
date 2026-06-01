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
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full backdrop-blur-md border-b border-zinc-200/50 dark:border-zinc-800/50 bg-white/70 dark:bg-zinc-950/70 font-sans transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Brand / Professional Identity */}
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="text-sm font-semibold tracking-wider text-zinc-900 dark:text-zinc-100 hover:opacity-80 transition flex items-center gap-2 font-mono uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            Anand V P
          </Link>
        </div>

        {/* Desktop Links - Elegant Product Style */}
        <ul className="hidden md:flex items-center gap-6 text-xs font-medium tracking-wide text-zinc-500 dark:text-zinc-400">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;

            return (
              <li key={link.name} className="relative py-1">
                <Link
                  to={link.href}
                  className={`transition-colors duration-200 ${isActive
                    ? "text-amber-600 dark:text-amber-400 font-semibold"
                    : "hover:text-zinc-900 dark:hover:text-zinc-100"
                    }`}
                >
                  {link.name}
                </Link>
                {/* Active Indicator Underline */}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-amber-500 rounded-full" style={{
                    clipPath:
                      "polygon(58% 44%, 100% 41%, 100% 57%, 72% 58%, 17% 60%, 80% 50%, 0% 49%)",
                  }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        {/* Desktop Controls */}
        <div className="hidden md:flex items-center gap-5">
          {/* Minimalist Theme Toggle Slider Utility */}
          <button
            onClick={() => dispatch(toggleTheme())}
            aria-label="Toggle Environment"
            className="group relative p-2 rounded-md border border-zinc-200 dark:border-zinc-800/80 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900/60 transition-all duration-150"
          >
            <div className="w-4 h-4 flex items-center justify-center">
              {darkMode ? (
                /* Light Mode Sun Icon Icon replacement */
                <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              ) : (
                /* Dark Mode Moon Icon */
                <svg className="w-4 h-4 text-zinc-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </div>
          </button>

          {/* Luxury Minimal CTA */}
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-4 py-1.5 rounded border border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-950 font-medium text-xs tracking-wide hover:opacity-90 transition-all duration-200"
          >
            Let's Talk
          </Link>
        </div>

        {/* Mobile Interface Controls */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Mobile Icon Toggle */}
          <button
            onClick={() => dispatch(toggleTheme())}
            aria-label="Toggle Theme"
            className="p-2 rounded border border-zinc-200 dark:border-zinc-800/80 bg-zinc-100/50 dark:bg-zinc-900/50"
          >
            {darkMode ? (
              <span className="text-xs text-amber-400">☀️</span>
            ) : (
              <span className="text-xs text-zinc-700">🌙</span>
            )}
          </button>

          {/* Menu Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-zinc-800 dark:text-zinc-200 font-medium text-xs tracking-wider"
            aria-label="Toggle Menu"
          >
            {open ? "CLOSE" : "MENU"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Overlay */}
      <div
        className={`md:hidden border-b border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md transition-all duration-300 ease-in-out ${open ? "max-h-screen opacity-100 visible" : "max-h-0 opacity-0 invisible overflow-hidden"
          }`}
      >
        <ul className="px-6 py-6 space-y-4 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;

            return (
              <li key={link.name}>
                <Link
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className={`block py-1 transition-colors ${isActive ? "text-amber-600 dark:text-amber-400 font-semibold" : "hover:text-zinc-900 dark:hover:text-zinc-100"
                    }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}

          <li className="pt-4 border-t border-zinc-100 dark:border-zinc-800">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block w-full text-center bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 px-4 py-2.5 rounded font-medium text-xs tracking-wide"
            >
              Get In Touch
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
