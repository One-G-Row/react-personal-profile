import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

function ProjectCard({ img, description, languages, title, link }) {
  return (
    <div className="project-card bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 m-4 w-full sm:w-80 md:w-96 lg:w-1/3 flex flex-col">
      
        <img
          src={img}
          alt={title}
          className="project-img w-full h-48 object-cover"
        />
    
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold border-b-2 border-gray-200 pb-2 mb-4">
          {title}
        </h3>
        <p className="text-white-600 mb-2">{languages}</p>
        <p className="text-white-800 flex-grow">{description}</p>
        <Link to={link}>
          <button
            className="project-btn bg-gray-600 text-white rounded-lg border border-gray-600 hover:bg-gray-700"
            onClick={link}
          >
            Link Demo
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
