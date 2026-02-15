import React, { useRef } from "react";
import { FaPython, FaDocker, FaDatabase, FaAws, FaBriefcase, FaGraduationCap, FaDownload, FaPhone, FaMapMarkerAlt, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { SiFastapi, SiDjango } from 'react-icons/si';

export default function Resume() {
  const resumeRef = useRef();

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/20 to-blue-100/10 dark:from-gray-900/60 dark:to-gray-800/40 flex justify-center p-4 md:p-8">

      {/* Main Frosted Glass Card */}
      <div className="w-full max-w-7xl rounded-2xl overflow-hidden border border-white/30 dark:border-white/20 bg-white/20 dark:bg-gray-900/30 backdrop-blur-lg shadow-2xl shadow-blue-200/30 relative">

        {/* Optional Frosted Overlay */}
        <div className="absolute inset-0 bg-white/5 dark:bg-gray-50/5 backdrop-blur-xl pointer-events-none"></div>

        {/* Header */}
        <div className="bg-white/20 dark:bg-gray-950/30 p-6 md:p-8 border-b border-white/30 dark:border-white/20 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 backdrop-blur-md">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-black/90 dark:text-white/90 tracking-tight">
              Naomi Weatherford
            </h1>
            <p className="text-base text-blue-700 dark:text-blue-400 font-medium mt-1">
              Backend Python Developer
            </p>
          </div>

          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-5 py-2 rounded-lg bg-black/80 dark:bg-white/80 text-white dark:text-black font-semibold hover:bg-gray-800/70 dark:hover:bg-gray-200/70 transition text-sm shadow-md"
          >
            <FaDownload /> Download PDF
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row">

          {/* LEFT COLUMN: Sidebar */}
          <aside className="md:w-1/3 p-6 md:p-8 bg-white/20 dark:bg-gray-950/25 border-r border-white/30 dark:border-white/20 backdrop-blur-md flex flex-col gap-8">

            {/* Profile */}
            <div>
              <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-2">
                Profile
              </h3>
              <p className="text-sm text-black/90 dark:text-white/90 leading-relaxed">
                Backend Engineer specializing in Python, building scalable APIs, managing databases, and containerizing applications.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-2">
                Contact
              </h3>
              <ul className="space-y-2 text-sm text-black/90 dark:text-white/90">
                <li className="flex items-center gap-2">
                  <FaPhone className="text-blue-500 dark:text-blue-400" /> 123-456-7890
                </li>
                <li className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-blue-500 dark:text-blue-400" /> Provo, Utah
                </li>
                <li className="flex items-center gap-2">
                  <FaEnvelope className="text-blue-500 dark:text-blue-400" /> astronaomical@gmail.com
                </li>
                <li className="flex items-center gap-2">
                  <FaGlobe className="text-blue-500 dark:text-blue-400" /> astronaomical.com
                </li>
              </ul>
            </div>

            {/* Technical Stack */}
            <div>
              <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-2">
                Technical Stack
              </h3>
              <div className="grid grid-cols-3 gap-3 text-center">
                <TechItem icon={FaPython} label="Python" />
                <TechItem icon={SiFastapi} label="FastAPI" />
                <TechItem icon={SiDjango} label="Django" />
                <TechItem icon={FaDocker} label="Docker" />
                <TechItem icon={FaDatabase} label="SQL" />
                <TechItem icon={FaAws} label="AWS" />
              </div>
            </div>

          </aside>

          {/* RIGHT COLUMN: Content */}
          <main className="md:w-2/3 p-6 md:p-8 flex flex-col gap-6">

            {/* Work Experience */}
            <Section title="Work Experience" icon={FaBriefcase}>
              <ExperienceItem
                role="Senior Backend Developer"
                company="TechCorp Inc."
                date="2020 – Present"
                description="Designed and implemented RESTful APIs using FastAPI, reduced response times by 40%."
              />
              <ExperienceItem
                role="Python Developer"
                company="DataSolutions"
                date="2018 – 2020"
                description="Maintained Django applications and managed PostgreSQL databases."
              />
            </Section>

            {/* Education */}
            <Section title="Education" icon={FaGraduationCap}>
              <ExperienceItem
                role="M.S Computer Science"
                company="State University"
                date="2016 – 2018"
                description="Focus on algorithms, data structures, and database management."
              />
            </Section>

          </main>
        </div>
      </div>
    </div>
  );
}

/* Helper Components */
function Section({ title, icon: Icon, children }) {
  return (
    <section className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Icon className="text-blue-500 text-xl" />
        <h2 className="text-xl font-semibold text-black/90 dark:text-white/90">{title}</h2>
      </div>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function ExperienceItem({ role, company, date, description }) {
  return (
    <div className="bg-white/20 dark:bg-gray-800/25 p-4 rounded-lg border border-white/20 dark:border-white/10 backdrop-blur-md">
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-semibold text-black/90 dark:text-white/90">{role}</h4>
        <span className="text-xs font-semibold text-gray-600 dark:text-gray-300 bg-white/20 dark:bg-gray-700/30 px-2 py-0.5 rounded-full">{date}</span>
      </div>
      <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">{company}</p>
      <p className="text-sm text-black/90 dark:text-white/90 leading-relaxed">{description}</p>
    </div>
  );
}

function TechItem({ icon: Icon, label }) {
  return (
    <div className="flex flex-col items-center gap-1 bg-white/20 dark:bg-gray-800/25 p-2 rounded-lg border border-white/20 dark:border-white/10 backdrop-blur-md">
      <Icon className="text-2xl text-black/90 dark:text-white/90" />
      <span className="text-xs font-medium text-black/90 dark:text-white/90">{label}</span>
    </div>
  );
}
