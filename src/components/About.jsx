import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import AboutImage from '../assets/about.png'; 
import { FaHtml5, FaJsSquare, FaReact,FaJava, FaNode } from 'react-icons/fa'; 
import { SiTailwindcss } from 'react-icons/si'; 

const About = () => {
  // Framer Motion Variants for the reveal animation
  const imageVariants = {
    hidden: { opacity: 0, x: 50 }, 
    visible: {
      opacity: 1,
      x: 0, 
      transition: {
        duration:1, 
        ease: 'easeInOut', 
      },
    },
  };

  return (
    <div className="bg-gray-950 text-white py-20" id="about">
      <div className="container mt-10 mx-auto px-8 md:px-16 ">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col-reverse md:flex-row items-center md:space-x-6"> {/* Reduced space-x */}
          {/* Text Section */}
          <div className="flex-1 mb-8 ">
            <p className="text-lg mb-8 mt-8"> 
            Hi there! I'm an undergraduate Information Technology student and a passionate Full-Stack Developer who loves creating functional, efficient, and user-friendly digital experiences. I enjoy designing seamless interfaces and building powerful backends that bring ideas to life.<br></br><br></br>
            I'm constantly exploring new technologies and sharpening my skills to stay ahead in the fast-evolving tech world. Whether collaborating with a team or working independently, I strive to deliver high-quality, impactful solutions.<br></br>
            Beyond coding, I stay inspired by new trends, take on side projects that challenge me to grow, and enjoy exploring fresh ideas. If you're looking for a creative, hardworking, and dedicated developer, let's connect!
            </p>

            {/* Skills Section */}
            <div className="space-y-6"> {/* Reduced space-y */}
              <h4 className="texHi there! I'm an undergraduate Information Technology student and a passionate Full-Stack Developer who loves creating functional, efficient, and user-friendly digital experiences. I enjoy designing seamless interfaces and building powerful backends that bring ideas to life.

I’m constantly exploring new technologies and sharpening my skills to stay ahead in the fast-evolving tech world. Whether collaborating with a team or working independently, I strive to deliver high-quality, impactful solutions.

Beyond coding, I stay inspired by new trends, take on side projects that challenge me to grow, and enjoy exploring fresh ideas. If you're looking for a creative, hardworking, and dedicated developer, let’s connect!t-lg font-normal text-gray-300 mb-6">BEST SKILL ON</h4> {/* Reduced margin */}
              <div className="space-y-4"> {/* Reduced vertical spacing */}
                <div className="flex items-center space-x-4">
                  <FaHtml5 className="text-orange-500 text-2xl" />
                  <label htmlFor="htmlandcss" className="w-2/12 text-lg font-medium text-gray-200">
                    HTML & CSS
                  </label>
                  <div className="flex-grow bg-gray-800 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full w-10/12 transform transition-transform duration-300 hover:scale-105"
                    ></div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <FaJsSquare className="text-yellow-500 text-2xl" />
                  <label htmlFor="javascript" className="w-2/12 text-lg font-medium text-gray-200">
                    JavaScript
                  </label>
                  <div className="flex-grow bg-gray-800 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full w-9/12 transform transition-transform duration-300 hover:scale-105"
                    ></div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <FaReact className="text-blue-400 text-2xl" />
                  <label htmlFor="reactjs" className="w-2/12 text-lg font-medium text-gray-200">
                    React JS
                  </label>
                  <div className="flex-grow bg-gray-800 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full w-11/12 transform transition-transform duration-300 hover:scale-105"
                    ></div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <FaNode className="text-blue-400 text-2xl" />
                  <label htmlFor="reactjs" className="w-2/12 text-lg font-medium text-gray-200">
                    Node JS
                  </label>
                  <div className="flex-grow bg-gray-800 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full w-9/12 transform transition-transform duration-300 hover:scale-105"
                    ></div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <FaJava className="text-red-500 text-2xl" /> 
                  <label htmlFor="java" className="w-2/12 text-lg font-medium text-gray-200">
                     Java
                  </label>
                  <div className="flex-grow bg-gray-800 rounded-full h-2.5">
                     <div
                       className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full w-11/12 transform transition-transform duration-300 hover:scale-105"
                     ></div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <SiTailwindcss className="text-teal-400 text-2xl" />
                  <label htmlFor="tailwindcss" className="w-2/12 text-lg font-medium text-gray-200">
                    TailwindCSS
                  </label>
                  <div className="flex-grow bg-gray-800 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full w-8/12 transform transition-transform duration-300 hover:scale-105"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section with Reveal Animation */}
          <motion.div
            className="flex justify-center md:justify-end flex-1"
            variants={imageVariants} // Apply animation
            initial="hidden" 
            whileInView="visible" 
            viewport={ true } // Trigger animation only once
          >
            <img
              src={AboutImage}
              alt="Poornima Gimhani"
              className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain transform transition-transform duration-300 hover:scale-105"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
