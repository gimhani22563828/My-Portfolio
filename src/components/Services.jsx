import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Services data
const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Creating visually appealing and user-friendly web designs with modern UI/UX principles, responsive layouts, and SEO-friendly structures.",
    fullDescription: "Crafting visually stunning designs that captivate users. My web design services include wireframing, prototyping, UI/UX research, and mobile responsiveness to ensure seamless user experiences.",
    icon: "🌐",
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces using modern technologies like React and TailwindCSS.",
    fullDescription: "I specialize in creating fast, scalable, and dynamic user interfaces with a focus on accessibility and cross-browser compatibility. Utilizing React, TailwindCSS, and advanced JavaScript techniques, I bring designs to life.",
    icon: "💻",
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Developing robust server-side logic and databases to support scalable applications.",
    fullDescription: "Backend development is the backbone of any web application. I work with Node.js, Express, and databases like MongoDB and MySQL to create secure, high-performance applications with RESTful APIs.",
    icon: "🔧",
  },
  {
    id: 4,
    title: "Full-Stack Web Development",
    description: "Combining both frontend and backend development skills to build complete web solutions.",
    fullDescription: "A complete web solution involves seamless integration between the frontend and backend. I build full-stack applications using the MERN stack, ensuring a smooth and interactive user experience with optimal performance.",
    icon: "⚙️",
  },
  {
    id: 5,
    title: "Mobile App Development",
    description: "Creating visually appealing and user-friendly mobile applications with cross-platform support.",
    fullDescription: "Building feature-rich and high-performance mobile applications using React Native. My focus is on UI/UX design, app responsiveness, and integrating powerful backend services for seamless functionality.",
    icon: "📱",
  },
];

// Custom arrow components
const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <FaChevronLeft
      className={`${className} text-green-400 hover:text-blue-500 text-3xl absolute left-[-40px] z-10 cursor-pointer`}
      onClick={onClick}
    />
  );
};

const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <FaChevronRight
      className={`${className} text-green-400 hover:text-blue-500 text-3xl absolute right-[-40px] z-10 cursor-pointer`}
      onClick={onClick}
    />
  );
};

// Slider settings with custom arrows
const sliderSettings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);

  const toggleReadMore = (id) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <section className="bg-gray-950 text-white py-24" id="services">
      <div className="container mt-12 mx-auto px-8 md:px-16">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        <div className="mt-24">
          <div className="bg-gray-900 p-12 rounded-lg shadow-xl">
            <Slider {...sliderSettings}>
              {services.map((service) => (
                <div key={service.id} className="p-4">
                  <div
                    className="bg-gray-900 px-10 py-9 rounded-lg min-h-[350px] border-2 border-blue-300 hover:shadow-xl transform 
                    transition-transform duration-300 hover:scale-105 flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-5xl text-center mb-4 text-gradient bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                        {service.icon}
                      </div>
                      <h3
                        className="text-3xl font-bold text-center text-transparent bg-clip-text 
                        bg-gradient-to-r from-green-400 to-blue-500"
                      >
                        {service.title}
                      </h3>
                      <p className="mt-4 text-gray-300 text-center">
                        {expandedService === service.id
                          ? service.fullDescription
                          : service.description}
                      </p>
                    </div>
                    <div className="text-center mt-4">
                      <button
                        onClick={() => toggleReadMore(service.id)}
                        className="text-blue-400 hover:underline"
                      >
                        {expandedService === service.id ? "Read Less" : "Read More"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
