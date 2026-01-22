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

  return (
    <div> <section
      id="contact-section"
      className="py-24 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-black dark:via-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100 relative overflow-hidden"
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
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-all duration-300 hover:text-gray-700 dark:hover:text-gray-300 hover:scale-105">
            Have a question or want to work together? Drop me a message anytime!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            {/* Info Blocks */}
            {[
              {
                icon: <FaLocationDot />,
                title: "Varanasi",
                content: "C 23 / 74 KABIR CHOURA VARNASI UTTAR PARDEH INDIA",
              },
              {
                icon: <FaEnvelope />,
                title: "Email",
                link: "mailto:anuragsrivastava8874@gmail.com",
                content: "anuragsrivastava8874@gmail.com",
              },
              {
                icon: <FaPhone />,
                title: "Phone",
                link: "tel:+919336267246",
                content: "+91 9336267246",
              },
              {
                icon: <FaClock />,
                title: "Working Hours",
                content: "Mon – Fri: 9:00 AM – 10:00 PM",
              },
              {
                icon: <FaGlobe />,
                title: "Website",
                link: "https://www.chefskitchen.com",
                content: "www.chefskitchen.com",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-lg">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.content}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
              <p className="font-semibold mb-4">Follow Us</p>
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
                  {
                    icon: <FaTwitter />,
                    link: "https://twitter.com",
                    color: "bg-sky-400/20 hover:bg-sky-400",
                  },
                  {
                    icon: <FaInstagram />,
                    link: "https://instagram.com",
                    color: "bg-pink-500/20 hover:bg-pink-500",
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
          </div>

          {/* RIGHT SIDE FORM */}
          <form className="bg-white dark:bg-gray-800/50 p-10 rounded-2xl shadow-xl space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-5 py-3 rounded-xl bg-gray-100 dark:bg-gray-900 focus:ring-2 focus:ring-primary outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-5 py-3 rounded-xl bg-gray-100 dark:bg-gray-900 focus:ring-2 focus:ring-primary outline-none"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-5 py-3 rounded-xl bg-gray-100 dark:bg-gray-900 focus:ring-2 focus:ring-primary outline-none resize-none"
            />

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
    </section>

   

    </div>
    
  );
 
};


export default Contact;
