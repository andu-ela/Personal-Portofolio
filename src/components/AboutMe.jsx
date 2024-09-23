import React from 'react';
import profileImage from '../assets/profile.png'; // Importo imazhin

const AboutMe = () => {
  return (
    <section className="relative min-h-screen flex justify-center items-center p-8 bg-gray-900 text-white">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-6xl px-8">
        {/* Imazhi në anën e majtë */}
        <div className="relative w-96 h-96 mb-8 md:mb-0">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-blue-500 opacity-50 blur-3xl"></div>
          <img
            src={profileImage}
            alt="Profile"
            className="relative z-10 w-full h-full object-cover rounded-full border-8 border-gray-800 shadow-[0_0_100px_rgba(0,255,255,0.6)]"
          />
        </div>

        {/* Teksti në anën e djathtë */}
        <div className="flex flex-col space-y-4 text-left w-full md:w-1/2 p-8">
          <h1 className="text-6xl font-extrabold text-white">About Me</h1>
          <h2 className="text-2xl font-semibold text-gray-400">Full Stack Developer</h2>
          <p className="text-lg text-gray-300">
            I specialize in creating visually stunning and fully responsive web applications with modern technologies like React, Tailwind CSS, and JavaScript.
          </p>
          <p className="text-lg text-gray-300">
            Step into a world where technology meets creativity. As a Full Stack Developer, I transform complex ideas into digital solutions that captivate and inspire.
          </p>
          <p className="text-lg text-gray-300">
            I specialize in building secure and scalable systems with a focus on delivering seamless, user-friendly experiences.
          </p>
       
          <p className="text-lg text-gray-300">
            Join me as I explore new frontiers in web development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
