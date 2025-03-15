import React from 'react';

const projects = [
  {
    title: 'Excel-Based Email ID Auto-Creation System',
    description: 'The Auto Email ID Creation project automates email generation by uploading an Excel file with employee details. It maps data to customizable email formats, ensures error handling, and prevents duplicates. Built with Django, it efficiently handles backend processes for fast and accurate email creation. More details are available on GitHub.',
    githubLink: 'https://github.com/aghattikar82/autocreation',
    projectLink: 'aghattikar82.pythonanywhere.com',
  },
  {
    title: 'Instant Time Zone Converter for Seamless Global Scheduling',
    description: 'The TimeZone Converter simplifies time conversions across different zones with an intuitive, user-friendly interface. Enter a time, select time zones, and get instant results. It automatically adjusts for Daylight Saving Time, ensuring accurate, real-time conversions. Perfect for global teams and remote work, this Django-powered tool makes scheduling across regions effortless. Explore more on the GitHub.',
    githubLink: 'https://github.com/aghattikar82/timezone-converter',
    projectLink: 'https://timezone-converter-five.vercel.app/',
  },
  {
    title: 'Training Scheduler: Simple and Efficient Course Management',
    description: 'The Training Scheduler streamlines course planning by automating schedules, dates, and time zone adjustments. Users can easily set training details and generate a clear schedule, making coordination across regions effortless. Built with Django, it ensures efficient and organized course management. Check the GitHub repository for more details..',
    githubLink: 'https://github.com/aghattikar82/Training_Scheduler',
    projectLink: 'https://trainingscheduler.vercel.app/',
  },
  {
    title: 'Comprehensive School Management System for Streamlined Administration',
    description: 'The School Management System simplifies the administration of educational institutions by managing student records, fees, attendance, and academic performance. With an intuitive dashboard, the system allows school staff to track and update student data, generate reports, and handle day-to-day operations efficiently. Built using Django, the system offers scalability and flexibility for schools of all sizes, enhancing the overall management process. Discover more on the GitHub repository..',
    githubLink: 'https://github.com/aghattikar82/school-management',
    projectLink: '',
  },
  {
    title: 'Temple Management System: Streamlined Devotee and Event Organization',
    description: 'The Temple Management System is designed to automate the daily operations of temples, including managing devotee information, event scheduling, donations, and services. The system enables temple administrators to keep track of devotees, organize religious events, and maintain donation records with ease. This Django-powered platform simplifies the temple s administrative tasks while enhancing user experience for both devotees and temple staff. Learn more on the GitHub repository.',
    githubLink: 'https://github.com/aghattikar82/temple-management',
    projectLink: '',
  },
  {
    title: 'DX Linux Institute: Professional Training in Computer, Laptop, and Mobile Repair',
    description: 'The DX Linux Institute website showcases professional training programs in computer, laptop, and mobile repair. It provides course details, registration options, and highlights the institute expertise in technical education and repair services. Discover more on the GitHub repository..',
    githubLink: 'https://github.com/aghattikar82/DX-Linux',
    projectLink: 'https://vercel.com/anup-ghattikars-projects/dx-linux',
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
