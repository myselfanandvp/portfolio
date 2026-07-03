import PageTransition from "../components/PageTransition";
import ChromaGrid from "../components/animations/ChromaGrid";
import Brilworx from "../assets/Brilworx.jpg";
import Manjaro from "../assets/Manjaro.jpg";
import Netflix from "../assets/Netflix.jpg";
import Olx from "../assets/Olx.jpg";
import Wavelift from "../assets/Wavelift.jpg";
import Website from "../assets/OfficalWebsite.jpg";
import Clipshape from "../components/Clipshape";

function ProjectsPage() {
  const items = [
    {
      image: Wavelift,
      title: "WaveLift",
      subtitle: "Full-Stack Personal Headset eCommerce Platform Built with Django"
      handle: "01 // Enterprise System",
      borderColor: "border-zinc-300 dark:border-zinc-800",
      accentColor: "group-hover:text-amber-500",
      url: "https://www.wavelift.dpdns.org/",
    },
    {
      image: Manjaro,
      title: "Manjaro Landing Page Clone",
      subtitle: "Fully responsive modern UI clone developed using HTML & Tailwind CSS",
      handle: "02 // UI Architecture",
      borderColor: "border-amber-500/50 dark:border-amber-500/30",
      accentColor: "text-amber-500 dark:text-amber-400",
      url: "https://myselfanandvp.github.io/Manjaro_org_clone/",
    },
    {
      image: Brilworx,
      title: "Brilworx Corporate Website",
      subtitle: "Responsive business website crafted using HTML and Tailwind CSS",
      handle: "03 // Web Layout",
      borderColor: "border-zinc-300 dark:border-zinc-800",
      accentColor: "group-hover:text-amber-500",
      url: "https://myselfanandvp.github.io/-Brilworx/",
    },
    {
      image: Netflix,
      title: "Netflix UI Clone",
      subtitle: "Interactive streaming platform clone powered by React.js and Firebase",
      handle: "04 // Client Application",
      borderColor: "border-zinc-300 dark:border-zinc-800",
      accentColor: "group-hover:text-amber-500",
      url: "https://github.com/myselfanandvp/Netflix-clone",
    },
    {
      image: Olx,
      title: "OLX Marketplace Clone",
      subtitle: "Responsive marketplace application using React.js and Firebase backend",
      handle: "05 // Distribution App",
      borderColor: "border-zinc-300 dark:border-zinc-800",
      accentColor: "group-hover:text-amber-500",
      url: "https://github.com/myselfanandvp/olx-clone",
    },
    {
      image: Website,
      title: "My Official Website",
      subtitle: "Personal portfolio website hosting system, showcasing engineering models and clean responsive architecture.",
      handle: "06 // Engineering Hub",
      borderColor: "border-amber-500/50 dark:border-amber-500/30",
      accentColor: "text-amber-500 dark:text-amber-400",
      url: "https://myselfanandvp.github.io/officialwebsite/",
    },
  ];

  return (
    <PageTransition>
      {/* Structural Projects Wrapper - Configured with justify-center and py-12 for exact viewport centering */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-24 max-w-7xl mx-auto w-full font-sans selection:bg-amber-500/20">

        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.01] pointer-events-none mix-blend-difference">
        </div>

        {/* Minimal Context Indicator */}
        <div className="mb-2 flex items-center gap-2 z-20">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
          <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
            Production Ledger
          </span>
        </div>

        {/* Crisp Architectural Heading */}
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 pb-1 text-center z-20">
          Selected Engineering Models
        </h1>
        <Clipshape />
        {/* Subtitle Description Element */}
        <p className="max-w-md text-center text-zinc-500 dark:text-zinc-400 font-normal text-xs sm:text-sm mt-3 mb-8 leading-relaxed z-20">
          An architectural ledger of full-stack builds, client interfaces, and production application deployments.
        </p>

        {/* Unified Geometry Grid */}
        <ChromaGrid items={items} />

      </section>

    </PageTransition>
  );
}

export default ProjectsPage;
