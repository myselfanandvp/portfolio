import PageTransition from "../components/PageTransition";
import { Link } from "react-router-dom";
import { FaAngleDoubleRight } from 'react-icons/fa';
function LandingPage() {
  return (
    <PageTransition>
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-16 max-w-7xl mx-auto font-sans bg-transparent dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300 overflow-hidden">

        {/* Ambient Top Subtle Glow (Adapts per theme) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(217,119,6,0.08),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(217,119,6,0.04),transparent_50%)] pointer-events-none -z-10" />

        {/* Minimal Dot Architecture Grid (Adapts per theme) */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none -z-10" />

        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mt-4 relative z-10">

          {/* LEFT: ENGINEERING INTRO (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">

            {/* Minimal Premium Micro-Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/80 shadow-sm dark:shadow-inner mb-6">
              <span className="flex h-1.5 w-1.5 rounded-full bg-amber-500 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              </span>
              <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-600 dark:text-zinc-400">
                System Status // Available for Hire
              </span>
            </div>

            {/* High-Contrast Typography */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] text-zinc-900 dark:text-white">
              Anand V P <br />
              <span className="font-light text-3xl sm:text-4xl md:text-5xl block mt-2 bg-gradient-to-r from-amber-600 via-amber-500 to-orange-600 dark:from-amber-200 dark:via-yellow-400 dark:to-orange-500 bg-clip-text text-transparent">
                Full-Stack Architecture.
              </span>
            </h1>

            {/* Clean Product Description */}
            <p className="mt-6 max-w-xl text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
              Engineering highly responsive, production-ready user interfaces on the frontend, linked seamlessly with lightning-fast asynchronously optimized backend layers.
            </p>

            {/* Refined Premium CTA Elements */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                to="/projects"
                className="inline-flex gap-2 items-center justify-center px-6 py-3 rounded bg-amber-600 hover:bg-amber-500 dark:bg-amber-500 dark:hover:bg-amber-400 text-white dark:text-zinc-950 font-semibold text-sm tracking-wide transition-all duration-200 shadow-md shadow-amber-600/10 dark:shadow-amber-500/10"
              >
                <FaAngleDoubleRight />
                Explore Engineering Portfolio
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 justify-center px-6 py-3 rounded border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 text-zinc-700 dark:text-zinc-300 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800/60 hover:text-zinc-900 dark:hover:text-white transition-all duration-200"
              >
                <FaAngleDoubleRight />
                Initiate Consultation
              </Link>
            </div>
          </div>

          {/* RIGHT: FULL-STACK ECOSYSTEM DIAGRAM (5 Columns) */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 rounded-xl p-6 shadow-xl dark:shadow-2xl relative backdrop-blur-md">

              {/* Module Header */}
              <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800/60 pb-4 mb-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                  Pipeline Topology Map
                </span>
                <div className="flex space-x-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
                </div>
              </div>

              {/* Stack Visual Topology Nodes */}
              <div className="relative space-y-8 before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-[1px] before:bg-zinc-200 dark:before:bg-zinc-800">

                {/* Node 1: Client Core */}
                <div className="relative flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center z-10 bg-gradient-to-b from-white dark:from-zinc-800 to-zinc-50 dark:to-zinc-900 shadow-sm">
                    <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400">UI</span>
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-800 dark:text-zinc-300 font-semibold">Client Presentation Layer</h4>
                    <p className="text-xs text-zinc-500 mt-0.5">React.js · Tailwind CSS · State Orchestration</p>
                  </div>
                </div>

                {/* Node 2: Logic Bridge */}
                <div className="relative flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center z-10 bg-gradient-to-b from-white dark:from-zinc-800 to-zinc-50 dark:to-zinc-900 shadow-sm">
                    <span className="text-xs font-mono font-bold text-orange-600 dark:text-orange-400">API</span>
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-800 dark:text-zinc-300 font-semibold">Asynchronous Core Engine</h4>
                    <p className="text-xs text-zinc-500 mt-0.5">Python · FastAPI / Django · Secure REST Endpoints</p>
                  </div>
                </div>

                {/* Node 3: Microservice Infrastructure */}
                <div className="relative flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center z-10 bg-gradient-to-b from-white dark:from-zinc-800 to-zinc-50 dark:to-zinc-900 shadow-sm">
                    <span className="text-xs font-mono font-bold text-zinc-500 dark:text-zinc-400">DB</span>
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-800 dark:text-zinc-300 font-semibold">Data Relational Layer</h4>
                    <p className="text-xs text-zinc-500 mt-0.5">PostgreSQL Performance Tuning & Integration</p>
                  </div>
                </div>

              </div>

              {/* Metrics Readout Footer */}
              <div className="mt-8 pt-4 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
                <span className="flex items-center gap-1.5 text-zinc-700 dark:text-zinc-400">
                  <span className="h-1 w-1 rounded-full bg-amber-500 dark:bg-amber-400 animate-pulse"></span>
                  Node Cluster Matrix Active
                </span>
                <span>SECURE SSL</span>
              </div>

            </div>
          </div>

        </div>
      </section>
    </PageTransition>
  );
}

export default LandingPage;
