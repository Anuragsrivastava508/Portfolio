import React from 'react'
import Footer from '../components/Footer'
import { FaGraduationCap, FaBook, FaTrophy, FaExternalLinkAlt } from 'react-icons/fa'

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Computer Application",
      field: "Computer Science",
      institution: "Mahatma Gandhi Kashi Vedyapeeth",
      year: "2023 - 2026",
      gpa: "7.5/10",
      description: "Specialized in Software Development",
      skills: ["DSA", "Web Dev", "Frontend dev " , "Backend Dev" , "MERN" , "Cloud Computing"],
      icon: FaGraduationCap
    },
    {
      degree: "Intermidate ",
      field: "Science Stream",
      institution: "BAL BHARITYA ENGLISH SCHOOL",
      year: "2022 - 2023",
      gpa: "6.19%",
      description: "Physics, Chemistry, Mathematics, English",
      skills: ["Physics", "Chemistry", "Mathematics"],
      icon: FaBook
    },
    {
      degree: "High School",
      field: "Science Stream",
      institution: "BAL BHARITYA ENGLISH SCHOOL",
      year: "2020 - 2021",
      gpa: "7.35%",
      description: "Physics, Chemistry, Mathematics,English,Computer",
      skills: ["Physics", "Chemistry", "Mathematics", "English",
        "Computer"],
      icon: FaBook
    }
  ]

  const certifications = [
    {
      title: "AWS Certified Associate",
      issuer: "Amazon Web Services",
      date: "2023",
      badge: "🏅",
      link: "https://aws.amazon.com/certification/"
    },
    {
      title: "Google Cloud Professional",
      issuer: "Google Cloud",
      date: "2023",
      badge: "☁️",
      link: "https://cloud.google.com/certification"
    },
    {
      title: "React Advanced",
      issuer: "Udemy",
      date: "2024",
      badge: "⚛️",
      link: "https://www.udemy.com"
    },
    {
      title: "Frontend Developer",
      issuer: "HackerRank",
      date: "2024",
      badge: "🎨",
      link: "https://www.hackerrank.com/certificates/frontend"
    },
    {
      title: "API Mastery",
      issuer: "Postman",
      date: "2024",
      badge: "🔌",
      link: "https://www.postman.com/certifications/"
    },
    {
      title: "Backend Developer",
      issuer: "HackerRank",
      date: "2024",
      badge: "⚙️",
      link: "https://www.hackerrank.com/certificates/backend"
    },
    {
      title: "MongoDB Developer",
      issuer: "MongoDB University",
      date: "2024",
      badge: "🍃",
      link: "https://learn.mongodb.com/"
    }
  ]

  return (
    <section
      id="education-section"
      className="py-24  bg-gray-800 text-gray-900 dark:to-gray-800  dark:text-gray-100 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl -mr-36 -mt-36" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-blue-500/10 rounded-full text-blue-500 dark:text-blue-400 font-semibold text-sm mb-4 backdrop-blur transition-all duration-300 hover:bg-blue-500/20 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer">
            📚 EDUCATION & QUALIFICATIONS
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 transition-all duration-300 hover:scale-105 hover:text-blue-600 dark:hover:text-blue-400">
        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition-all duration-500">Learning Journey</span>
          </h2>
          {/* <p className="text-lg text-white dark:text-blue-500 max-w-2xl mx-auto transition-all duration-300 hover:text-blue-500 dark:hover:text-blue-800 hover:scale-105">
            Continuous learning and professional development through formal education and certifications
          </p> */}
        </div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="group relative bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700/50 hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105 hover:-translate-y-1 hover:bg-gradient-to-br hover:from-blue-50/50 dark:hover:from-blue-900/20 hover:to-purple-50/50 dark:hover:to-purple-900/20"
            >
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-1 h-12 bg-gradient-to-b from-purple-500/20 to-transparent rounded-l" />

              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  <FaGraduationCap className="text-blue-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                  <p className="text-blue-500 dark:text-blue-400 font-semibold text-sm">{edu.field}</p>
                </div>
              </div>

              <div className="mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                <p className="text-gray-700 dark:text-gray-300 font-medium mb-1">{edu.institution}</p>
                <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                  <span>{edu.year}</span>
                  <span className="px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full font-semibold">
                    GPA: {edu.gpa}
                  </span>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{edu.description}</p>

              <div className="flex flex-wrap gap-2">
                {edu.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-300 rounded-full text-xs font-medium transition-all duration-300 hover:bg-blue-500/30 dark:hover:bg-blue-500/40 hover:shadow-lg hover:shadow-blue-400/30 hover:scale-110 cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-2 text-white">Professional Certifications</h3>
            <p className="text-white dark:text-white">Industry-recognized credentials</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {certifications.map((cert, idx) => (
              <a
                key={idx}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700/50 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 text-center cursor-pointer hover:border-blue-500/50 dark:hover:border-blue-400/50 hover:scale-110 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-blue-50/80 dark:hover:from-blue-900/30 hover:to-purple-50/80 dark:hover:to-purple-900/30"
              >
                <div className="text-4xl mb-3 transform group-hover:scale-125 transition-transform">{cert.badge}</div>
                <h4 className="font-bold text-lg mb-1 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">{cert.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{cert.issuer}</p>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-blue-500 dark:text-blue-400 font-semibold">{cert.date}</p>
                  <FaExternalLinkAlt className="text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors text-xs" />
                </div>
              </a>
            ))}
          </div>
        </div>
          
      </div>
      <Footer/>
    </section>
  
  )
};

export default Education;