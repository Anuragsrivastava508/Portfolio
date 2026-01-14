import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="bg-gray-900 shadow-lg fixed top-0 left-0 right-0 z-50 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-300 cursor-pointer">
              Anurag Srivastava
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-300 relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection('education')}
                className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-300 relative group"
              >
                Education
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-300 relative group"
              >
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-300 relative group"
              >
                Experience
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-300 relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-blue-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-700 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-300 hover:text-blue-400 block px-3 py-2 text-base font-medium transition-colors duration-300 w-full text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className="text-gray-300 hover:text-blue-400 block px-3 py-2 text-base font-medium transition-colors duration-300 w-full text-left"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-300 hover:text-blue-400 block px-3 py-2 text-base font-medium transition-colors duration-300 w-full text-left"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-blue-400 block px-3 py-2 text-base font-medium transition-colors duration-300 w-full text-left"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;