import BorderGlow from "../components/animations/GlowingBorder";
import PageTransition from "../components/PageTransition";

function SkillsPage() {
  const skillCategories = [
    {
      title: "Frontend Development",
      emoji: "⚛️",
      colorClass: "from-blue-500 to-cyan-400",
      skills: ["React.js", "Redux Toolkit", "Tailwind CSS", "Vite", "JavaScript (ES6+)"]
    },
    {
      title: "Backend & Data Engines",
      emoji: "🐍",
      colorClass: "from-emerald-500 to-indigo-500",
      skills: ["Python", "Django / DRF", "MS SQL Server", "PostgreSQL", "Pandas ETL"]
    },
    {
      title: "Tools & Environment",
      emoji: "💻",
      colorClass: "from-purple-500 to-pink-500",
      skills: ["Git & GitHub", "Linux Systems", "Postman APIs", "SSMS", "Node.js & .NET Core"]
    }
  ];

  return (
    <PageTransition>
      {/* Centered Skills Section Wrapper */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-24 max-w-8xl mx-auto w-full">

        {/* Animated Badge */}
        <div className="mb-6 animate-bounce [animation-duration:3s]">
          <span className="inline-flex items-center gap-1.5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide shadow-sm backdrop-blur-sm">
            🛠️ My Toolkit
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 drop-shadow-sm pb-2 text-center">
          Skills & Tech Stack
        </h1>

        <p className="mt-4 max-w-xl text-center text-slate-600 dark:text-slate-300 font-medium text-base md:text-lg mb-14">
          The languages, frameworks, database architectures, and development environments I use daily to engineer clean, maintainable platforms.
        </p>

        {/* Centered Grid with transparent background cards */}
        <div className="grid md:grid-cols-3 gap-6 w-full justify-center items-stretch z-20">
          {skillCategories.map((category, idx) => (
            <BorderGlow
              key={idx}
              glowIntensity={40}
              className="flex flex-col h-full bg-transparent w-full"
              backgroundColor="bg-transparent"
            >
              {/* Box background set to fully transparent with fine-tuned borders for contrast */}
              <div className="flex flex-col flex-1 w-full bg-transparent border border-slate-200/60 dark:border-slate-800/60 p-6 rounded-3xl hover:-translate-y-1 transition-all duration-300">

                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-slate-500/5 dark:bg-slate-400/5 flex items-center justify-center border border-slate-200/30 dark:border-slate-800/30">
                    <span className="text-xl">{category.emoji}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List with matching transparent items */}
                <ul className="space-y-3 flex-1 flex flex-col justify-start">
                  {category.skills.map((skill, sIdx) => (
                    <li
                      key={sIdx}
                      className="group flex items-center justify-between p-3 rounded-2xl bg-slate-500/5 dark:bg-slate-400/5 border border-slate-200/20 dark:border-slate-800/20 transition-all duration-200 hover:bg-slate-500/10 dark:hover:bg-slate-400/10"
                    >
                      <span className="font-semibold text-sm text-slate-700 dark:text-slate-200 group-hover:translate-x-1 transition-transform">
                        {skill}
                      </span>
                      <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.colorClass} opacity-60 group-hover:scale-150 transition-transform`} />
                    </li>
                  ))}
                </ul>

              </div>
            </BorderGlow>
          ))}
        </div>

        {/* Ambient Floating Icons */}
        <div className="absolute top-24 left-8 md:left-16 text-4xl pointer-events-none animate-float opacity-70 dark:opacity-80">⚙️</div>
        <div className="absolute bottom-32 left-10 md:left-20 text-3xl pointer-events-none animate-float [animation-delay:1.5s] opacity-60 dark:opacity-70">⚛️</div>
        <div className="absolute top-32 right-10 md:right-20 text-4xl pointer-events-none animate-float [animation-delay:0.7s] opacity-70 dark:opacity-80">🐍</div>
        <div className="absolute bottom-24 right-12 md:right-24 text-3xl pointer-events-none animate-float [animation-delay:2.2s] opacity-60 dark:opacity-70">🗄️</div>
      </section>
    </PageTransition>
  );
}

export default SkillsPage;
