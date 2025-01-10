import React from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    name: "GadgetHeaven",
    image: "https://via.placeholder.com/400x300", // Replace with actual image URL
    description: "A dynamic e-commerce platform with structured navigation.",
  },
  {
    id: 2,
    name: "CouponHub",
    image: "https://via.placeholder.com/400x300", // Replace with actual image URL
    description: "A coupon-collecting app for discounts across various stores.",
  },
  {
    id: 3,
    name: "PetAdopt",
    image: "https://via.placeholder.com/400x300", // Replace with actual image URL
    description: "A responsive pet adoption platform with dynamic sorting.",
  },
  {
    id: 4,
    name: "PortfolioSite",
    image: "https://via.placeholder.com/400x300", // Replace with actual image URL
    description: "A personal portfolio site showcasing achievements and projects.",
  },
];

const Projects = () => {
  return (
    <div className="bg-black py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-white">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-56 object-cover rounded-md mb-6 transition duration-200 transform hover:scale-110"
            />
            <h2 className="text-2xl font-semibold text-black mb-2">{project.name}</h2>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <Link
              to={`/projects/${project.id}`}
              className="inline-block bg-fuchsia-600 text-white px-6 py-2 rounded-md hover:bg-fuchsia-700 transition duration-200"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
