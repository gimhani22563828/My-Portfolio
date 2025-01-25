import React from 'react'

import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div
          className=" flex flex-col md:flex-row 
          justify-between items-center"
        >
           <div className="w-full py-10">
           <p className="text-center text-gray-500 text-base">
              &copy; {new Date().getFullYear()} All rights reserved by Poornima Gimhani. Privacy Terms of Service
              </p>
           </div>
          <div className="flex space-x-4 my-4 md:my-0">
            <a href="#" className="gray-400 hover:text-white">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaLinkedin />
            </a>
            <a href="https://github.com/gimhani22563828" className="text-gray-400 hover:text-white">
              <FaGithub />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
             
            </a>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
