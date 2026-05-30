import PageTransition from "../components/PageTransition";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <PageTransition>
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-24 max-w-8xl mx-auto font-mono bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">

        {/* Main Container */}
        <div className="w-full max-w-7xl mx-auto z-10">

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* LEFT CONTENT */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">

              {/* Status Badge */}
              <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-md border border-emerald-500/30 dark:border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs md:text-sm font-semibold tracking-wide shadow-sm hover:scale-102 transition duration-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>
                  const status = "available_for_hire";
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-none">
                <span className="text-slate-500 dark:text-slate-400 text-2xl sm:text-3xl block mb-2 font-normal">def greeting(): return</span>
                <span className="bg-gradient-to-r from-teal-500 to-cyan-500 dark:from-teal-400 dark:to-cyan-400 bg-clip-text text-transparent font-black">
                  "Anand V P"
                </span>
                <br />
                <span className="text-xl sm:text-3xl md:text-4xl text-slate-700 dark:text-slate-300 font-bold mt-4 block">
                  &lt;<span className="text-indigo-500 dark:text-indigo-400">WebDeveloper</span> stack=<span className="text-amber-600 dark:text-amber-400">{"{['Python', 'React']}"}</span> /&gt;
                </span>
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-2xl text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                // Actively engineering responsive, robust, and scalable full-stack ecosystem.
                Specializing in building dynamic frontend UIs with <span className="font-mono text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded">React</span> and blazing-fast, secure backends using <span className="font-mono text-blue-600 dark:text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded">Python</span>.
              </p>

              {/* Tech Badges */}
              <div className="mt-6 flex flex-wrap gap-2 justify-center lg:justify-start text-xs">
                <span className="px-2.5 py-1 bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded">useState</span>
                <span className="px-2.5 py-1 bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded">FastAPI / Django</span>
                <span className="px-2.5 py-1 bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded">TailwindCSS</span>
                <span className="px-2.5 py-1 bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded">REST APIs</span>
              </div>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-teal-600 hover:bg-teal-500 dark:bg-teal-500 dark:hover:bg-teal-400 text-white dark:text-slate-950 font-bold shadow-lg shadow-teal-500/10 transition duration-300 border border-transparent"
                >
                  ./view_projects.sh
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition duration-300"
                >
                  contact_me()
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE MODEL (Interactive Terminal Mockup) */}
            <div className="flex items-center justify-center w-full order-1 lg:order-2 content-center">
              <div className="w-full max-w-md bg-slate-900 dark:bg-slate-950 border border-slate-800 rounded-lg shadow-2xl text-left overflow-hidden">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-800/50 border-b border-slate-800">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-xs text-slate-500 font-mono">anand_vp@developer:~</span>
                  <div className="w-10"></div>
                </div>
                {/* Terminal Body */}
                <div className="p-5 space-y-3 text-xs md:text-sm text-slate-300 font-mono">
                  <div>
                    <span className="text-teal-400">➜ </span>
                    <span className="text-cyan-400">~</span> <span className="text-purple-400">cat</span> stack.py
                  </div>
                  <div className="text-slate-500 pl-4">
                    <p><span className="text-pink-500">import</span> react, python</p>
                    <p className="mt-1">developer = {"{"}</p>
                    <p className="pl-4">"frontend": "React.js / Tailwind",</p>
                    <p className="pl-4">"backend": "Python / Async Frameworks",</p>
                    <p className="pl-4">"ui_ux": "Clean & Responsive"</p>
                    <p>{"}"}</p>
                  </div>
                  <div>
                    <span className="text-teal-400">➜ </span>
                    <span className="text-cyan-400">~</span> <span className="text-purple-400">npm</span> run dev
                  </div>
                  <div className="text-emerald-400 pl-4 animate-pulse">
                    🚀 Vite + React + Python server active...
                  </div>
                  <div className="text-slate-500 pl-4">
                    - Local: http://localhost:5173/
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Floating Code-Themed Decorators */}
        <div className="hidden md:block absolute top-24 left-10 text-xl font-bold text-slate-300 dark:text-slate-800 opacity-40 pointer-events-none select-none">
          &lt;div&gt;
        </div>

        <div className="hidden md:block absolute bottom-28 left-16 text-xl font-bold text-slate-300 dark:text-slate-800 opacity-40 pointer-events-none select-none">
          {"{ ...state }"}
        </div>

        <div className="hidden md:block absolute top-32 right-12 text-xl font-bold text-slate-300 dark:text-slate-800 opacity-40 pointer-events-none select-none">
          __init__
        </div>

        <div className="hidden md:block absolute bottom-24 right-16 text-xl font-bold text-slate-300 dark:text-slate-800 opacity-40 pointer-events-none select-none">
          =&gt;
        </div>
      </section>
    </PageTransition>
  );
}

export default LandingPage;
