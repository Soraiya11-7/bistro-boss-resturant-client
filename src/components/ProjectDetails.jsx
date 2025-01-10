import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaFire, FaExternalLinkAlt } from "react-icons/fa"; // Importing tech icons

const projectData = {
  1: {
    name: "GadgetHeaven",
    techStack: ["React", "Tailwind CSS", "JavaScript"],
    description:
      "A dynamic e-commerce platform with product categories, cart functionality, and structured navigation.",
    challenges: "Ensuring optimal user experience across devices and browsers.",
    improvements: "Adding advanced filtering options and payment gateways.",
    details:
      "This project was built to simplify gadget shopping. It includes features like a wishlist, responsive design, and a dashboard for user statistics.",
    liveLink: "https://classy-crostata-0cf8d9.netlify.app/",
    githubLink: "https://github.com/your-repo/gadgetheaven",
  },
  2: {
    name: "CouponHub",
    techStack: ["React", "Firebase", "DaisyUI"],
    description:
      "A coupon-collecting application for finding discounts easily.",
    challenges: "Managing real-time coupon expiration and user engagement.",
    improvements: "Introducing location-based coupon recommendations.",
    details:
      "This project allows users to collect coupons from various online stores and use them conveniently. Features include Firebase authentication and copy-to-clipboard functionality.",
    liveLink: "https://fluffy-rabanadas-4c83a2.netlify.app/",
    githubLink: "https://github.com/your-repo/couponhub",
  },
  3: {
    name: "PetAdopt",
    techStack: ["React", "Tailwind CSS", "DaisyUI"],
    description:
      "A platform for adopting pets, featuring sorting and modals.",
    challenges: "Implementing seamless data loading for categories.",
    improvements: "Enhancing search options for a better user experience.",
    details:
      "This platform connects pet seekers with available pets for adoption. It supports sorting by categories, a responsive design, and dynamic modals for details and adoption.",
    liveLink: "https://mellifluous-axolotl-6d2248.netlify.app/",
    githubLink: "https://github.com/your-repo/petadopt",
  },
  4: {
    name: "PortfolioSite",
    techStack: ["React", "AOS", "LazyLoad"],
    description: "A personal portfolio showcasing projects and skills.",
    challenges: "Optimizing performance with lazy-loaded components.",
    improvements: "Adding a blog section for regular updates.",
    details:
      "This site showcases my personal projects, skills, and achievements. It includes animations and lazy-loading for better performance.",
    liveLink: "https://lighthearted-fairy-d07e4e.netlify.app/",
    githubLink: "https://github.com/your-repo/portfoliosite",
  },
};

const techIcons = {
  React: <FaReact className="text-blue-600" />,
  "Tailwind CSS": <i className="fab fa-css3-alt text-blue-500"></i>,  // You can use a custom icon or external one here
  JavaScript: <FaJs className="text-yellow-500" />,
  Firebase: <FaFire className="text-orange-500" />,
  DaisyUI: <FaCss3Alt className="text-pink-500" />,
  AOS: <i className="fab fa-css3-alt text-gray-500"></i>,  // Placeholder for AOS icon
  LazyLoad: <i className="fab fa-react text-gray-500"></i>,  // Placeholder for LazyLoad icon
};

const ProjectDetails = () => {
  const { id } = useParams();
  const projectId = parseInt(id);
  const project = projectData[projectId];

  if (!project) {
    return (
      <div className="text-center text-red-500 font-semibold text-xl">
        <p>Project not found!</p>
        <Link to="/projects" className="text-blue-600 hover:underline">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-black to-fuchsia-600 min-h-screen flex items-center justify-center py-12">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl p-8 space-y-6">
        {/* Project Header */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-black">{project.name}</h1>
          <p className="text-lg text-gray-700 mt-2">{project.description}</p>
        </div>

       {/* Tech Stack */}
<div>
  <h2 className="text-xl font-semibold text-black">Tech Stack:</h2>
  <div className="flex space-x-4 mt-4">
    {project.techStack.map((tech, index) => (
      <div
        key={index}
        className="flex items-center space-x-2 bg-gray-100 rounded-lg px-4 py-2 shadow-sm hover:shadow-md transition-all duration-200"
      >
        {techIcons[tech]} {/* Display the corresponding icon */}
        <span className="text-sm text-gray-700 font-semibold">{tech}</span>
      </div>
    ))}
  </div>
</div>


        {/* Project Details */}
        <div>
          <h2 className="text-xl font-semibold text-black">Details:</h2>
          <p className="text-lg text-gray-600">{project.details}</p>
        </div>

        {/* Challenges */}
        <div>
          <h2 className="text-xl font-semibold text-black">Challenges:</h2>
          <p className="text-lg text-gray-600">{project.challenges}</p>
        </div>

        {/* Improvements */}
        <div>
          <h2 className="text-xl font-semibold text-black">Improvements:</h2>
          <p className="text-lg text-gray-600">{project.improvements}</p>
        </div>

        {/* Project Links */}
        <div className="flex space-x-6">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-fuchsia-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-fuchsia-700 transform transition duration-200 hover:scale-105"
          >
            <FaExternalLinkAlt className="inline mr-2" />
            Live Link
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-900 transform transition duration-200 hover:scale-105"
          >
            <FaGithub className="inline mr-2" />
            GitHub Link
          </a>
        </div>

        {/* Back to Projects Link */}
        <div className="text-center">
          <Link
            to="/"
            className="inline-block text-blue-600 font-semibold text-lg hover:underline transition duration-200"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
