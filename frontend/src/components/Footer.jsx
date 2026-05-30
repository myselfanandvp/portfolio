import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "github", url: "https://github.com/myselfanandvp", icon: FaGithub },
    { name: "linkedin", url: "https://www.linkedin.com/in/myselfanandvp/", icon: FaLinkedin },
    { name: "x_twitter", url: "https://x.com/meAnandvp", icon: FaTwitter },
  ];

  return (
    <footer className="z-50 relative w-full border-t border-slate-200/60 dark:border-slate-800/80 bg-transparent font-mono transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Top Section: System Config Layout */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-8 border-b border-slate-200/40 dark:border-slate-800/60">

          {/* Left Side: Coder Signature & Process Hook */}
          <div className="flex flex-col gap-2">
            <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
              <span className="text-teal-500">const</span> identity = <span className="text-purple-500">"Anand V P"</span>;
            </span>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm font-sans leading-relaxed">
              // Packaging reliable server runtimes and responsive React layouts with architectural performance in mind.
            </p>

            {/* System Status Log Indicator */}
            <div className="mt-3 inline-flex items-center gap-2 self-start px-2.5 py-1 rounded border border-emerald-500/20 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-bold tracking-tight uppercase">
                STATUS: listening_for_opportunities
              </span>
            </div>
          </div>

          {/* Right Side: Script Directories & Links */}
          <div className="flex flex-wrap gap-12">

            {/* Navigation Array Blocks */}
            <div className="flex flex-col gap-2.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-600">
                // routes
              </span>
              <nav className="flex flex-col gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-400">
                <Link to="/" className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors">home()</Link>
                <Link to="/projects" className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors">projects()</Link>
                <Link to="/contact" className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors">contact()</Link>
              </nav>
            </div>

            {/* Social Connection Keys */}
            <div className="flex flex-col gap-2.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-600">
                // connections
              </span>
              <div className="flex flex-col gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-400">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-teal-500 dark:hover:text-teal-400 transition-colors group"
                    >
                      <span className="text-xs text-slate-400 dark:text-slate-600 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors">
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

        {/* Bottom Section: Compile Logs & Specs */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-[10px] font-bold text-slate-400 dark:text-slate-600">
          <div>
            &copy; {currentYear} internal_build. All rights reserved.
          </div>
          <div className="flex gap-3">
            <span>env: react_tailwind_node</span>
            <span>•</span>
            <span className="text-slate-500 dark:text-slate-400">
              exit_code: <span className="text-teal-500">0</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
