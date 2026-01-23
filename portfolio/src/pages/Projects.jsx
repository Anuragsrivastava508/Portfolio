
import React from 'react'
import { motion } from 'framer-motion'
import { FaBriefcase, FaCode, FaCalendarAlt } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Aneja Transport',
      description: 'Real-time chat application built with MERN stack and Socket.IO | Live on Render',
      image: 'https://via.placeholder.com/400x300',
      tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Material UI'],
      githubUrl: 'https://github.com/Anuragsrivastava508/', 
      liveUrl: 'https://chatifys.onrender.com/',
      category: 'Client Project',
      date: '2025',
    },
    {
        id: 2,
      title: 'EquiPAY',
      description: 'EquiPay is a split expense app that helps users easily track, split, and settle shared expenses fairly among friends, roommates, or groups.',
      image: '',
      tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Material UI'],
      githubUrl: 'https://github.com/Anuragsrivastava508/', 
      liveUrl: "",
      category: ' Project',
      date: '2025',
    },
    {
        id: 3,
      title: 'Cloud-Kitchen-app',
      description: 'Chef Kitchen is a modern and responsive web application built for food lovers to explore chefs and their recipes. The project focuses on clean UI, smooth navigation, and an enjoyable user experience',
      image: 'chief-kitchen-app.',
      tech: ['React.js',"Nextjs","Typescript", 'Tailwind CSS', 'Node.js', 'Material UI'],
      githubUrl: '#', 
      liveUrl: 'https://chief-kitchen-app.vercel.app/',
      category: ' Project',
      date: '2025',
    },

    {
       id: 3,
      title: 'Portfolio-app',
      description: 'Chef Kitchen is a modern and responsive web application built for food lovers to explore chefs and their recipes. The project focuses on clean UI, smooth navigation, and an enjoyable user experience',
      image: 'chief-kitchen-app.',
      tech: ['HTML5,CSS3,JAVASCRIPT,Martial UI'],
      githubUrl: '', 
      liveUrl: 'https://anuragsrivastava508.github.io/anurag.portfolio/',
      category: ' Project',
      date: '2025',
    },
  ]
  return (
        <section
          id="projects-section"
          className="py-24 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-black dark:via-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100 relative overflow-hidden"
        >
          {/* Background Blur */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl -mr-36 -mt-36" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl -ml-48 -mb-48" />
    
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            {/* Header */}
            <div className="text-center mb-20">
               <span className="inline-block px-4 py-2 bg-blue-500/10 rounded-full text-blue-500 dark:text-blue-400 font-semibold text-sm mb-4 backdrop-blur transition-all duration-300 hover:bg-blue-500/20 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer">
                 PROJECT
              </span>
                
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 transition-all duration-300 hover:scale-105 hover:text-blue-600 dark:hover:text-blue-400">
                 My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition-all duration-500">Project section</span>
               </h2>
               <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-all duration-300 hover:text-gray-700 dark:hover:text-gray-300 hover:scale-105">
               A showcase of my recent work and development projects, highlighting my skills and learning journey.
               </p>
            </div>
       </div>    
       
         {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <a href={project.githubUrl} className="flex-1 px-3 py-2 bg-gray-800 text-white text-center rounded hover:bg-gray-700 transition">
                      GitHub
                    </a>
                    <a href={project.liveUrl} className="flex-1 px-3 py-2 bg-blue-600 text-white text-center rounded hover:bg-blue-700 transition">
                      Live
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
    );
};

export default Projects;