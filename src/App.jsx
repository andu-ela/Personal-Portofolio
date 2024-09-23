import React, { useState } from 'react';
import { FaUser, FaCode, FaEnvelope, FaHome, FaFacebook, FaLinkedin, FaInstagram, FaGithub, FaFileDownload, FaTools, FaProjectDiagram } from 'react-icons/fa'; 
import profileImage from './assets/profile.png';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import resume from './assets/AnduelaNurshabaResume.pdf';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      {/* Main Content */}
      <div className="flex-grow">
        {activeTab === 'home' && (
          <div className="relative z-10 flex justify-center items-center h-screen">
            {/* Home Section */}
            <section className="flex justify-between items-center w-full max-w-6xl px-8">
              <div className="flex flex-col space-y-6 text-left">
                <h1 className="text-6xl font-extrabold text-white">
                  Hello, I'm <br /><span className="text-cyan-400">Anduela Nurshaba</span>
                </h1>
                <h2 className="text-2xl font-semibold text-gray-400"> Full Stack Developer</h2>
                <p className="text-lg text-gray-300 max-w-md">
                  I specialize in creating visually stunning and fully responsive web applications with modern technologies like React, Tailwind CSS, and JavaScript.
                </p>
                <div className="flex items-center space-x-6">
               
<a 
  href={resume} 
  target="_blank" 
  rel="noopener noreferrer" 
  className="bg-cyan-400 text-white px-4 py-1 rounded-full shadow-lg hover:bg-cyan-300 transition text-sm"
>
  <FaFileDownload className="inline-block mr-2" />
  Resume
</a>

                  <div className="flex space-x-4">
                    <a href="https://www.facebook.com/anduela.433/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
                      <FaFacebook size={25} />
                    </a>
                    <a href="https://www.linkedin.com/in/anduela-nurshaba/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
                      <FaLinkedin size={25} />
                    </a>
                    <a href="https://www.instagram.com/n.anduela/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
                      <FaInstagram size={25} />
                    </a>
                    <a href="https://github.com/andu-ela" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
                      <FaGithub size={25} />
                    </a>
                    <a href="mailto:anduela_nurshabaa@hotmail.com" className="text-cyan-400 hover:text-cyan-300">
                      <FaEnvelope size={25} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative w-96 h-96">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-blue-500 opacity-50 blur-3xl"></div>
                <img src={profileImage} alt="Profile" className="relative z-10 w-full h-full object-cover rounded-full border-8 border-gray-800 shadow-[0_0_100px_rgba(0,255,255,0.6)]" />
              </div>
            </section>
          </div>
        )}

        {activeTab === 'about' && <AboutMe />}
        {activeTab === 'skills' && <Skills />}
        {activeTab === 'projects' && <Projects />}
        {activeTab === 'contact' && <Contact />}

      </div>

      {/* Tab Navigation */}
      <footer className="bg-gray-800 p-4 fixed bottom-5 left-1/2 transform -translate-x-1/2 w-80 rounded-full shadow-lg z-10">
        <div className="flex justify-around">
          <button onClick={() => setActiveTab('home')} className={`flex flex-col items-center py-2 px-4 rounded-full transition-all relative group ${activeTab === 'home' ? 'bg-cyan-400 text-white' : 'bg-gray-900 text-gray-400'}`}>
            <FaHome className="text-2xl" />
            <span className="absolute bottom-full mb-2 px-2 py-1 text-xs bg-black text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity">Home</span>
          </button>
          <button onClick={() => setActiveTab('about')} className={`flex flex-col items-center py-2 px-4 rounded-full transition-all relative group ${activeTab === 'about' ? 'bg-cyan-400 text-white' : 'bg-gray-900 text-gray-400'}`}>
            <FaUser className="text-2xl" />
            <span className="absolute bottom-full mb-2 px-2 py-1 text-xs bg-black text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity">About</span>
          </button>
          <button onClick={() => setActiveTab('skills')} className={`flex flex-col items-center py-2 px-4 rounded-full transition-all relative group ${activeTab === 'skills' ? 'bg-cyan-400 text-white' : 'bg-gray-900 text-gray-400'}`}>
            <FaTools className="text-2xl" /> {/* Ikona e re për Skills */}
            <span className="absolute bottom-full mb-2 px-2 py-1 text-xs bg-black text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity">Skills</span>
          </button>
          <button onClick={() => setActiveTab('projects')} className={`flex flex-col items-center py-2 px-4 rounded-full transition-all relative group ${activeTab === 'projects' ? 'bg-cyan-400 text-white' : 'bg-gray-900 text-gray-400'}`}>
            <FaProjectDiagram className="text-2xl" /> {/* Ikona e re për Projects */}
            <span className="absolute bottom-full mb-2 px-2 py-1 text-xs bg-black text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity">Projects</span>
          </button>
          <button onClick={() => setActiveTab('contact')} className={`flex flex-col items-center py-2 px-4 rounded-full transition-all relative group ${activeTab === 'contact' ? 'bg-cyan-400 text-white' : 'bg-gray-900 text-gray-400'}`}>
            <FaEnvelope className="text-2xl" />
            <span className="absolute bottom-full mb-2 px-2 py-1 text-xs bg-black text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity">Contact</span>
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;
