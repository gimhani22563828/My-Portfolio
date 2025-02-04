import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  // Function to scroll the page to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-950 text-white py-8 relative">
      <div className="container mx-auto px-8 md:px-16 ">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full py-10">
            <p className="text-center text-gray-500 text-base">
              &copy; {new Date().getFullYear()} All rights reserved by Poornima Gimhani. Privacy Terms of Service
            </p>
          </div>
          <div className="flex space-x-4 my-4 md:my-0">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaLinkedin />
            </a>
            <a href="https://github.com/gimhani22563828" className="text-gray-400 hover:text-white">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      
      <button
        onClick={scrollToTop}
        className="absolute bottom-4 right-4 bg-gray-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
