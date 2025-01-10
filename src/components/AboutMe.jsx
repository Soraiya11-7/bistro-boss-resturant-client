import React from "react";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <section id="about" className="py-16 px-4 bg-black text-white">
          <h2 className="text-4xl font-bold text-fuchsia-600 mb-6 ml-36">About Me</h2>
      <div className="max-w-3xl mx-auto flex  text-center lg:text-left">
        
        {/* Left side: Image */}
        <div className="mt-3 w-[25%]  lg:mr-3">
          <h2 className="border-b-4 border-fuchsia-700  "></h2>
        </div>

        {/* Right side: About Text */}
        <div className="text-center lg:text-left">
        
          <p className="text-lg mb-6">
          I am a passionate developer with a strong interest in creating user-friendly applications. My journey in programming began with learning the fundamentals, and now I specialize in front-end development with React, JavaScript, and Tailwind CSS. 
          In my free time, I enjoy reading religious books, spending quality time with close friends, playing badminton, and solving puzzle games. These hobbies help me stay balanced and inspired.
          </p>
          <p className="text-lg mb-8">
            I believe in continuous learning and enjoy working on projects that
            challenge me to improve my skills. I'm always eager to explore new
            technologies and improve my craft.
          </p>

          {/* Contact Button using Link */}
          <a
            href="#contact" // Navigates to the contact section
            className="bg-fuchsia-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-fuchsia-700 transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
