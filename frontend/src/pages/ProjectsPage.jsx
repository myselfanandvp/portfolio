import PageTransition from "../components/PageTransition";
import ChromaGrid from "../components/animations/ChromaGrid";
import Brilworx from "../assets/Brilworx.png"
import Manjaro from "../assets/Manjaro.png"
import Netflix from "../assets/Netflix.png"
import Olx from "../assets/Olx.png"
import Wavelift from "../assets/Wavelift.png"
import Website from "../assets/OfficalWebsite.png"
function ProjectsPage() {

  const items = [
    {
      image: Wavelift,
      title: "WaveLift Legal Claims Platform",
      subtitle: "Full-stack enterprise legal & insurance workflow system built with Django",
      handle: "@wavelift",
      borderColor: "#e176c8",
      gradient: "linear-gradient(145deg, #e176c8, #792CA2)",
      url: "https://www.wavelift.dpdns.org/",
    },
    {
      image: Manjaro,
      title: "Manjaro Landing Page Clone",
      subtitle: "Fully responsive modern UI clone developed using HTML & Tailwind CSS",
      handle: "@manjaroclone",
      borderColor: "#5798b4",
      gradient: "linear-gradient(210deg, #5798b4, #4d585f)",
      url: "https://myselfanandvp.github.io/Manjaro_org_clone/",
    },
    {
      image: Brilworx,
      title: "Brilworx Corporate Website",
      subtitle: "Responsive business website crafted using HTML and Tailwind CSS",
      handle: "@brilworx",
      borderColor: "#fde17d",
      gradient: "linear-gradient(165deg, #fde17d, #70d2c1)",
      url: "https://myselfanandvp.github.io/-Brilworx/",
    },
    {
      image: Netflix,
      title: "Netflix UI Clone",
      subtitle: "Interactive streaming platform clone powered by React.js and Firebase",
      handle: "@netflixclone",
      borderColor: "#3b2b2e",
      gradient: "linear-gradient(145deg, #3b2b2e, #e13d46)",
      url: "https://github.com/myselfanandvp/Netflix-clone",
    },
    {
      image: Olx,
      title: "OLX Marketplace Clone",
      subtitle: "Responsive marketplace application using React.js and Firebase backend",
      handle: "@olxclone",
      borderColor: "#6791f0",
      gradient: "linear-gradient(145deg, #6791f0, #cb5e83)",
      url: "https://github.com/myselfanandvp/olx-clone",
    },
    {
      image: Website,
      title: "My Official Website",
      subtitle:
        "Personal portfolio website hosted on GitHub Pages, showcasing my projects, skills, tech stack, and contact information with a clean responsive design.",
      handle: "@OfficialWebsite",
      borderColor: "#9252ff",
      gradient: "linear-gradient(145deg, #9252ff,#050505)",
      url: "https://myselfanandvp.github.io/officialwebsite/",
    },
  ];
  return (
    <PageTransition>
      {/* Main Page Layout Wrapper */}
      <section className="relative z-10 flex flex-col items-center min-h-[calc(100vh-80px)] px-4 sm:px-6 py-16 md:py-24 max-w-6xl mx-auto w-full overflow-hidden">

        {/* Header content grouped to preserve vertical flow */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12 md:mb-16">
          {/* Cute Animated Badge */}
          <div className="mb-6 animate-bounce [animation-duration:3s]">
            <span className="inline-flex items-center gap-1.5 bg-blue-50 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/50 text-blue-600 dark:text-blue-400 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide shadow-sm">
              🚀 My creations
            </span>
          </div>

          {/* Beautiful Gradient Title */}
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-rose-500 dark:from-blue-400 dark:via-purple-400 dark:to-rose-400 drop-shadow-sm pb-2">
            Featured Work
          </h1>

          <p className="mt-4 text-slate-600 dark:text-slate-400 font-medium text-base md:text-lg">
            A selection of enterprise application solutions, custom automation pipelines, and core full-stack builds.
          </p>
        </div>

        <div style={{ height: 'auto', position: 'relative' }}>
          <ChromaGrid
            items={items}
            radius={300}
            damping={0.8}
            fadeOut={1.2}
            ease="power3.out"
          />
        </div>

        {/* Ambient Floating Icons - Hidden on small screens to avoid clipping/clutter */}
        <div className="hidden sm:block absolute top-24 left-4 md:left-8 text-4xl pointer-events-none animate-float opacity-20 dark:opacity-30">🛠️</div>
        <div className="hidden sm:block absolute bottom-32 left-6 md:left-12 text-3xl pointer-events-none animate-float [animation-delay:1.5s] opacity-20 dark:opacity-30">📦</div>
        <div className="hidden sm:block absolute top-32 right-6 md:right-12 text-4xl pointer-events-none animate-float [animation-delay:0.7s] opacity-20 dark:opacity-30">💎</div>
        <div className="hidden sm:block absolute bottom-24 right-8 md:right-16 text-3xl pointer-events-none animate-float [animation-delay:2.2s] opacity-20 dark:opacity-30">🔧</div>
      </section>
    </PageTransition >
  );
}

export default ProjectsPage;
