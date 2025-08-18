import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSolarPanel,
  faChargingStation,
  faWaveSquare,
  faTools,
  faMicrochip,
  faCogs,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver comprehensive sustainable energy solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Solar Energy Systems */}
          <div className="service-card card-hover p-8 rounded-2xl">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mb-6">
              <FontAwesomeIcon icon={faSolarPanel} className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Solar Energy Systems</h3>
            <p className="text-gray-600 mb-4">
              Complete solar solutions from design to commissioning. High-performance systems with smart monitoring and maximum ROI.
            </p>
            <div className="flex items-center text-green-600 font-semibold">
            </div>
          </div>

          {/* EV Charging Infrastructure */}
          <div className="service-card card-hover p-8 rounded-2xl">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
              <FontAwesomeIcon icon={faChargingStation} className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">EV Charging Infrastructure</h3>
            <p className="text-gray-600 mb-4">
              Future-ready EV charging solutions with smart grid integration and load balancing technology.
            </p>
            <div className="flex items-center text-green-600 font-semibold">
            </div>
          </div>

          {/* Power Quality Solutions */}
          <div className="service-card card-hover p-8 rounded-2xl">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mb-6">
              <FontAwesomeIcon icon={faWaveSquare} className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Power Quality Solutions</h3>
            <p className="text-gray-600 mb-4">
              Advanced harmonics analysis and mitigation to protect equipment and optimize power quality.
            </p>
            <div className="flex items-center text-green-600 font-semibold">
            </div>
          </div>

          {/* Maintenance & Support */}
          <div className="service-card card-hover p-8 rounded-2xl">
            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
              <FontAwesomeIcon icon={faTools} className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Maintenance & Support</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive maintenance programs ensuring optimal performance and system longevity.
            </p>
            <div className="flex items-center text-green-600 font-semibold">
            </div>
          </div>

          {/* PLC & SCADA Systems */}
          <div className="service-card card-hover p-8 rounded-2xl">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
              <FontAwesomeIcon icon={faMicrochip} className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">PLC & SCADA Systems</h3>
            <p className="text-gray-600 mb-4">
              Industrial automation and control systems for optimized operations and remote monitoring.
            </p>
            <div className="flex items-center text-green-600 font-semibold">
            </div>
          </div>

          {/* Component Trading */}
          <div className="service-card card-hover p-8 rounded-2xl">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
              <FontAwesomeIcon icon={faCogs} className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Component Trading</h3>
            <p className="text-gray-600 mb-4">
              Premium electrical components and equipment sourcing for industrial and commercial applications.
            </p>
            <div className="flex items-center text-green-600 font-semibold">
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
