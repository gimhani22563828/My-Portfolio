import React from "react";
import { motion } from "framer-motion";
import HeroImage from "../assets/mypic2.png";
import CV from "../assets/J.M.K. Poornima Gimhani CV.pdf";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

// Define motion variants
const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeInOut" } },
};

const iconVariants = {
  hover: { scale: 1.2, rotate: 10 },
};

const Hero = () => {
  return (
    <div className="bg-gray-900 text-white py-24" id="home">
      <div className="container mt-10 mx-auto px-6  flex flex-col-reverse md:flex-row items-center justify-between">
        
        <motion.div
          className="flex-1 text-center md:text-left mb-8 md:mb-0"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-col gap-3">
            <h4 className="text-lg font-normal text-gray-300 mb-24">WELCOME TO MY WORLD</h4>
            <h1 className="text-4xl font-bold">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                POORNIMA GIMHANI
              </span>
            </h1>
            <h2 className="text-3xl font-semibold mt-5">Full-Stack Developer</h2>
            <p className="mt-5  text-gray-300 text-xl">
              I am a passionate full-stack developer with a focus on building modern and responsive web applications. With a strong foundation in both frontend and backend technologies, 
              I strive to create seamless and efficient user experiences.
            </p>
            <div className="mt-5">
              <h4 className="text-lg font-normal text-gray-300 mb-5">FIND ME IN</h4>
              <div className="flex justify-center md:justify-start gap-6">
                  <motion.div
                      whileHover={iconVariants.hover}
                        className="p-3 border-2 border-green-400 rounded-full hover:bg-gray-800 hover:border-white"
                  >
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF className="text-1xl text-green-400 hover:text-white" />
                    </a>
                  </motion.div>
                  <motion.div
                      whileHover={iconVariants.hover}
                         className="p-3 border-2 border-green-400 rounded-full hover:bg-gray-800 hover:border-white"
                  >
                    <a href="https://github.com/gimhani22563828" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-1xl text-green-400 hover:text-white" />
                    </a>
                  </motion.div>
                  <motion.div
                       whileHover={iconVariants.hover}
                          className="p-3 border-2 border-green-400 rounded-full hover:bg-gray-800 hover:border-white"
                  >
                    <a href="https://www.linkedin.com/in/poornima-gimhani-778b7b313/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn className="text-1xl text-green-400 hover:text-white" />
                    </a>
                  </motion.div>
              </div>

            </div>
            <div className="mt-8 space-x-4">
              <motion.a
                href={CV}
                download
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 px-4 py-2 rounded-full"
              >
                Download CV
              </motion.a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.img
            src={HeroImage}
            alt="Poornima Gimhani"
            className="w-50 h-50 md:w-100 transform transition-transform duration-300 hover:scale-105"
            whileHover={{ scale: 1.05, rotate: 5 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
