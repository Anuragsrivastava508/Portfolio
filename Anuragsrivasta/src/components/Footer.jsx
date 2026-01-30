import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: "https://github.com/anuragsrivastava508",
      color: 'hover:text-gray-600 dark:hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/anuragshrivastava06',
      color: 'hover:text-blue-600 dark:hover:text-blue-400'
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      url: 'https://twitter.com',
      color: 'hover:text-blue-400 dark:hover:text-blue-300'
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      url: 'mailto:anuragsrivastava8874@gmail.com',
      color: 'hover:text-red-500 dark:hover:text-red-400'
    }
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Portfolio</h3>
            <p className="text-sm text-gray-400 hover:text-blue-500 content-start  leading-relaxed">
              A passionate developer showcasing projects and experiences. Let's build something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-500 transition duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-2xl text-gray-400 transition duration-300 ${link.color}`}
                    aria-label={link.name}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className=" text-center h-8 text-sm text-gray-400">
          <p>&copy; {currentYear} Anurag Srivastava. All rights reserved
             Designed with <span className="text-red-500">❤</span></p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
