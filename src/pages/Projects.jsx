import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const PROJECTS = [
  {
    title: 'Scalable API Gateway',
    description: 'Built a high-throughput API gateway using FastAPI and Redis to handle 1M+ requests per minute.',
    tags: ['FastAPI', 'Redis', 'Docker', 'AWS'],
    github: '#',
    live: '#',
    image: 'https://images.unsplash.com/photo-1558494949-ef710cbd851d?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Data Pipeline Dashboard',
    description: 'Developed an interactive dashboard for real-time data visualization using React and D3.js.',
    tags: ['React', 'D3.js', 'Python', 'PostgreSQL'],
    github: '#',
    live: '#',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'ML Model Service',
    description: 'Containerized and deployed PyTorch models for automated image classification in production.',
    tags: ['PyTorch', 'Kubernetes', 'Flask', 'Azure'],
    github: '#',
    live: '#',
    image: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc?q=80&w=600&auto=format&fit=crop'
  },
];

export default function Projects() {
  return (
    <div className="bg-gradient-to-b from-blue-50/40 to-blue-100/20 dark:from-gray-900/50 dark:to-gray-800/40 min-h-screen py-24 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-medium tracking-[0.22em] uppercase text-gray-500 dark:text-gray-400 mb-3">
            Portfolio
          </p>
          <h2 className="font-serif text-5xl md:text-6xl font-black leading-tight text-blue-900 dark:text-white">
            Featured <em className="italic text-blue-400">Projects.</em>
          </h2>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <div 
              key={index}
              className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-2xl border border-white/20 dark:border-gray-400/20 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-xl font-bold text-blue-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm font-light text-blue-900/80 dark:text-gray-300 mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-3 py-1 bg-white/50 dark:bg-gray-700/50 text-blue-400 dark:text-blue-300 rounded-full backdrop-blur-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/20 dark:border-gray-400/20 mt-auto">
                  <a href={project.github} className="text-blue-400 dark:text-blue-300 hover:text-blue-600 transition-colors">
                    <FaGithub size={20} />
                  </a>
                  <a href={project.live} className="ml-auto flex items-center gap-2 text-sm font-medium text-blue-400 dark:text-blue-300 hover:text-blue-600 transition-colors">
                    Live Demo <FaExternalLinkAlt size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
