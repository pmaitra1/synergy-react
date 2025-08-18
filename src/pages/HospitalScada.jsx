// src/pages/HospitalScada.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import { projects } from "../data/projects";
import "../style.css";

// src/pages/HospitalScada.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faChevronRight,          // keep just this once
  faHospital,
  faMicrochip,
  faNetworkWired,
  faShieldAlt,
  faEye,
  faTachometerAlt,
  faChartLine,
  faExpandArrowsAlt,
  faClock,
  faUsers,
  faDesktop,
  faCogs,
  faLightbulb,
  faChevronLeft,
  faTimes,
  faSearchPlus,
  faExclamationTriangle,     // ✅ add
  faTrophy                   // ✅ add
} from "@fortawesome/free-solid-svg-icons";


const HospitalScada = () => {
  // Gallery images data (same content as your HTML)
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1200&h=800&fit=crop&crop=center",
      title: "Hospital Facility Overview",
      description:
        "Modern healthcare infrastructure at one of the four hospitals equipped with centralized SCADA monitoring system for optimal facility management.",
    },
    {
      src: "https://images.unsplash.com/photo-1581094295531-e1637b6d5cc8?w=1200&h=800&fit=crop&crop=center",
      title: "SCADA Control Room",
      description:
        "Central monitoring station providing comprehensive oversight of all four hospital facilities with real-time data visualization and control capabilities.",
    },
    {
      src: "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=1200&h=800&fit=crop&crop=center",
      title: "Custom HMI Interface",
      description:
        "Tailored Human Machine Interface displaying alarms, trends, and diagnostics with intuitive navigation for hospital facility management teams.",
    },
    {
      src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=800&fit=crop&crop=center",
      title: "Network Infrastructure",
      description:
        "Secure Modbus TCP/IP communication network connecting all hospital systems with built-in cybersecurity protocols for reliable operation.",
    },
    {
      src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=800&fit=crop&crop=center",
      title: "Professional Installation",
      description:
        "Synergy Gulf's expert installation team implementing the SCADA system without disrupting ongoing hospital operations through careful scheduling.",
    },
    {
      src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=800&fit=crop&crop=center",
      title: "System Monitoring",
      description:
        "24/7 facility oversight enabling faster fault detection, maintenance response, and enhanced emergency response capabilities across all hospitals.",
    },
  ];

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") previousImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen]);

  // Ensure body overflow resets on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Related Projects (exclude this page; make sure your projects data has id: 'hospital-scada')
  const relatedProjects = projects.filter((p) => p.id !== "hospitalscada");

  return (
    <div className="bg-gray-50 text-gray-800 antialiased">
      <NavBar />

      {/* Breadcrumb */}
      <section className="pt-36 pb-6 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center space-x-2 text-sm bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 w-fit">
            <Link to="/" className="text-gray-500 hover:text-green-600 transition">
              <FontAwesomeIcon icon={faHome} className="mr-1" />
              Home
            </Link>
            <FontAwesomeIcon icon={faChevronRight} className="text-gray-400 text-xs" />
            <Link to="/#projects" className="text-gray-500 hover:text-green-600 transition">
              Projects
            </Link>
            <FontAwesomeIcon icon={faChevronRight} className="text-gray-400 text-xs" />
            <span className="text-gray-800 font-medium">Hospital SCADA System</span>
          </nav>
        </div>
      </section>

      {/* Project Hero */}
      <section className="project-hero py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        {/* Floating elements */}
        <div className="absolute top-20 right-20 w-20 h-20 bg-white/10 rounded-full floating-animation" />
        <div
          className="absolute bottom-40 left-20 w-16 h-16 bg-white/10 rounded-full floating-animation"
          style={{ animationDelay: "-2s" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/20 px-4 py-2 rounded-full mb-6">
                <FontAwesomeIcon icon={faHospital} className="mr-2" />
                <span className="text-sm font-medium">Healthcare Infrastructure</span>
              </div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                SCADA/HMI System for <span className="text-yellow-400">Hospital</span> Monitoring
              </h1>
              <p className="text-xl text-gray-100 mb-8 leading-relaxed">
                A centralized PC-based SCADA/HMI system for Hamad Medical Corporation, providing real-time monitoring
                and control across four major healthcare facilities in Qatar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="glass-effect px-6 py-3 rounded-lg">
                  <div className="text-sm text-gray-200">Client</div>
                  <div className="font-semibold">Hamad Medical Corporation</div>
                </div>
                <div className="glass-effect px-6 py-3 rounded-lg">
                  <div className="text-sm text-gray-200">Protocol</div>
                  <div className="font-semibold">Modbus TCP/IP</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="glass-effect p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-center">Project Overview</h3>
                <div className="stats-grid">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">4</div>
                    <div className="text-white/80 text-sm">Hospitals</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">PC-based</div>
                    <div className="text-white/80 text-sm">SCADA/HMI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">Modbus</div>
                    <div className="text-white/80 text-sm">TCP/IP Protocol</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">Real-time</div>
                    <div className="text-white/80 text-sm">Monitoring</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faMicrochip} className="text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-800 mb-2">PC-based SCADA</div>
              <div className="text-gray-600">Custom HMI Interface</div>
            </div>

            <div className="stat-card">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faNetworkWired} className="text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-800 mb-2">Modbus TCP/IP</div>
              <div className="text-gray-600">Communication Protocol</div>
            </div>

            <div className="stat-card">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faHospital} className="text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-800 mb-2">4 Hospitals</div>
              <div className="text-gray-600">Facilities Monitored</div>
            </div>

            <div className="stat-card">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faShieldAlt} className="text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-800 mb-2">Secure</div>
              <div className="text-gray-600">Network Design</div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Background */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Project Background</h2>
              <p className="text-xl text-gray-600">
                Enhancing healthcare operational efficiency through centralized monitoring
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                As part of <strong>Hamad Medical Corporation's</strong> initiative to enhance the operational
                efficiency and responsiveness of healthcare facilities, a centralized PC-based SCADA/HMI system was
                commissioned across four major hospitals: Rumailah, Heart Hospital, NCCCR (National Center for Cancer
                Care &amp; Research), and Dental Hospital.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                These hospitals play a critical role in Qatar's healthcare delivery system, and ensuring uninterrupted
                building management systems (BMS), utilities, and emergency response mechanisms is essential to
                maintaining patient care standards. This project aimed to integrate various systems into a unified
                platform for <strong>real-time visibility, automation, and remote monitoring</strong>.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-green-100 rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                    <FontAwesomeIcon icon={faHospital} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Hospital Facilities</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <span className="text-green-500 mr-2">•</span>Rumailah Hospital
                  </li>
                  <li>
                    <span className="text-green-500 mr-2">•</span>Heart Hospital
                  </li>
                  <li>
                    <span className="text-green-500 mr-2">•</span>NCCCR (Cancer Care &amp; Research)
                  </li>
                  <li>
                    <span className="text-green-500 mr-2">•</span>Dental Hospital
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-blue-100 rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <FontAwesomeIcon icon={faCogs} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Integrated Systems</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <span className="text-blue-500 mr-2">•</span>HVAC &amp; Climate Control
                  </li>
                  <li>
                    <span className="text-blue-500 mr-2">•</span>Lighting &amp; Power Systems
                  </li>
                  <li>
                    <span className="text-blue-500 mr-2">•</span>Backup Power &amp; UPS
                  </li>
                  <li>
                    <span className="text-blue-500 mr-2">•</span>Water Systems &amp; Alarms
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="challenge-card">
              <div className="challenge-icon section-icon">
                <FontAwesomeIcon icon={faExclamationTriangle} />{/* If you use this, import faExclamationTriangle */}
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6">The Challenge</h2>
              <p className="text-lg text-gray-700 mb-8">
                Implementing a comprehensive monitoring system across multiple healthcare facilities required
                addressing critical operational and technical challenges.
              </p>

              <div className="space-y-6">
                <div className="timeline-item">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    <FontAwesomeIcon icon={faNetworkWired} className="text-red-500 mr-3" />
                    Multi-Facility Integration
                  </h3>
                  <p className="text-gray-700">
                    Connecting and consolidating data across four operational hospitals without disrupting patient care
                    or critical healthcare operations.
                  </p>
                </div>

                <div className="timeline-item">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    <FontAwesomeIcon icon={faTachometerAlt} className="text-red-500 mr-3" />
                    Data Accuracy &amp; Speed
                  </h3>
                  <p className="text-gray-700">
                    Ensuring real-time monitoring using the Modbus TCP protocol with minimal latency for critical
                    healthcare infrastructure systems.
                  </p>
                </div>

                <div className="timeline-item">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    <FontAwesomeIcon icon={faUsers} className="text-red-500 mr-3" />
                    User-Friendly HMI
                  </h3>
                  <p className="text-gray-700">
                    Designing a control interface that hospital facility teams could navigate efficiently with minimal
                    training while maintaining full functionality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="solution-card">
              <div className="solution-icon section-icon">
                <FontAwesomeIcon icon={faLightbulb} />
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Comprehensive Solution</h2>
              <p className="text-lg text-gray-700 mb-8">
                We successfully supplied, installed, and commissioned a <strong>PC-based SCADA/HMI system</strong>{" "}
                capable of centralizing control and monitoring across all four hospital locations using Modbus TCP/IP
                for reliable communication.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    <FontAwesomeIcon icon={faDesktop} className="text-blue-600 mr-3" />
                    Custom SCADA/HMI System
                  </h3>
                  <p className="text-gray-700 mb-4">
                    A custom HMI interface tailored to display alarms, trends, and diagnostics with integration to
                    existing PLCs and BMS components for seamless operation.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>Custom HMI interface</li>
                    <li>Real-time alarms &amp; trends</li>
                    <li>Existing PLC integration</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    <FontAwesomeIcon icon={faShieldAlt} className="text-green-600 mr-3" />
                    Secure Network Design
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Data logging and reporting features for audits and predictive maintenance with secure network
                    design for remote access and built-in cybersecurity protocols.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>Data logging &amp; reporting</li>
                    <li>Secure remote access</li>
                    <li>Cybersecurity protocols</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  <FontAwesomeIcon icon={faCogs} className="text-purple-600 mr-3" />
                  Seamless Implementation
                </h3>
                <p className="text-gray-700">
                  Each hospital's systems were linked to the central SCADA unit without interrupting ongoing
                  operations, thanks to careful scheduling and temporary parallel testing. The Modbus TCP/IP protocol
                  ensured reliable field device communication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="advantage-card">
              <div className="advantage-icon section-icon">
                <FontAwesomeIcon icon={faTrophy} />{/* If you use this, import faTrophy */}
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6">Project Benefits &amp; Advantages</h2>
              <p className="text-lg text-gray-700 mb-8">
                This advanced SCADA/HMI system delivers comprehensive benefits to hospital operations, patient care
                standards, and facility management efficiency.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-green-100 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                      <FontAwesomeIcon icon={faEye} className="text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Centralized Oversight</h3>
                  </div>
                  <p className="text-gray-600">
                    Facility managers can now monitor all four hospitals from one location, providing comprehensive
                    visibility and control.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                      <FontAwesomeIcon icon={faTachometerAlt} className="text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Operational Efficiency</h3>
                  </div>
                  <p className="text-gray-600">
                    Faster fault detection and maintenance response through real-time alerts, minimizing equipment
                    downtime.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-purple-100 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                      <FontAwesomeIcon icon={faChartLine} className="text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Data-Driven Decisions</h3>
                  </div>
                  <p className="text-gray-600">
                    Historical data logging supports energy optimization and system diagnostics for better resource
                    management.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-orange-100 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                      <FontAwesomeIcon icon={faExpandArrowsAlt} className="text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Scalability</h3>
                  </div>
                  <p className="text-gray-600">
                    The system is modular and ready for integration with future hospital expansions or IoT devices.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-indigo-100 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center mr-4">
                      <FontAwesomeIcon icon={faClock} className="text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Reduced Downtime</h3>
                  </div>
                  <p className="text-gray-600">
                    Automated control sequences and alarms help prevent major disruptions to critical healthcare systems.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-teal-100 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center mr-4">
                      <FontAwesomeIcon icon={faShieldAlt} className="text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Enhanced Safety</h3>
                  </div>
                  <p className="text-gray-600">
                    Rapid access to system status enhances response during emergencies, improving patient and staff
                    safety.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Project Gallery</h2>
            <p className="text-xl text-gray-600">Visual documentation of the hospital SCADA system implementation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {galleryImages.map((item, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
                onClick={() => openLightbox(idx)}
              >
                <img
                  src={item.src.replace("1200&h=800", "500&h=400")}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur p-3 rounded-full">
                    <FontAwesomeIcon icon={faSearchPlus} className="text-gray-800 text-xl" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.description.split(".")[0]}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Gallery Navigation (optional; currently static) */}
          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={previousImage}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg transition"
            >
              <FontAwesomeIcon icon={faChevronLeft} className="mr-2" />
              Previous
            </button>
            <span className="text-gray-600">{galleryImages.length} Images</span>
            <button
              onClick={nextImage}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg transition"
            >
              Next
              <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="relative max-w-5xl w-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full z-10 transition"
              aria-label="Close"
            >
              <FontAwesomeIcon icon={faTimes} className="text-xl" />
            </button>

            <button
              onClick={previousImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full z-10 transition"
              aria-label="Previous"
            >
              <FontAwesomeIcon icon={faChevronLeft} className="text-xl" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full z-10 transition"
              aria-label="Next"
            >
              <FontAwesomeIcon icon={faChevronRight} className="text-xl" />
            </button>

            <div className="relative">
              <img
                src={galleryImages[currentImageIndex].src}
                alt={galleryImages[currentImageIndex].title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white text-xl font-semibold mb-2">
                  {galleryImages[currentImageIndex].title}
                </h3>
                <p className="text-white/80">{galleryImages[currentImageIndex].description}</p>
              </div>
            </div>

            <div className="text-center mt-4">
              <span className="text-white/70 text-sm">
                Image {currentImageIndex + 1} of {galleryImages.length}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Key Figures */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Key Figures &amp; Technical Facts</h2>
            <p className="text-xl text-gray-600">
              Detailed specifications and measurable outcomes of this healthcare monitoring solution
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faDesktop} className="text-white text-2xl" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">PC-based</div>
              <div className="text-gray-700 font-medium mb-2">SCADA System</div>
              <div className="text-sm text-gray-600">Custom HMI dashboards</div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faNetworkWired} className="text-white text-2xl" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">Modbus</div>
              <div className="text-gray-700 font-medium mb-2">TCP/IP Protocol</div>
              <div className="text-sm text-gray-600">Reliable communication</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faHospital} className="text-white text-2xl" />
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">4</div>
              <div className="text-gray-700 font-medium mb-2">Hospitals Monitored</div>
              <div className="text-sm text-gray-600">Multi-facility integration</div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faClock} className="text-white text-2xl" />
              </div>
              <div className="text-3xl font-bold text-yellow-600 mb-2">Real-time</div>
              <div className="text-gray-700 font-medium mb-2">Monitoring</div>
              <div className="text-sm text-gray-600">Instant alerts &amp; diagnostics</div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faShieldAlt} className="text-white text-2xl" />
              </div>
              <div className="text-3xl font-bold text-red-600 mb-2">Secure</div>
              <div className="text-gray-700 font-medium mb-2">Network Design</div>
              <div className="text-sm text-gray-600">Cybersecurity protocols</div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faUsers} className="text-white text-2xl" />
              </div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">Tiered</div>
              <div className="text-gray-700 font-medium mb-2">User Access</div>
              <div className="text-sm text-gray-600">Permission levels</div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Related Projects</h2>
            <p className="text-lg text-gray-600">Explore our other industrial and infrastructure solutions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProjects.map((project) => (
              <Link
                key={project.id}
                to={project.route}
                className="block group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-48 bg-gradient-to-br from-emerald-400 to-green-600 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  {project.capacity && (
                    <div className="absolute top-4 left-4 bg-white/20 backdrop-blur px-3 py-1 rounded-full text-white text-sm font-medium">
                      {project.capacity}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex items-center text-green-600 font-medium">
                    <span>View Project</span>
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default HospitalScada;
