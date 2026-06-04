import PageTransition from "../components/PageTransition";
import { Link } from "react-router-dom";
import { FaAngleDoubleRight } from 'react-icons/fa';
import ModelViewer from "../components/ModelViewer";

function LandingPage() {
  return (
    <PageTransition>
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-16 max-w-7xl mx-auto font-sans bg-transparent dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300 overflow-hidden">

        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-150 bg-[radial-gradient(ellipse_at_top,rgba(217,119,6,0.08),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(217,119,6,0.04),transparent_50%)] pointer-events-none -z-10" />

        {/* Dot Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none -z-10" />

        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mt-4 relative z-10">

          {/* LEFT: INTRO — 7 cols on desktop, full width on mobile */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">

            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/80 shadow-sm dark:shadow-inner mb-6">
              <span className="flex h-1.5 w-1.5 rounded-full bg-amber-500 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              </span>
              <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-600 dark:text-zinc-400">
                System Status // Available for Hire
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] text-zinc-900 dark:text-white">
              Anand V P <br />
              <span className="font-light text-3xl sm:text-4xl md:text-5xl block mt-2 bg-linear-to-r from-amber-600 via-amber-500 to-orange-600 dark:from-amber-200 dark:via-yellow-400 dark:to-orange-500 bg-clip-text text-transparent">
                Full-Stack Architecture.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
              Engineering highly responsive, production-ready user interfaces on the frontend, linked seamlessly with lightning-fast asynchronously optimized backend layers.
            </p>

            {/* Stack Nodes */}
            <div className="mt-8 w-full max-w-md text-left">
              <div className="relative space-y-5 before:absolute before:left-4.5 before:top-2 before:bottom-2 before:w-px before:bg-zinc-200 dark:before:bg-zinc-800">
                {[
                  { label: 'UI', color: 'text-amber-600 dark:text-amber-400', title: 'Client Presentation Layer', sub: 'React.js · Tailwind CSS · State Orchestration' },
                  { label: 'API', color: 'text-orange-600 dark:text-orange-400', title: 'Asynchronous Core Engine', sub: 'Python · FastAPI / Django · Secure REST Endpoints' },
                  { label: 'DB', color: 'text-zinc-500 dark:text-zinc-400', title: 'Data Relational Layer', sub: 'PostgreSQL Performance Tuning & Integration' },
                ].map(({ label, color, title, sub }) => (
                  <div key={label} className="relative flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg border border-zinc-200 dark:border-zinc-700 flex items-center justify-center z-10 bg-white dark:bg-zinc-800 shadow-sm shrink-0">
                      <span className={`text-xs font-mono font-bold ${color}`}>{label}</span>
                    </div>
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-800 dark:text-zinc-200 font-semibold">{title}</h4>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                to="/projects"
                className="flex gap-2 items-center justify-center px-10 py-3 rounded bg-amber-600 hover:bg-amber-500 dark:bg-amber-500 dark:hover:bg-amber-400 text-white dark:text-zinc-950 font-semibold text-sm tracking-wide transition-all duration-200 shadow-md shadow-amber-600/10 dark:shadow-amber-500/10"
                style={{ clipPath: "polygon(6% 0%, 100% 0%, 94% 100%, 0% 100%)" }}
              >
                <FaAngleDoubleRight className="text-xs shrink-0" />
                Explore Portfolio
              </Link>
              <Link
                to="/contact"
                className="flex items-center gap-2 justify-center px-12 py-3 rounded border border-zinc-200 dark:border-zinc-800 bg-zinc-200/60 dark:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300 text-sm font-medium hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white transition-all duration-200"
                style={{ clipPath: "polygon(6% 0%, 100% 0%, 94% 100%, 0% 100%)" }}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* RIGHT: 3D MODEL — 5 cols on desktop, full width on mobile */}
          <div className="lg:col-span-5 w-full flex justify-center order-1 lg:order-2">
            {/* Model viewer wrapper with fluid sizing */}
            <div className="w-full max-w-105 lg:max-w-125 aspect-square bg-transparent overflow-hidden">
              <ModelViewer
                url={`${import.meta.env.BASE_URL}models/mini_model.glb`}
                autoRotate={true}
              />
            </div>
          </div>

        </div>
      </section>
    </PageTransition>
  );
}

export default LandingPage;
