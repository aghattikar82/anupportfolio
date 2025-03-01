import React from 'react';

const projects = [
  {
    title: 'Project 1',
    description: 'This is a detailed description of Project 1, highlighting its purpose, key features, and technologies used.an',
    githubLink: 'https://github.com/yourusername/project1',
    projectLink: 'https://yourproject1.com',
  },
  {
    title: 'Project 2',
    description: 'This is a detailed description of Project 2. It focuses on solving a specific problem using modern web development techniques.',
    githubLink: 'https://github.com/yourusername/project2',
    projectLink: 'https://yourproject2.com',
  },
  {
    title: 'Project 2',
    description: 'This is a detailed description of Project 2. It focuses on solving a specific problem using modern web development techniques.',
    githubLink: 'https://github.com/yourusername/project2',
    projectLink: 'https://yourproject2.com',
  },
  {
    title: 'Project 2',
    description: 'This is a detailed description of Project 2. It focuses on solving a specific problem using modern web development techniques.',
    githubLink: 'https://github.com/yourusername/project2',
    projectLink: 'https://yourproject2.com',
  },
  {
    title: 'Project 2',
    description: 'This is a detailed description of Project 2. It focuses on solving a specific problem using modern web development techniques.',
    githubLink: 'https://github.com/yourusername/project2',
    projectLink: 'https://yourproject2.com',
  },
  {
    title: 'Project 2',
    description: 'This is a detailed description of Project 2. It focuses on solving a specific problem using modern web development techniques.',
    githubLink: 'https://github.com/yourusername/project2',
    projectLink: 'https://yourproject2.com',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="py-20" style={{
      background: 'linear-gradient(135deg, #F3E5F5 0%, #E1F5FE 100%)', // Background gradient
    }}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">My Projects</h2>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex justify-between">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 font-semibold">
                  GitHub
                </a>
                <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 font-semibold">
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
