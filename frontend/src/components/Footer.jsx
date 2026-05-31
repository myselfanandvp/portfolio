import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/myselfanandvp", icon: FaGithub },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/myselfanandvp/", icon: FaLinkedin },
    { name: "X (Twitter)", url: "https://x.com/meAnandvp", icon: FaTwitter },
  ];

  return (
    <footer className="z-50 relative w-full z-50 w-full backdrop-blur-md border-b border-zinc-200/50 dark:border-zinc-800/50 bg-white/70 dark:bg-zinc-950/70 font-sans transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Top Section: Architectural Directory Grid */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-8 border-b border-zinc-100 dark:border-zinc-900">

          {/* Left Side: Brand Signature Block */}
          <div className="flex flex-col gap-2">
            <span className="text-sm font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Anand V P
            </span>
            <p className="text-xs text-zinc-400 dark:text-zinc-500 max-w-sm leading-relaxed font-normal">
              Structuring reliable data pipelines, server-side configurations, and responsive user interface systems.
            </p>

            {/* System Status Log Indicator */}
            <div className="mt-2 inline-flex items-center gap-2 self-start px-2 py-1 rounded bg-zinc-100/80 dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-zinc-800/40 text-zinc-600 dark:text-zinc-400">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500"></span>
              </span>
              <span className="text-[9px] font-bold tracking-widest uppercase font-mono">
                STATUS: listening_for_opportunities
              </span>
            </div>
          </div>

          {/* Right Side: Script Directories & Links */}
          <div className="flex flex-wrap gap-12 md:gap-16">

            {/* Navigation Routes */}
            <div className="flex flex-col gap-2.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-600 font-mono">
                01 // Routes
              </span>
              <nav className="flex flex-col gap-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                <Link to="/" className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors">Home</Link>
                <Link to="/projects" className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors">Projects</Link>
                <Link to="/contact" className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors">Contact</Link>
              </nav>
            </div>

            {/* Social Connection Keys */}
            <div className="flex flex-col gap-2.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-600 font-mono">
                02 // Registry
              </span>
              <div className="flex flex-col gap-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-amber-500 dark:hover:text-amber-400 transition-colors group"
                    >
                      <span className="text-xs text-zinc-400 dark:text-zinc-600 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors">
                        <Icon />
                      </span>
                      <span>{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Section: Framework Version Details */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-[10px] font-bold tracking-wider text-zinc-400 dark:text-zinc-600 font-mono">
          <div>
            &copy; {currentYear} Environment Portfolio Core. All rights reserved.
          </div>
          <div className="flex gap-3 text-zinc-400 dark:text-zinc-600">
            <span>Stack: React / Tailwind</span>
            <span>•</span>
            <span>
              State: <span className="text-amber-500/90 dark:text-amber-400/90">0x0</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
