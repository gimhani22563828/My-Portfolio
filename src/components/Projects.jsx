import React from 'react'
import MernImage from "../assets/mern.png";
import javaImage from "../assets/java.png";
import AirlineImage from "../assets/Airline.png";
import MobileImage from "../assets/mobile.jpg";



const projects = [
  {
    id: 1,
    name: "Smart TechHub Management System",
    technologies: "MongoDB,Express.js,React,Node.js,JavaScript,Postman API",
    image: MernImage,
    github: "https://github.com/gimhani22563828/ITP-Project",
  },
  {
    id: 2,
    name: "Hospital Management System",
    technologies: "Java,HTML,CSS,MySQL,Tomcat",
    image: javaImage,
    github: "https://github.com/gimhani22563828/Hospital-Management-System",
  },
  {
    id: 3,
    name: "Airline Ticket Reservation System",
    technologies: "HTML,CSS,javaScript,PHP,MySQL",
    image: AirlineImage,
    github: "https://github.com/gimhani22563828/AirLine-Ticket-Reservation-System.git",
  },
  {
    id: 4,
    name: "Task Mobile App",
    technologies: "Kotlin",
    image: MobileImage,
    github: "https://github.com/gimhani22563828/Mad-Lab04",
  },
  
  
];

const Projects = () => {
  return (
    <div className="bg-gray-950 text-white py-20" id="project">
      <div className="container mt-6 mx-auto px-8 md:px-16 ">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-900 p-6 rounded-lg border-2 border-blue-400 hover:shadow-lg 
                transform transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-400 mb-4">{project.technologies}</p>
                <a
                  href={project.github}
                  className="inline-block bg-gradient-to-r 
                  from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;