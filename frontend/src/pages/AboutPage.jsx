import PageTransition from "../components/PageTransition";
import BorderGlow from "../components/animations/GlowingBorder";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Clipshape from "../components/Clipshape";

function AboutPage() {
  const darkMode = useSelector(state => state.theme.darkMode)
  return (
    <PageTransition>
      {/* Structural Main Layout - Corrected to pt-16 for navbar offset alignment and top-start alignment */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-24 max-w-7xl mx-auto w-full font-sans selection:bg-amber-500/20">

        {/* Minimal Context Indicator */}
        <div className="mb-2 mt-5 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
          <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
            Professional Profile
          </span>
        </div>

        {/* Crisp Architectural Heading */}
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 pb-1 text-center z-20">
          About Me
        </h1>
        <Clipshape />
        {/* High-Density Dashboard Grid */}
        <div className="w-full space-y-6 z-20">

          {/* Top Row: Split Bio and Technical Snapshot */}
          <div className="grid lg:grid-cols-12 gap-5 lg:gap-6 items-stretch w-full">

            {/* Deep Professional Bio */}
            <div className="lg:col-span-7 flex flex-col justify-between p-5 md:p-6 bg-zinc-50/50 dark:bg-zinc-900/30 rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 space-y-4 text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed backdrop-blur-md">
              <p>
                I am <span className="text-zinc-900 dark:text-zinc-100 font-semibold border-b border-amber-500/40">Anand V P</span>, a Full Stack Developer specialized in creating resilient backend architectures, production-grade API systems, and automated data processing modules. My engineering philosophy centers on code legibility, structural performance, and building systems that directly eliminate operational overhead.
              </p>
              <p>
                During my tenure at Standout IT Solutions, I architected relational database schemas from the ground up to power multi-role legal administration workflows and claims processing. By implementing optimized Common Table Expressions (CTEs) and strategic database index layers, I reduced data-heavy reporting generation times by 40%.
              </p>
              <p className="hidden md:block">
                Whether deploying modular Django REST Framework architectures secured with cryptographic JWT flows or structuring idempotent ETL data-load layers using Pandas, I design software with edge-case protection in mind.
              </p>
            </div>

            {/* Technical Snapshot Card */}
            <BorderGlow
              glowIntensity={15}
              glowRadius={30}
              className="lg:col-span-5 flex flex-col h-full bg-zinc-100/50 dark:bg-zinc-950/10 w-full rounded-xl p-3 transition-all duration-300"
              backgroundColor={darkMode ? "black" : "white"}
            >
              <div className="flex flex-col flex-1 w-full p-6 md:p-8 rounded-xl border border-zinc-200/60 dark:border-zinc-800/50 bg-white/50 dark:bg-zinc-950/40 backdrop-blur-md transition-all duration-300 justify-between gap-8">
                <div>
                  {/* Header - Maximized light/dark contrast */}
                  <h3 className="text-xs font-black uppercase tracking-widest mb-6 text-zinc-950 dark:text-zinc-50 border-b border-zinc-400/60 dark:border-zinc-700 pb-3 font-mono">
                    Technical Blueprint
                  </h3>

                  {/* High-visibility Content Rows */}
                  <div className="flex flex-col gap-6">

                    {/* Row 01 */}
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-1.5 sm:gap-4 items-start">
                      <div className="tracking-widest text-zinc-600 dark:text-zinc-400 uppercase font-mono text-[9px] sm:text-[10px] font-extrabold sm:pt-0.5">
                        01 // Service Stack
                      </div>
                      <div className="sm:col-span-3 text-zinc-950 dark:text-zinc-100 font-bold text-xs sm:text-sm leading-relaxed breakdown-words">
                        Python, Django, DRF, Node.js, FastAPIs, .NET Core, PHP
                      </div>
                    </div>

                    {/* Row 02 */}
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-1.5 sm:gap-4 items-start">
                      <div className="tracking-widest text-zinc-600 dark:text-zinc-400 uppercase font-mono text-[9px] sm:text-[10px] font-extrabold sm:pt-0.5">
                        02 // Client Layer
                      </div>
                      <div className="sm:col-span-3 text-zinc-950 dark:text-zinc-100 font-bold text-xs sm:text-sm leading-relaxed breakdown-words">
                        React.js, Redux Toolkit, JS (ES6+), Tailwind, Next.js UI
                      </div>
                    </div>

                    {/* Row 03 */}
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-1.5 sm:gap-4 items-start">
                      <div className="tracking-widest text-zinc-600 dark:text-zinc-400 uppercase font-mono text-[9px] sm:text-[10px] font-extrabold sm:pt-0.5">
                        03 // Infra & Storage
                      </div>
                      <div className="sm:col-span-3 text-zinc-950 dark:text-zinc-100 font-bold text-xs sm:text-sm leading-relaxed breakdown-words">
                        PostgreSQL, MS SQL, MySQL, MongoDB, Redis, Pandas, Git, Linux
                      </div>
                    </div>

                  </div>
                </div>

                {/* Footer Status Elements - Dynamic stack on mobile viewports to prevent layout overlap */}
                <div className="pt-4 border-t border-zinc-400/60 dark:border-zinc-700 grid grid-cols-1 gap-2.5 xs:grid-cols-3 xs:gap-0 text-[10px] text-zinc-700 dark:text-zinc-300 font-mono tracking-wider font-black">
                  <span className="flex items-center gap-2 justify-start">
                    <span className="w-2 h-2 bg-amber-600 dark:bg-amber-400 rounded-full shrink-0"></span> Modular
                  </span>
                  <span className="flex items-center gap-2 xs:justify-center">
                    <span className="w-2 h-2 bg-amber-600 dark:bg-amber-400 rounded-full shrink-0"></span> Efficiency
                  </span>
                  <span className="flex items-center gap-2 xs:justify-end">
                    <span className="w-2 h-2 bg-amber-600 dark:bg-amber-400 rounded-full shrink-0"></span> Pure Pipelines
                  </span>
                </div>

                <div className="pt-4 border-t border-zinc-100 dark:border-zinc-900/60 flex items-center justify-between text-[10px] text-zinc-400 dark:text-zinc-500 font-mono tracking-wider font-semibold">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Modular
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Efficiency
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Pure Pipelines
                  </span>
                </div>
              </div>
            </BorderGlow>
          </div>

          {/* Bottom Row: Core Deliverables & Evolution mapped side-by-side */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6">

            {/* Core Competency Deliverables */}
            <div className="md:col-span-7 p-5 md:p-6 bg-white/50 dark:bg-zinc-950/40 backdrop-blur-md border border-zinc-200/60 dark:border-zinc-800/60 rounded-xl">
              <h4 className="text-[10px] font-bold text-zinc-900 dark:text-zinc-300 mb-3 uppercase tracking-widest font-mono">
                Core Competency Deliverables
              </h4>
              <div className="grid sm:grid-cols-2 gap-3 text-xs text-zinc-500 dark:text-zinc-400">
                <div className="flex items-start gap-2">
                  <span className="text-amber-500 font-medium">▪</span>
                  <span>Engineered secure multi-tenant access control architectures governing sensitive data pipelines.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-500 font-medium">▪</span>
                  <span>Minimized heavy analytical calculation queries into microsecond loads using indexed configurations.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-500 font-medium">▪</span>
                  <span>Designed robust validation and logging layers handling high-volume file ingestions smoothly.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-500 font-medium">▪</span>
                  <span>Maintained deterministic Postman integrations to cut engineering onboarding intervals.</span>
                </div>
              </div>
            </div>

            {/* Academic & Certification Foundations */}
            <div className="md:col-span-5 p-5 md:p-6 bg-white/50 dark:bg-zinc-950/40 backdrop-blur-md border border-zinc-200/60 dark:border-zinc-800/60 rounded-xl flex flex-col justify-between transition-all duration-300">
              <h4 className="text-[10px] font-bold text-zinc-900 dark:text-zinc-300 mb-3 uppercase tracking-widest font-mono">
                Foundations & Evolution
              </h4>
              <div className="space-y-3 text-xs">
                <div>
                  <div className="font-semibold text-zinc-800 dark:text-zinc-200 text-[11px] sm:text-xs">Full Stack Specialization (React + Django)</div>
                  <div className="text-zinc-400 dark:text-zinc-500 text-[10px] font-mono">Brototype — Intensive Residency</div>
                </div>
                <div className="border-t border-zinc-100 dark:border-zinc-900/60 pt-2.5 transition-all duration-300">
                  <div className="font-semibold text-zinc-800 dark:text-zinc-200 text-[11px] sm:text-xs">Web Application Architecture Studies</div>
                  <div className="text-zinc-400 dark:text-zinc-500 text-[10px] font-mono">Keltron Centre — .NET & PHP Stack</div>
                </div>
                <div className="border-t border-zinc-100 dark:border-zinc-900/60 pt-2.5 transition-all duration-300">
                  <div className="font-semibold text-zinc-800 dark:text-zinc-200 text-[11px] sm:text-xs">B.Sc. Physics</div>
                  <div className="text-zinc-400 dark:text-zinc-500 text-[10px] font-mono">Mahatma Gandhi University</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Action Footer Link */}
        <Link
          to="/"
          className="mt-8 z-20 inline-flex items-center justify-center px-12 bg-zinc-950 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-950 font-medium text-xs tracking-wider uppercase py-2.5 hover:bg-amber-500 dark:hover:bg-amber-500 hover:text-zinc-950 dark:hover:text-zinc-950 transition-all duration-300"
          style={{ clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0 100%)" }}
        >
          Return to Hub
        </Link>
      </section>
    </PageTransition >
  );
}

export default AboutPage;
