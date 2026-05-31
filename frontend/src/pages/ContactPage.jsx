import { useState } from "react";
import { useSelector } from "react-redux";
import BorderGlow from "../components/animations/GlowingBorder";
import PageTransition from "../components/PageTransition";
import { FaAddressCard, FaGithub, FaLinkedinIn, FaMailBulk } from 'react-icons/fa';
function ContactPage() {
  const emailAddress = "mailanandvp@gmail.com";
  const [isCopied, setIsCopied] = useState(false);
  const darkMode = useSelector((state) => state.theme.darkMode);

  const copy = async (text) => {
    if (!window?.navigator?.clipboard) {
      console.warn("Clipboard API not supported");
      return false;
    }
    try {
      await window.navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
      return true;
    } catch (error) {
      console.warn("Copy failed", error);
      return false;
    }
  };

  return (
    <PageTransition>
      {/* Structural Contact Section Layout */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-24 max-w-7xl mx-auto w-full font-sans selection:bg-amber-500/20">

        {/* Minimal Context Indicator */}
        <div className="mb-4 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
          <span className="text-xs font-semibold tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
            Inbound Communications
          </span>
        </div>

        {/* Crisp Architectural Heading */}
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 pb-2 text-center">
          Get In Touch
        </h1>
        <div className="w-12 h-[2px] bg-amber-500 rounded-full mt-1 mb-6"></div>

        <p className="max-w-md text-center text-zinc-500 dark:text-zinc-400 font-normal text-sm md:text-base mb-16 leading-relaxed">
          Have an architectural concept, project specifications, or a product deployment model to evaluate? Send over a message.
        </p>

        {/* Balanced Structural Grid Layout */}
        <div className="grid md:grid-cols-5 gap-10 w-full max-w-4xl items-start">

          {/* Left Column: Minimal Metric Cards */}
          <div className="md:col-span-2 space-y-4 w-full">
            <div className="bg-white/50 dark:bg-zinc-950/40 backdrop-blur-md border border-zinc-200/60 dark:border-zinc-800/60 p-5 rounded-xl shadow-sm relative overflow-hidden">
              <div className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-mono mb-1">
                01 // Direct Address
              </div>
              <div className="flex items-center justify-between gap-1 mt-2">

                <span>
                  <FaMailBulk />
                </span>
                <a
                  href={`mailto:${emailAddress}`}
                  className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 hover:text-amber-500 dark:hover:text-amber-400 transition-colors break-all"
                >
                  {emailAddress}
                </a>

                <div className="flex items-center gap-2 relative">
                  <button
                    onClick={() => copy(emailAddress)}
                    className="text-xs font-medium bg-zinc-100 hover:bg-amber-500 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 dark:hover:bg-amber-400 dark:hover:text-black hover:text-black px-2.5 py-1 rounded border border-zinc-300 dark:border-zinc-700 transition-colors duration-150"
                  >
                    Copy
                  </button>

                  {isCopied && (
                    <span className="absolute right-0 -top-8 text-[10px] font-bold text-amber-600 dark:text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded px-1.5 py-0.5 animate-fade-in-up">
                      Copied!
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-white/50 dark:bg-zinc-950/40 backdrop-blur-md border border-zinc-200/60 dark:border-zinc-800/60 p-5 rounded-xl shadow-sm">
              <div className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-mono mb-1">
                02 // Base Location
              </div>
              <span>
                <FaAddressCard />
              </span>
              <div className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mt-2">
                Kerala, India
              </div>
            </div>

            <div className="bg-white/50 dark:bg-zinc-950/40 backdrop-blur-md border border-zinc-200/60 dark:border-zinc-800/60 p-5 rounded-xl shadow-sm flex justify-around items-center">
              <a
                href="https://github.com/anandvp"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center gap-1 group w-1/2 text-center"
              >
                <span>
                  <FaGithub />
                </span>


                <span className="text-xs font-bold tracking-wider uppercase text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
                  GitHub
                </span>
              </a>
              <div className="w-px h-6 bg-zinc-200 dark:bg-zinc-800" />
              <a
                href="https://linkedin.com/in/anandvp"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center gap-1 group w-1/2 text-center"
              >
                <span>
                  <FaLinkedinIn />
                </span>
                <span className="text-xs font-bold tracking-wider uppercase text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
                  LinkedIn
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Form Frame */}
          <BorderGlow
            glowIntensity={20}
            className="md:col-span-3 p-3 bg-white dark:bg-zinc-800 rounded-[14px]"
            backgroundColor={darkMode ? "black" : "white"}
          >
            <form className="bg-white dark:bg-black p-6 md:p-8 space-y-6 rounded-[11px]">
              {/* Name Block */}
              <div className="group relative space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-mono">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Identify your name or firm"
                  className="w-full px-4 py-2.5 rounded border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 text-zinc-900 dark:text-zinc-100 text-sm placeholder-zinc-400 focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 focus:bg-white dark:focus:bg-zinc-950 transition-all duration-150"
                />
              </div>

              {/* Email Block */}
              <div className="group relative space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-mono">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="contact@domain.com"
                  className="w-full px-4 py-2.5 rounded border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 text-zinc-900 dark:text-zinc-100 text-sm placeholder-zinc-400 focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 focus:bg-white dark:focus:bg-zinc-950 transition-all duration-150"
                />
              </div>

              {/* Message Block */}
              <div className="group relative space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-mono">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Outline your architectural parameters or requirements..."
                  className="w-full px-4 py-2.5 rounded border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 text-zinc-900 dark:text-zinc-100 text-sm placeholder-zinc-400 focus:outline-none focus:border-amber-500 dark:focus:border-amber-400 focus:bg-white dark:focus:bg-zinc-950 transition-all duration-150 resize-none"
                />
              </div>

              {/* Structural Submit Trigger */}
              <button
                type="submit"
                onClick={(e) => e.preventDefault()}
                className="w-full bg-zinc-950 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-950 font-medium text-xs tracking-wider uppercase py-3 rounded border border-zinc-950 dark:border-zinc-100 hover:bg-transparent dark:hover:bg-transparent hover:text-zinc-950 dark:hover:text-zinc-100 transition-all duration-200 flex items-center justify-center gap-2"
              >
                Transmit Message
              </button>
            </form>
          </BorderGlow>

        </div>
      </section>
    </PageTransition>
  );
}

export default ContactPage;
