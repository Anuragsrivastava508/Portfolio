import React from 'react'
import { FaBriefcase, FaCode, FaCalendarAlt } from "react-icons/fa";
    //   <section
    //   id="experience-section"
    //   className="py-24 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-black dark:via-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100 relative overflow-hidden"
    // >
    //   {/* Background Effects */}
    //   <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl -mr-36 -mt-36" />
    //   <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl -ml-48 -mb-48" />

    //   <div className="max-w-7xl mx-auto px-4 relative z-10">
    //     {/* Header */}
    //     <div className="text-center mb-20">
    //       <span className="inline-block px-4 py-2 bg-blue-500/10 rounded-full text-blue-500 dark:text-blue-400 font-semibold text-sm mb-4 backdrop-blur transition-all duration-300 hover:bg-blue-500/20 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer">
    //         📚 EDUCATION & QUALIFICATIONS
    //       </span>
    //       <h2 className="text-4xl sm:text-5xl font-bold mb-6 transition-all duration-300 hover:scale-105 hover:text-blue-600 dark:hover:text-blue-400">
    //         My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition-all duration-500">Learning Journey</span>
    //       </h2>
    //       <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-all duration-300 hover:text-gray-700 dark:hover:text-gray-300 hover:scale-105">
    //         Continuous learning and professional development through formal education and certifications
    //       </p>
    //     </div>
    //      </div>
    //     </section>



const Experience = () => {
  const experiences = [
    {
      role: "Frontend Developer Intern",
      company: "XYZ Tech Solutions",
      duration: "Jan 2025 – Jun 2025",
      description:
        "Worked on React.js applications, implemented responsive UI using Tailwind CSS, and optimized performance.",
    },
    {
      role: "MERN Stack Developer",
      company: "Personal Projects",
      duration: "2024 – Present",
      description:
        "Built full-stack projects using MongoDB, Express, React, and Node.js with authentication and REST APIs.",
    },
    {
      role: "Open Source Contributor",
      company: "GitHub",
      duration: "2024 – Present",
      description:
        "Contributed to open-source repositories, fixed bugs, and improved documentation.",
    },
  ];

  return (
    <section
      id="experience-section"
      className="py-24 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-black dark:via-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100 relative overflow-hidden"
    >
      {/* Background Blur */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl -mr-36 -mt-36" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
           <span className="inline-block px-4 py-2 bg-blue-500/10 rounded-full text-blue-500 dark:text-blue-400 font-semibold text-sm mb-4 backdrop-blur transition-all duration-300 hover:bg-blue-500/20 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer">
              EXPERIENCE
          </span> <FaBriefcase />
            
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 transition-all duration-300 hover:scale-105 hover:text-blue-600 dark:hover:text-blue-400">
             My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition-all duration-500">Work Experience</span>
           </h2>
           <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-all duration-300 hover:text-gray-700 dark:hover:text-gray-300 hover:scale-105">
             Practical experience gained through internships, projects, and continuous learning.
           </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-white-900 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-red-200/50 dark:border-red-700/50 hover:-translate-y-1"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <FaCode className="text-blue-500" />
                  {exp.role}
                </h3>
                <span className="flex items-center gap-2 text-sm text-black dark:text-gray-400 mt-2 sm:mt-0">
                  <FaCalendarAlt /> {exp.duration}
                </span>
              </div>

              <h4 className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                {exp.company}
              </h4>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
};

export default Experience;
