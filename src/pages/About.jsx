import React from 'react';
import { FaPython, FaDocker, FaDatabase, FaAws } from 'react-icons/fa';
import { SiFastapi, SiDjango } from 'react-icons/si';

const About = () => {
  const skills = [
    { name: 'Python', icon: FaPython, color: 'text-yellow-500' },
    { name: 'FastAPI', icon: SiFastapi, color: 'text-teal-500' },
    { name: 'Django', icon: SiDjango, color: 'text-green-700' },
    { name: 'SQL/NoSQL', icon: FaDatabase, color: 'text-blue-500' },
    { name: 'Docker', icon: FaDocker, color: 'text-blue-600' },
    { name: 'AWS', icon: FaAws, color: 'text-orange-500' },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50/30 to-blue-100/20 dark:from-gray-900/50 dark:to-gray-800/40 py-16 px-6 md:px-10 lg:px-20 min-h-screen transition-colors duration-500">
      
      <h1 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-white mb-12 text-center">
        About Me
      </h1>

      <div className="grid md:grid-cols-3 gap-10 items-center">
        {/* Profile Photo */}
        <div className="md:col-span-1">
          <div className="aspect-square rounded-3xl bg-white/30 dark:bg-gray-800/30 backdrop-blur-md flex items-center justify-center border border-white/20 dark:border-gray-400/20 shadow-lg hover:shadow-xl transition-shadow">
            <span className="text-gray-400 dark:text-gray-500 text-lg font-medium">
              Your Photo
            </span>
            {/* Replace with: <img src="your-photo.jpg" className="rounded-3xl" /> */}
          </div>
        </div>

        {/* Bio */}
        <div className="md:col-span-2 bg-white/30 dark:bg-gray-800/30 backdrop-blur-md p-8 rounded-3xl border border-white/20 dark:border-gray-400/20 shadow-lg hover:shadow-xl transition-shadow text-gray-700 dark:text-gray-300 space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 dark:text-white">
            Hi, I'm Anand!
          </h2>
          <p>
            I am a passionate Python Developer with experience in building robust backend systems, APIs, and automating workflows. I love turning complex problems into clean, efficient, and scalable code.
          </p>
          <p>
            My journey began with a curiosity for how things work under the hood, which led me to focus heavily on backend development and cloud technologies. Currently, I am focused on building high-performance APIs using FastAPI and deploying containerized applications.
          </p>
          <p>
            When I'm not coding, I enjoy exploring new technologies, contributing to open-source, or reading about system design.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-16">
        <h3 className="text-2xl md:text-3xl font-semibold text-blue-900 dark:text-white mb-8 text-center">
          Technical Toolkit
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {skills.map((skill) => (
            <div 
              key={skill.name}
              className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md p-6 rounded-2xl border border-white/20 dark:border-gray-400/20 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-shadow hover:scale-105"
            >
              <skill.icon className={`h-12 w-12 ${skill.color} mb-4`} />
              <span className="font-medium text-blue-900 dark:text-white">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
