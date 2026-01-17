
import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section
      id="contact-section"
      className="py-24 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-black dark:via-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100 relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -mr-36 -mt-36"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* HEADER */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full text-primary font-semibold text-sm mb-4">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 mb-6">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a question or want to work together? I'd love to hear from you. Drop me a message anytime!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* LEFT – CONTACT INFO */}
          <div className="space-y-8">
            <div className="relative">
              <div className="space-y-6">
                {/* Location */}
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 dark:bg-primary/20 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-all duration-300">
                      <i className="fa-solid fa-location-dot text-primary text-lg"></i>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold mb-1">Location</h3>
                    <p className="text-gray-600 dark:text-gray-400">123 Lorem ipsum dolor sit amet, CA 98765432</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 dark:bg-primary/20 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-all duration-300">
                      <i className="fa-solid fa-envelope text-primary text-lg"></i>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <a 
                      href="mailto:anuragsrivastava8874@gmail.com"
                      className="text-primary hover:text-primary/80 transition-colors duration-300 font-medium"
                    >
                      anuragsrivastava8874@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 dark:bg-primary/20 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-all duration-300">
                      <i className="fa-solid fa-phone text-primary text-lg"></i>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <a 
                      href="tel:+919336267246"
                      className="text-primary hover:text-primary/80 transition-colors duration-300 font-medium"
                    >
                      +91 9336267246
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 dark:bg-primary/20 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-all duration-300">
                      <i className="fa-solid fa-clock text-primary text-lg"></i>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold mb-1">Working Hours</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-1">Monday – Friday: 9:00 AM – 10:00 PM</p>
                    <p className="text-gray-600 dark:text-gray-400">Sunday: Closed</p>
                  </div>
                </div>

                {/* Website */}
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 dark:bg-primary/20 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-all duration-300">
                      <i className="fa-solid fa-globe text-primary text-lg"></i>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold mb-1">Website</h3>
                    <a 
                      href="https://www.chefskitchen.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors duration-300 font-medium"
                    >
                      www.chefskitchen.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">Follow Us</p>
              <div className="flex gap-4 flex-wrap">
                <a 
                  href="https://linkedin.com/in/anuragshrivastava06" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-14 w-14 rounded-xl bg-blue-500/20 hover:bg-blue-500 text-blue-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
                  title="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin text-xl"></i>
                </a>
                <a 
                  href="https://github.com/anuragsrivastava508" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-14 w-14 rounded-xl bg-black-700/20 hover:bg-gray-700 text-gray-700 dark:text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg dark:hover:bg-gray-600"
                  title="GitHub"
                >
                  <i className="fa-brands fa-github text-xl"></i>
                </a>
                <a 
                  href="mailto:anuragsrivastava8874@gmail.com"
                  className="h-14 w-14 rounded-xl bg-red-500/20 hover:bg-red-500 text-red-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
                  title="Email"
                >
                  <i className="fa-solid fa-envelope text-xl"></i>
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-14 w-14 rounded-xl bg-sky-400/20 hover:bg-sky-400 text-sky-500 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
                  title="Twitter"
                >
                  <i className="fa-brands fa-twitter text-xl"></i>
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-14 w-14 rounded-xl bg-pink-500/20 hover:bg-pink-500 text-pink-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
                  title="Instagram"
                >
                  <i className="fa-brands fa-instagram text-xl"></i>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT – CONTACT FORM */}
          <div>
            <form className="space-y-6 bg-white dark:bg-gray-800/50 backdrop-blur-sm p-8 sm:p-10 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700/50 hover:shadow-2xl transition-shadow duration-300">
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-6 py-3 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:text-white placeholder-gray-400 transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-6 py-3 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:text-white placeholder-gray-400 transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  rows={5}
                  className="w-full px-6 py-3 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:text-white placeholder-gray-400 resize-none transition-all duration-300"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Send Message</span>
                <i className="fa-solid fa-paper-plane group-hover:translate-x-1 transition-transform duration-300"></i>
              </button>

              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                I'll get back to you within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;