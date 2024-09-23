import React from 'react';
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaJava, FaGitAlt
} from 'react-icons/fa'; 
import {
  SiTailwindcss, SiExpress, SiJquery, SiMongodb, SiMysql, SiJson
} from 'react-icons/si';

const Skills = () => {
  return (
    <section id="skills" className="p-8 text-center">
      <h2 className="text-5xl font-bold mb-8">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Skill 1: React */}
        <div className="flex flex-col items-center p-4 border border-gray-700 rounded-lg bg-gray-800">
          <FaReact className="text-6xl text-white transition-colors duration-300 hover:text-cyan-400 mb-2" />
          <h3 className="text-lg font-semibold text-white">React</h3>
        </div>
        {/* Skill 2: Node.js */}
        <div className="flex flex-col items-center p-4 border border-gray-700 rounded-lg bg-gray-800">
          <FaNodeJs className="text-6xl text-white transition-colors duration-300 hover:text-cyan-400 mb-2" />
          <h3 className="text-lg font-semibold text-white">Node.js</h3>
        </div>
        {/* Skill 3: HTML5 */}
        <div className="flex flex-col items-center p-4 border border-gray-700 rounded-lg bg-gray-800">
          <FaHtml5 className="text-6xl text-white transition-colors duration-300 hover:text-cyan-400 mb-2" />
          <h3 className="text-lg font-semibold text-white">HTML5</h3>
        </div>
        {/* Skill 4: CSS3 */}
        <div className="flex flex-col items-center p-4 border border-gray-700 rounded-lg bg-gray-800">
          <FaCss3Alt className="text-6xl text-white transition-colors duration-300 hover:text-cyan-400 mb-2" />
          <h3 className="text-lg font-semibold text-white">CSS3</h3>
        </div>
        {/* Skill 5: JavaScript */}
        <div className="flex flex-col items-center p-4 border border-gray-700 rounded-lg bg-gray-800">
          <FaJsSquare className="text-6xl text-white transition-colors duration-300 hover:text-cyan-400 mb-2" />
          <h3 className="text-lg font-semibold text-white">JavaScript</h3>
        </div>
        {/* Skill 6: Java */}
        <div className="flex flex-col items-center p-4 border border-gray-700 rounded-lg bg-gray-800">
          <FaJava className="text-6xl text-white transition-colors duration-300 hover:text-cyan-400 mb-2" />
          <h3 className="text-lg font-semibold text-white">Java</h3>
        </div>
        {/* Skill 7: Tailwind CSS */}
        <div className="flex flex-col items-center p-4 border border-gray-700 rounded-lg bg-gray-800">
          <SiTailwindcss className="text-6xl text-white transition-colors duration-300 hover:text-cyan-400 mb-2" />
          <h3 className="text-lg font-semibold text-white">Tailwind CSS</h3>
        </div>
        {/* Skill 8: Express.js */}
        <div className="flex flex-col items-center p-4 border border-gray-700 rounded-lg bg-gray-800">
          <SiExpress className="text-6xl text-white transition-colors duration-300 hover:text-cyan-400 mb-2" />
          <h3 className="text-lg font-semibold text-white">Express.js</h3>
        </div>
        {/* Skill 9: MongoDB */}
        <div className="flex flex-col items-center p-4 border border-gray-700 rounded-lg bg-gray-800">
          <SiMongodb className="text-6xl text-white transition-colors duration-300 hover:text-cyan-400 mb-2" />
          <h3 className="text-lg font-semibold text-white">MongoDB</h3>
        </div>
        {/* Skill 10: MySQL */}
        <div className="flex flex-col items-center p-4 border border-gray-700 rounded-lg bg-gray-800">
          <SiMysql className="text-6xl text-white transition-colors duration-300 hover:text-cyan-400 mb-2" />
          <h3 className="text-lg font-semibold text-white">MySQL</h3>
        </div>
        {/* Skill 11: Git */}
        <div className="flex flex-col items-center p-4 border border-gray-700 rounded-lg bg-gray-800">
          <FaGitAlt className="text-6xl text-white transition-colors duration-300 hover:text-cyan-400 mb-2" />
          <h3 className="text-lg font-semibold text-white">Git</h3>
        </div>
        {/* Skill 12: jQuery */}
        <div className="flex flex-col items-center p-4 border border-gray-700 rounded-lg bg-gray-800">
          <SiJquery className="text-6xl text-white transition-colors duration-300 hover:text-cyan-400 mb-2" />
          <h3 className="text-lg font-semibold text-white">jQuery</h3>
        </div>
        {/* Skill 13: JSON */}
        <div className="flex flex-col items-center p-4 border border-gray-700 rounded-lg bg-gray-800">
          <SiJson className="text-6xl text-white transition-colors duration-300 hover:text-cyan-400 mb-2" />
          <h3 className="text-lg font-semibold text-white">JSON</h3>
        </div>
      </div>
    </section>
  );
};

export default Skills;
