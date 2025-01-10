import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section id="hero" className="bg-gradient-to-r from-black  to-fuchsia-950 text-white py-20 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Side: Designation, Introduction, and Resume Download */}
        <div className="text-center lg:text-left mb-12 lg:mb-0">
          <h1 className="text-4xl font-bold mb-4 text-white">Frontend Developer</h1>
          <p className="text-lg mb-6 text-gray-200">
            Passionate about creating user-friendly, responsive websites with a focus on performance and design.
            With expertise in React, JavaScript, and modern front-end technologies.
          </p>
          {/* Resume Download Button */}
          <a
  href="https://workspace.google.com/products/docs/" // Your resume file URL
  target="_blank" // Open in a new tab
  rel="noopener noreferrer" // Security best practice
  className="bg-fuchsia-950 text-white px-6 py-3 rounded-lg shadow-md hover:bg-deep-purple-800 transition duration-300"
  download // This will download the file in the new tab
>
  Download Resume
</a>

        </div>

        {/* Right Side: Professional Image */}
        <div className="flex justify-center lg:justify-end w-full">
          <img
            src="https://i.ibb.co.com/yBkznxG/heroimg.jpg"
            alt="Professional"
            className="rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </div>

      {/* Social Links - Vertical Alignment on the Right End */}
      <div className="absolute top-1/2 right-6 transform -translate-y-1/2 flex flex-col items-center space-y-6">
        <a
          href="https://github.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-white hover:text-deep-purple-300 transition duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-white hover:text-deep-purple-300 transition duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-white hover:text-deep-purple-300 transition duration-300"
        >
          <FaTwitter />
        </a>
        <a
          href="https://facebook.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-white hover:text-deep-purple-300 transition duration-300"
        >
          <FaFacebook />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
