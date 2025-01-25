import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Creating visually appealing and user-friendly web designs.",
    icon: "🌐",
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    icon: "💻",
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Developing robust server-side logic and databases.",
    icon: "🔧",
  },
  {
    id: 4,
    title: "Full-Stack Development",
    description: "Combining both frontend and backend development skills.",
    icon: "⚙️",
  },
  {
    id: 5,
    title: "Mobile App Development",
    description: "Creating visually appealing and user-friendly mobile app designs.",
    icon: "📱",
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 1,
      }
    }
  ],
};

const Services = () => {
  return (
    <section className="bg-gray-950 text-white py-20" id="services">
      <div className="container mt-10 mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12 ">My Services</h2>
        <div className= "mt-20">
        <Slider {...sliderSettings}>
          {services.map((service) => (
            <div key={service.id} className="p-4">
              <div
                className="bg-gray-800 px-10 py-8 rounded-lg hover:shadow-xl transform 
                transition-transform duration-300 hover:scale-105"
              >
                <div className="text-5xl text-center mb-4 text-gradient bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  {service.icon}
                </div>
                <h3
                  className="text-2xl font-bold text-center text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500"
                >
                  {service.title}
                </h3>
                <p className="mt-4 text-gray-300 text-center">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
        </div>
      </div>
    </section>
  );
};

export default Services;
