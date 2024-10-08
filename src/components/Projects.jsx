import React, { useState } from 'react';
import { FaGithub, FaLaptopCode, FaCode, FaPalette, FaMobileAlt } from 'react-icons/fa';
import diagImage from '../assets/diag.jpg'; 
import mernImage from '../assets/mern.jpg'; 
import storeImage from '../assets/store.jpeg'; 
import learningImage from '../assets/learning-m.png';
import javaOOPImage from '../assets/JavaOOP.jpg'; 
import threeTierImage from '../assets/ThreeRestaurant.jpg'; 

const Projects = () => {
  const [activeTab, setActiveTab] = useState('myProjects');
  const [showDetails, setShowDetails] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Vehicle Store",
      image: diagImage,
      description: "A brief description of the Vehicle Store project",
      tech: "Java OOP",
      github: "https://github.com/andu-ela/vehiclestore"
    },
    {
      id: 2,
      title: "To Do List",
      image: mernImage,
      description: "A powerful To Do List application built with MongoDB, ExpressJS, ReactJS, and NodeJS.",
      tech: "MongoDB, ExpressJS, ReactJS, and NodeJS.",
      github: "https://github.com/andu-ela/MernCrud"
    },
    {
      id: 3,
      title: "Vehicle Shop",
      image: storeImage,
      description: "Backend development using Java for a vehicle shop application.",
      tech: "Java",
      github: "https://github.com/andu-ela/vehicle-shop/tree/main/final-exam-console-jcoaching-template"
    },
    {
      id: 4,
      title: "Learning Management System",
      image: learningImage,
      description: "LMS developed in a group with multiple services.",
      tech: "ReactJs, NodeJs, MySQL, TailwindCSS, JavaScript, Express",
      github: "https://github.com/joraaveseli/learning-management-system"
    },
    {
      id: 5,
      title: "Restaurant App",
      image: javaOOPImage,
      description: "A restaurant management application developed using Java OOP.",
      tech: "Java OOP",
      github: "https://github.com/andu-ela/Restaurant-Management-System"
    },
    {
      id: 6,
      title: "Three-Tier Restaurant Operations",
      image: threeTierImage,
      description: "An application designed for managing restaurant operations in a three-tier architecture.",
      tech: "Java OOP (View)",
      github: "https://github.com/andu-ela/Restaurant-Point-of-Sale-App"
    }
  ];

  const services = [
    {
      title: "Full Stack Development",
      description: "Building end-to-end solutions for web applications.",
      icon: <FaLaptopCode size={30} />,
    },
    {
      title: "Frontend Development",
      description: "Creating visually appealing and user-friendly interfaces.",
      icon: <FaPalette size={30} />,
    },
    {
      title: "Web Development",
      description: "Creating responsive and visually appealing websites.",
      icon: <FaCode size={30} />,
    },
    {
      title: "UI/UX Design",
      description: "Designing user-friendly interfaces and experiences.",
      icon: <FaPalette size={30} />,
    },
    {
      title: "Software Development",
      description: "Developing customized software solutions for various needs.",
      icon: <FaMobileAlt size={30} />,
    },
  ];

  return (
    <section id="projects" className="p-8">
      <h2 className="text-5xl font-bold text-center mb-8">Projects</h2>

      {/* Tabs */}
      <div className="flex mb-4 relative">
        <button 
          onClick={() => setActiveTab('myProjects')} 
          className={`flex-1 text-xl text-center py-2 transition-colors ${activeTab === 'myProjects' ? 'text-cyan-400' : 'text-white'}`}
        >
          My Projects
        </button>
        <button 
          onClick={() => setActiveTab('myServices')} 
          className={`flex-1 text-xl text-center py-2 transition-colors ${activeTab === 'myServices' ? 'text-cyan-400' : 'text-white'}`}
        >
          My Services
        </button>
        {/* Indicator */}
        <div
          className={`absolute bottom-0 left-0 h-1 transition-all ${activeTab === 'myProjects' ? 'bg-cyan-400' : 'bg-cyan-400'}`}
          style={{ width: '50%', left: activeTab === 'myProjects' ? '0%' : '50%', transition: 'left 0.3s, width 0.3s' }}
        ></div>
      </div>

      {/* Content */}
      {activeTab === 'myProjects' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map(project => (
            <div 
              key={project.id} 
              className="relative cursor-pointer overflow-hidden transition-transform transform hover:scale-105"
              onMouseEnter={() => setShowDetails(project.id)}
              onMouseLeave={() => setShowDetails(null)}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className={`project-image rounded transition duration-300 ${showDetails === project.id ? 'blur-md' : ''}`} 
              />
              {showDetails === project.id && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800 bg-opacity-90 text-white rounded p-3">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-2 text-center">{project.description}</p>
                  <div className="mt-4">
                    <span className="text-cyan-400">{project.tech}</span>
                  </div>
                  <hr className="border-gray-600 my-2 w-full" />
                  <div className="flex justify-center">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white hover:text-gray-400"
                    >
                      <FaGithub size={30} />
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div key={index} className="relative border rounded-lg p-6 bg-gray-800 text-white transition-shadow hover:shadow-lg overflow-hidden">
              <div className="flex items-center mb-4">
                {service.icon}
                <h3 className="text-xl font-semibold ml-3">{service.title}</h3>
              </div>
              <p className="mb-4">{service.description}</p>
              <hr className="border-gray-600 my-2 w-full" />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
