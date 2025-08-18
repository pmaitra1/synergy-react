import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our successful implementations across the Gulf region
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card 1 - Rawdat Al Hamama Park */}
          <Link
            to="/rawdat"
            className="block group relative h-80 bg-gray-200 overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop&crop=center"
              alt="Rawdat Al Hamama Park Solar Installation"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition duration-300"></div>
            {/* Text Info */}
            <div className="absolute bottom-0 p-4 text-white">
              <h3 className="text-xl font-bold mb-1">Rawdat Al Hamama Park Solar</h3>
              <p className="text-sm mb-2">251.6kWp flexible solar system for Public Works Authority (Ashghal)</p>
              <div className="flex items-center text-yellow-400 font-semibold">
                <span>View Details</span>
                <i className="fas fa-arrow-right ml-2"></i>
              </div>
            </div>
          </Link>
          <Link
            to="/farm"
            className="block group relative h-80 bg-gray-200 overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&h=300&fit=crop&crop=center"
              alt="Ruwais Vegetable Farm Solar Installation" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition duration-300"></div>
            {/* Text Info */}
            <div className="absolute bottom-0 p-4 text-white">
              <h3 className="text-xl font-bold mb-1">Ruwais Vegetable Farm</h3>
              <p className="text-sm mb-2">1.5MWp grid-tied solar system for Qatar Foundation agricultural facility</p>
              <div className="flex items-center text-yellow-400 font-semibold">
                <span>View Details</span>
                <i className="fas fa-arrow-right ml-2"></i>
              </div>
            </div>
          </Link>
          <Link
            to="/station"
            className="block group relative h-80 bg-gray-200 overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=300&fit=crop&crop=center"
              alt="Solar Charging Station at Dahl Al Hamam Park" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition duration-300"></div>
            {/* Text Info */}
            <div className="absolute bottom-0 p-4 text-white">
              <h3 className="text-xl font-bold mb-1">Solar Charging Station</h3>
              <p className="text-sm mb-2">Solar-powered device charging kiosk at Dahl Al Hamam Park</p>
              <div className="flex items-center text-yellow-400 font-semibold">
                <span>View Details</span>
                <i className="fas fa-arrow-right ml-2"></i>
              </div>
            </div>
          </Link>
          <Link
            to="/hospitalscada"
            className="block group relative h-80 bg-gray-200 overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=200&fit=crop&crop=center"
              alt="Hospital SCADA System" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition duration-300"></div>
            {/* Text Info */}
            <div className="absolute bottom-0 p-4 text-white">
              <h3 className="text-xl font-bold mb-1">Hospital SCADA System</h3>
              <p className="text-sm mb-2">Multi-facility monitoring for Hamad Medical Corporation</p>
              <div className="flex items-center text-yellow-400 font-semibold">
                <span>View Details</span>
                <i className="fas fa-arrow-right ml-2"></i>
              </div>
            </div>
          </Link>
          <Link
            to="/powerquality"
            className="block group relative h-80 bg-gray-200 overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src="https://unsplash.com/photos/a-factory-with-a-lot-of-red-and-white-pipes-76yzygeNLT0"
              alt="Mesaieed Refinery Analysis" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition duration-300"></div>
            {/* Text Info */}
            <div className="absolute bottom-0 p-4 text-white">
              <h3 className="text-xl font-bold mb-1">Mesaieed Refinery Analysis</h3>
              <p className="text-sm mb-2">Power quality measurement and analysis for Qatar Energy</p>
              <div className="flex items-center text-yellow-400 font-semibold">
                <span>View Details</span>
                <i className="fas fa-arrow-right ml-2"></i>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
