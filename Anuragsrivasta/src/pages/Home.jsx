import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Instagram,
  GraduationCap ,
  Code,
  User,
} from "lucide-react";
import { motion } from "framer-motion";
import Footer from "../components/Footer.jsx";

// ✅ Image import (path apne project ke hisaab se)

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900/20 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Hero Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col lg:flex-row items-center justify-between py-20"
          >
            {/* Left */}
            <div className="lg:w-2/3 lg:pr-12 mb-12 lg:mb-0">
              <motion.div variants={itemVariants} className="mb-6">
                <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                  👋 Welcome to my portfolio
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
              >
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Yash Johari
                </span>
              </motion.h1>

              <motion.h2
                variants={itemVariants}
                className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-6"
              >
                Full Stack Developer
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed"
              >
                Passionate Full Stack Developer specializing in React.js,
                Node.js, and modern web technologies.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/projects"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:scale-105 transition"
                >
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>

                <button
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/uc?id=1_7aDywPK39EUDc1_AJNk7uS15c6DfqY0&export=download",
                      "_blank"
                    )
                  }
                  className="inline-flex items-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:border-blue-500 hover:text-blue-600 transition"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </button>
              </motion.div>
            </div>

            {/* Right */}
            {/* <motion.div variants={itemVariants} className="lg:w-1/3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <div className="relative bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full p-8">
                  <img
                    src={yashJohariImage}
                    alt="Yash Johari"
                    className="w-48 h-48 lg:w-64 lg:h-64 rounded-full object-cover mx-auto shadow-2xl"
                  />
                </div>
              </div>
            </motion.div> */}
          </motion.div>

          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold flex justify-center items-center gap-2">
                <User className="text-blue-600" />
                About Me
              </h2>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-4xl mx-auto text-center">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
            I’m a passionate Frontend and Backend Developer, currently learning and building projects with the MERN stack. I enjoy creating responsive user interfaces on the frontend and developing efficient server-side logic on the backend. I’m focused on improving my skills through hands-on projects and continuously learning modern web technologies.
              </p>
            </div>
          </motion.div>

          
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
                <GraduationCap className="h-8 w-8 mr-3 text-blue-600 dark:text-blue-400" />
                Education
              </h2>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Bachelor of Computer Applications (BCA)
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-4">
                 Mahatma Gandhi Kashi Vidyapeeth University{" "}
                  {/* Replace with actual university */}
                </p>
                <div className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium mb-4">
                  <GraduationCap className="h-4 w-4 mr-2" />
                  Graduated
                </div>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  Comprehensive program covering computer science fundamentals,
                  programming languages, software development, database
                  management, and web technologies.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold flex justify-center items-center gap-2">
                <Code className="text-blue-600" />
                Core Skills
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {["React", "Node", "JavaScript", "Express", "PostgreSQL", "HTML/CSS"].map(
                (skill) => (
                  <div
                    key={skill}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center font-semibold"
                  >
                    {skill}
                  </div>
                )
              )}
            </div>
          </div>

          {/* Social */}
          <div className="text-center mb-20">
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
            <div className="flex justify-center gap-6">
              <a href="https://github.com/" target="_blank"><Github /></a>
              <a href="https://linkedin.com/" target="_blank"><Linkedin /></a>
              <a href="https://instagram.com/" target="_blank"><Instagram /></a>
              <a href="mailto:test@gmail.com"><Mail /></a>
            </div>
          </div>
 <div className="max-w-4xl mx-auto">
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                I design and develop digital experiences that create real impact. Whether it’s a startup building its first product or a growing business upgrading its online presence, I bring ideas to life with clean code, modern design, and a strong focus on user experience.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  1+ Years Experience
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  20+ Projects Completed
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                  100% Client Satisfaction
                </div>
              </div>
              </div>
        </div>
      </div>


    </>
  );
};

export default Home;
