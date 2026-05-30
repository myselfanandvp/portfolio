import PageTransition from "../components/PageTransition";
import BorderGlow from "../components/animations/GlowingBorder";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <PageTransition>

      {/* Main Content Container */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-24 max-w-5xl mx-auto">

        {/* Cute Animated Badge */}
        <div className="mb-6 animate-bounce [animation-duration:3s]">
          <span className="inline-flex items-center gap-1.5 bg-pink-50 dark:bg-pink-950/50 border border-pink-200 dark:border-pink-900 text-pink-600 dark:text-pink-400 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide shadow-sm">
            ✨ Nice to meet you!
          </span>
        </div>

        {/* Beautiful Gradient Title */}
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 dark:from-pink-400 dark:via-purple-400 dark:to-indigo-400 drop-shadow-sm pb-2 text-center">
          About Me
        </h1>

        {/* Intro Grid: Text + Card */}
        <div className="mt-12 grid md:grid-cols-5 gap-8 items-start w-full">

          {/* Left Side: Bio Narrative */}
          <div className="md:col-span-3 space-y-6 text-slate-600 dark:text-slate-300 font-medium text-base md:text-lg leading-relaxed">
            <p>
              I'm <span className="text-teal-500 font-bold">Anand VP</span>, a Full Stack Developer with over 2 years of experience building enterprise-grade legal administration platforms, scalable RESTful APIs, and automated data pipelines. I focus on delivering clean, maintainable software that solves real business puzzles and increases overall application reliability.
            </p>
            <p>
              During my time as a Software Engineer at Standout IT Solutions, I engineered core relational database schemas from scratch to support complex workflows like claim processing and insurance settlements. By rewriting legacy queries with optimized CTEs, Cross Apply, and indexed Stored Procedures, I successfully reduced multi-table report generation times by 40%.
            </p>
            <p>
              I enjoy bridging operational gaps with code—whether that means implementing modular Django REST Framework endpoints with JWT authentication or designing configurable ETL pipelines with Pandas that cut data-load failure rates by over 90%. I am actively looking for product-focused engineering opportunities where robust code architectures and measurable real-world performance matter.
            </p>

            {/* Selected Highlights */}
            <div className="mt-4">
              <h4 className="text-sm font-bold text-slate-900 dark:text-slate-200 mb-2 uppercase tracking-wide">Selected highlights</h4>
              <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li>Engineered secure role-based multi-client legal administration tools handling multi-role access controls.</li>
                <li>Optimized query execution overhead, decreasing report processing time down to seconds using parameterized SQL views.</li>
                <li>Designed autonomous ETL data data-loading layers to parse bulk client CSV and Excel datasets with error-logging layers.</li>
                <li>Wrote clean API documentation and rigorous Postman test scripts, improving developer onboarding speed.</li>
              </ul>
            </div>

            {/* Academic Foundations */}
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800">
              <h4 className="text-sm font-bold text-slate-900 dark:text-slate-200 mb-2 uppercase tracking-wide">Education & Foundations</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-bold text-slate-800 dark:text-slate-200">Full Stack Developer Program (React.js + Django)</div>
                  <div className="text-slate-500 dark:text-slate-400 text-xs">Brototype | In Progress</div>
                </div>
                <div>
                  <div className="font-bold text-slate-800 dark:text-slate-200">Web Application Development</div>
                  <div className="text-slate-500 dark:text-slate-400 text-xs">Keltron Knowledge Centre | .NET Core & PHP Certification</div>
                </div>
                <div>
                  <div className="font-bold text-slate-800 dark:text-slate-200">B.Sc. Physics</div>
                  <div className="text-slate-500 dark:text-slate-400 text-xs">MG College, Mahatma Gandhi University</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Technical Snapshot Card */}
          <BorderGlow glowIntensity={50} glowRadius={50} className="p-2 md:col-span-2 hover:scale-[1.02] transition-transform duration-300">
            <div className="p-6 rounded-xl md:p-8 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
              <h3 className="text-xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">Technical Snapshot</h3>

              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-base dark:bg-indigo-950">🐍</span>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-slate-100">Backend</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Python, Django, DRF, Node.js, .NET Core, PHP</div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-50 text-base dark:bg-purple-950">⚛️</span>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-slate-100">Frontend</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">React.js, JavaScript (ES6+), Tailwind CSS, HTML5, CSS3, Bootstrap</div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-pink-50 text-base dark:bg-pink-950">🗄️</span>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-slate-100">Databases & Tools</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">MS SQL Server, PostgreSQL, MySQL, MongoDB, Pandas, Git, Linux</div>
                  </div>
                </li>
              </ul>

              <hr className="my-4 border-slate-200 dark:border-slate-800" />

              <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">My Fuel ☕</h4>
              <ul className="space-y-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-950">🎨</span>
                  Clean, maintainable design systems
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-50 dark:bg-purple-950">🚀</span>
                  Performance & scalable architecture
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-pink-50 dark:bg-pink-950">🧩</span>
                  Reliable data pipelines & reporting
                </li>
              </ul>
            </div>
          </BorderGlow>
        </div>

        {/* Bottom CTA */}

        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center bg-slate-900 text-gray-100 dark:bg-white dark:text-slate-900 font-semibold px-8 py-3.5 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 md:mt-5"
        >
          Back to Home
        </Link>

        {/* Floating Emojis matching the Landing Page system */}
        <div className="absolute top-24 right-8 md:right-16 text-4xl pointer-events-none animate-float opacity-70 dark:opacity-80">
          🐍
        </div>

        <div className="absolute bottom-32 right-10 md:right-20 text-3xl pointer-events-none animate-float [animation-delay:1.5s] opacity-60 dark:opacity-70">
          ☕
        </div>

        <div className="absolute top-32 left-10 md:left-20 text-4xl pointer-events-none animate-float [animation-delay:0.7s] opacity-70 dark:opacity-80">
          ✨
        </div>

        <div className="absolute bottom-24 left-12 md:left-24 text-3xl pointer-events-none animate-float [animation-delay:2.2s] opacity-60 dark:opacity-70">
          💡
        </div>
      </section>
    </PageTransition >
  );
}

export default AboutPage;
