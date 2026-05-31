import BorderGlow from "../components/animations/GlowingBorder";
import PageTransition from "../components/PageTransition";

function SkillsPage() {
  const skillCategories = [
    {
      index: "01 // UI Architecture",
      title: "Frontend Development",
      skills: ["React.js", "Redux Toolkit", "Tailwind CSS", "Vite", "JavaScript (ES6+)"]
    },
    {
      index: "02 // Systems & Integration",
      title: "Backend & Data Engines",
      skills: ["Python", "Django / DRF", "MS SQL Server", "PostgreSQL", "Pandas ETL"]
    },
    {
      index: "03 // Runtime & Environment",
      title: "Tools & Workspace",
      skills: ["Git & GitHub", "Linux Systems", "Postman APIs", "SSMS", "Node.js / .NET Core"]
    }
  ];

  return (
    <PageTransition>
      {/* Structural Skills Section Wrapper */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-24 max-w-7xl mx-auto w-full font-sans selection:bg-amber-500/20">

        {/* Minimal Context Indicator */}
        <div className="mb-4 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
          <span className="text-xs font-semibold tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
            Technical Matrix
          </span>
        </div>

        {/* Crisp Architectural Heading */}
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 pb-2 text-center">
          Skills & Tech Stack
        </h1>
        <div className="w-12 h-[2px] bg-amber-500 rounded-full mt-1 mb-6"></div>

        <p className="max-w-md text-center text-zinc-500 dark:text-zinc-400 font-normal text-sm md:text-base mb-16 leading-relaxed">
          Languages, core frameworks, storage architectures, and environments deployed to maintain runtime performance.
        </p>

        {/* Unified Geometry Grid */}
        <div className="grid md:grid-cols-3 gap-6 w-full justify-center items-stretch z-20">
          {skillCategories.map((category, idx) => (
            <BorderGlow
              key={idx}
              glowIntensity={20}
              className="flex flex-col h-full bg-zinc-100/50 dark:bg-zinc-900/10 w-full rounded-2xl"
              backgroundColor="bg-transparent"
            >
              {/* Structural Content Container Block */}
              <div className="flex flex-col flex-1 w-full p-6 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white/50 dark:bg-zinc-950/40 backdrop-blur-md transition-all duration-300">

                {/* Module Heading Group */}
                <div className="flex flex-col gap-1 mb-6 pb-4 border-b border-zinc-100 dark:border-zinc-900">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                    {category.index}
                  </span>
                  <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-200">
                    {category.title}
                  </h3>
                </div>

                {/* Clean, Uniform Row Elements */}
                <ul className="space-y-2 flex-1 flex flex-col justify-start font-sans">
                  {category.skills.map((skill, sIdx) => (
                    <li
                      key={sIdx}
                      className="group flex items-center justify-between p-3 rounded-lg bg-zinc-500/5 dark:bg-zinc-400/5 border border-zinc-200/30 dark:border-zinc-800/30 transition-all duration-200 hover:bg-zinc-500/10 dark:hover:bg-zinc-400/10"
                    >
                      <span className="text-xs md:text-sm font-medium text-zinc-800 dark:text-zinc-300 transition-transform duration-150 group-hover:translate-x-0.5">
                        {skill}
                      </span>
                      {/* Architectural Status Dot Indicator */}
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 group-hover:bg-amber-500 dark:group-hover:bg-amber-400 transition-colors duration-150" />
                    </li>
                  ))}
                </ul>

              </div>
            </BorderGlow>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}

export default SkillsPage;
