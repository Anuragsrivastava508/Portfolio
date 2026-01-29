import React from 'react'
import { motion } from 'framer-motion';

const Skill = () => {
const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React.js / Next.js', level: 85 },
        { name: 'JavaScript', level: 88 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 85 },
        { name: 'Tailwind CSS', level: 80 },
        { name: 'Responsive Design', level: 92 },
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'Express.js', level: 72 },
        { name: 'PostgreSQL', level: 40 },
        { name: 'RESTful APIs', level: 45 },
        { name: 'EJS', level: 75 },
        { name: 'Axios', level: 85 },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'npm/yarn', level: 70 },
        { name: 'Postman', level: 70 },
        { name: 'Chrome DevTools', level: 75 },
        { name: 'Figma', level: 60 },
      ],
    },
  ];
    return (
    <section
      id="skill-section"
      className="py-24  bg-gray-800 text-gray-200 via-gray-50 to-gray-100 dark:from-black dark:via-gray-900 dark:to-gray-800 dark:text-gray-100 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -mr-36 -mt-36" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
         <h2 className="text-4xl sm:text-5xl font-bold mb-6 transition-all duration-300 hover:scale-105 hover:text-blue-600 dark:hover:text-blue-400">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition-all duration-500">Skill</span>
          </h2>
           <p className="text-lg text-white dark:text-blue-500 max-w-2xl mx-auto transition-all duration-300 hover:text-blue-500 dark:hover:text-blue-800 hover:scale-105">
           A comprehensive overview of my technical expertise and proficiency levels!
          </p>
     
        </div>
    </div>
    <div className="grid lg:grid-cols-3 gap-8 mb-16"> 
{skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5, duration: 1 }}
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
    </section>
  )
}

export default Skill;