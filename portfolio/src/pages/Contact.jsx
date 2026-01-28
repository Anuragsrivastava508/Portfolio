import React, { useState } from "react";

import {
  FaLocationDot,
  FaEnvelope,
  FaPhone,
  FaClock,
  FaGlobe,
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const contactInfo =[
     {
      icon: FaEnvelope,
      label: 'Email',
      value: 'anuragsrivastava8874@gmail.com',
      href: 'mailto:anuragsrivastava8874@gmail.com',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '91 9335267246',
      href: 'tel:+9335267246',
    },
    {
      icon: FaLocationDot,
      label: 'location',
      value: 'Varanasi,Uttar Pardesh ,India',
      href: '',
    },
  ]
  const SocialLinks =[
                  {
                    icon: <FaLinkedinIn />,
                    link: "https://linkedin.com/in/anuragshrivastava06",
                    color: "bg-blue-500/20 hover:bg-blue-500",
                  },
                  {
                    icon: <FaGithub />,
                    link: "https://github.com/anuragsrivastava508",
                    color: "bg-gray-500/20 hover:bg-gray-700",
                  },
                  {
                    icon: <FaEnvelope />,
                    link: "mailto:anuragsrivastava8874@gmail.com",
                    color: "bg-red-500/20 hover:bg-red-500",
                  },
                  
                ]

  return (
    <div className="flex"> <section
      id="contact-section"
      className="py-24  bg-gray-800 text-gray-200 via-gray-50 to-gray-100 dark:from-black dark:via-gray-900 dark:to-gray-800 dark:text-gray-100 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -mr-36 -mt-36" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-blue-500/10 rounded-full text-blue-500 dark:text-blue-400 font-semibold text-sm mb-4 backdrop-blur transition-all duration-300 hover:bg-blue-500/20 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer">
            GET IN TOUCH
          </span>
         <h2 className="text-4xl sm:text-5xl font-bold mb-6 transition-all duration-300 hover:scale-105 hover:text-blue-600 dark:hover:text-blue-400">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition-all duration-500">Contact us</span>
          </h2>
           <p className="text-lg text-white dark:text-blue-500 max-w-2xl mx-auto transition-all duration-300 hover:text-blue-500 dark:hover:text-blue-800 hover:scale-105">
           Have a question or want to work together? Drop me a message anytime!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* LEFT SIDE */}
           {/* Contact Information */}
            <div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              {/* Contact Details */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 lg:p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div
                      key={info.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full flex items-center justify-center mr-4">
                        <info.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {info.label}
                        </p>
                        <a
                          href={info.href}
                          className="text-gray-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                
              </div>

            {/* Social Links */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 lg:p-8">
              <p className=" text-black font-semibold mb-4">Follow Us</p>
              <p className="text-black dark:text-gray-300 mb-4">
                Follow me on social media for updates on my latest projects and tech insights.</p>
              <div className="flex gap-4">
                {[
                  {
                    icon: <FaLinkedinIn />,
                    link: "https://linkedin.com/in/anuragshrivastava06",
                    color: "bg-blue-500/20 hover:bg-blue-500",
                  },
                  {
                    icon: <FaGithub />,
                    link: "https://github.com/anuragsrivastava508",
                    color: "bg-gray-500/20 hover:bg-gray-700",
                  },
                  {
                    icon: <FaEnvelope />,
                    link: "mailto:anuragsrivastava8874@gmail.com",
                    color: "bg-red-500/20 hover:bg-red-500",
                  },
                  
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`h-14 w-14 rounded-xl ${social.color} text-xl text-gray-700 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            {/* Resume */}
           {/* Resume */}
            <div className="bg-white border border-blue-500 dark:bg-gray-800 rounded-xl shadow-lg p-6 lg:p-8">
               <p className="text-black font-semibold mb-2">
                   Download My Resume
                </p>

                  <p className="text-black dark:text-gray-300 mb-4 ">
                     Get a detailed overview of my professional experience, technical skills,
                       and educational background.
                    </p>

                    <a
                    href="/resume.pdf"
                    download
                     className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium
                       text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                       >
                        <button type="button" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                >  Download Resume </button>
                        
                  </a>
                    </div>

                        </div>

          {/* RIGHT SIDE FORM */}
               
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 lg:p-8">
                   <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                 Send Me a Message
                </h2>
              <form className="bg-white dark:bg-gray-800/50 p-10 rounded-2xl shadow-xl space-y-6">
      
           <div>
                    <label
                      htmlFor="Fullname"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                     Full Name 
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-3 rounded-xl bg-gray-100 dark:bg-gray-900 focus:ring-2 focus:ring-primary outline-none resize-none"
                      placeholder="Enter your name"
                    />
                  </div>
          
                <div>
                   <label htmlFor="emil"
                   className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                   </label>
                    <input type="email"
                     name="email" 
                     id="email" 
                     placeholder="Email.Address"
                       value={formData.email}
                          onChange={handleChange}
                           className="w-full px-5 py-3 rounded-xl bg-gray-100 dark:bg-gray-900 focus:ring-2 focus:ring-primary outline-none resize-none"
                      />
                </div>

                 <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-5 py-3 rounded-xl bg-gray-100 dark:bg-gray-900 focus:ring-2 focus:ring-primary outline-none resize-none"
                      placeholder="What's this about?"
                    />
                  </div>
                  <div>
                    <label htmlFor="your message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Message</label>
                    <textarea name="Message" 
                    id="message" 
                    rows="10"
                    placeholder="Your message "
                     value={formData.message}
                      onChange={handleChange}
                    className="w-full px-5 py-3 rounded-xl bg-gray-100 dark:bg-gray-900 focus:ring-2 focus:ring-primary outline-none resize-none"></textarea>
                  </div>
          
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all"
            >
              Send Message <FaPaperPlane />
            </button>

            <p className="text-xs text-center text-gray-500">
              I'll get back to you within 24 hours.
            </p>
              </form>
                </div>
          
        </div>
      </div>

    </section>

    </div>
    
  );
 
};


export default Contact;
