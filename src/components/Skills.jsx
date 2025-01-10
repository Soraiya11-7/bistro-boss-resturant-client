import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiCplusplus, SiJavascript, SiTailwindcss, SiMongodb, SiMatomo, SiC } from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";

const Skills = () => {
  const categorizedSkills = {
    ProgrammingLanguages: [
      { name: "C", percentage: 90, icon: <SiC className="text-fuchsia-600" /> },
      { name: "C++", percentage: 80, icon: <SiCplusplus className="text-fuchsia-800" /> },
      { name: "JavaScript", percentage: 80, icon: <SiJavascript className="text-yellow-500" /> },
    ],
    MarkupAndStyling: [
      { name: "HTML", percentage: 95, icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", percentage: 90, icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "Tailwind CSS", percentage: 85, icon: <SiTailwindcss className="text-sky-500" /> },
    ],
    LibrariesAndFrameworks: [
      { name: "React", percentage: 85, icon: <FaReact className="text-cyan-500" /> },
    ],
    Tools: [
      { name: "VS Code", percentage: 95, icon: <VscVscodeInsiders className="text-sky-400" /> },
      { name: "Git", percentage: 70, icon: <FaGitAlt className="text-orange-400" /> },
    ],
    Databases: [
      { name: "MongoDB", percentage: 60, icon: <SiMongodb className="text-green-500" /> },
    ],
    Other: [
      { name: "MATLAB", percentage: 50, icon: <SiMatomo className="text-red-500" /> },
    ],
  };

  return (
    <div className="max-w-5xl mx-auto p-8 bg-black text-white">
      <h2 className="text-4xl font-bold text-center mb-8">My Skills</h2>
      <h3 className="text-lg text-center w-[90%] sm:w-[80%] md:w-[60%] mx-auto mb-10">
        I have a strong foundation in front-end development, working with HTML, CSS, JavaScript, React, and Tailwind CSS to create responsive and interactive user interfaces, though I continue to build and expand my knowledge in these areas.
      </h3>
      {Object.entries(categorizedSkills).map(([category, skills]) => (
        <div key={category} className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">{category.replace(/([A-Z])/g, " $1").trim()}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="p-4 border rounded-lg shadow-sm hover:shadow-lg transition duration-300 bg-gray-800">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-lg font-medium">{skill.name}</span>
                  </div>
                </div>
                <div className="w-full h-2 bg-gray-600 rounded-lg overflow-hidden">
                  <div
                    className="h-full bg-fuchsia-600 rounded-lg transition-all duration-500"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-sm text-gray-400">{skill.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
