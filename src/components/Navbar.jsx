import React, { useState } from 'react';
import HeroImage from '../assets/mypic.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full h-20 sticky top-0 z-50 bg-gray-950 text-white mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600 px-4 md:px-8">
      <div className="flex items-center space-x-5 px-2 md:px-0">
        {/* Padding before the logo on mobile */}
        <div className="pr-4 md:pr-2">
          <img
            src={HeroImage}
            alt="Logo"
            className="mx-auto mb-2 w-10 h-10 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="text-2xl font-normal">Poornima Gimhani</div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-10">
        <a href="#home" className="hover:text-gray-400">Home</a>
        <a href="#about" className="hover:text-gray-400">About Me</a>
        <a href="#services" className="hover:text-gray-400">Services</a>
        <a href="#project" className="hover:text-gray-400">Projects</a>
        <a href="#contact" className="hover:text-gray-400">Contact</a>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl">
          &#9776;
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'} absolute top-20 left-0 w-full bg-black text-white p-6 space-y-4`}>
        <a href="#home" className="block hover:text-gray-400" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" className="block hover:text-gray-400" onClick={() => setMenuOpen(false)}>About Me</a>
        <a href="#services" className="block hover:text-gray-400" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="#project" className="block hover:text-gray-400" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#contact" className="block hover:text-gray-400" onClick={() => setMenuOpen(false)}>Contact</a>
        
        <a href="#contact" className="w-full">
        <button
          className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
          onClick={() => setMenuOpen(false)}
        >
          Hire Me
        </button>
        </a>
      </div>
    
      <div className="hidden md:flex items-center space-x-2 pr-4 md:pr-0">
        <a href="#contact">
           <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
            Hire Me
           </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
