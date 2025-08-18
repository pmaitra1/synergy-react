// src/pages/PowerQuality.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import "../style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faChevronRight,
  faIndustry,
  faWaveSquare,
  faCertificate,
  faOilCan,
  faChartLine,
  faClipboardCheck,
  faExclamationTriangle,
  faCogs,
  faClock,
  faBullseye,
  faLightbulb,
  faTrophy,
  faTools,
  faChartBar,
  faWrench,
  faShieldAlt,
  faScaleBalanced, // Font Awesome v6 name (v5 = faBalanceScale)
  faMicrochip,
  faSearchPlus,
  faChevronLeft,
  faChevronRight as faChevronRightSolid,
  faTimes,
  faRoad, // <-- missing import fixed
} from "@fortawesome/free-solid-svg-icons";

const PowerQuality = () => {
  // Gallery images
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1581092795442-7a7e6d8b5a01?w=1200&h=800&fit=crop&crop=center",
      title: "Refinery Overview",
      description:
        "Qatar Energy's Mesaieed Refinery facility showcasing the complex industrial infrastructure requiring comprehensive power quality analysis for optimal operations.",
    },
    {
      src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=800&fit=crop&crop=center",
      title: "Power Quality Analyzer",
      description:
        "Blackbox G4500 high-precision power quality analyzer deployed for 24-hour continuous monitoring of electrical parameters across the refinery network.",
    },
    {
      src: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&h=800&fit=crop&crop=center",
      title: "Electrical Infrastructure",
      description:
        "Strategic monitoring points across the refinery's high-voltage electrical infrastructure for comprehensive power quality assessment and analysis.",
    },
    {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&crop=center",
      title: "Data Analysis",
      description:
        "Comprehensive analysis of THD levels, voltage imbalance, transient spikes, and power factor trends captured during multiple operational cycles.",
    },
    {
      src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=800&fit=crop&crop=center",
      title: "Professional Installation",
      description:
        "Synergy Gulf's expert team installing and configuring analyzers during live operations without disrupting essential refinery processes.",
    },
    {
      src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop&crop=center",
      title: "Compliance Report",
      description:
        "Detailed power quality assessment report with IEEE 519 and IEC 61000 standards compliance verification and actionable recommendations.",
    },
  ];

  // Lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (i) => {
    setCurrentImageIndex(i);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };
  const nextImage = () =>
    setCurrentImageIndex((p) => (p + 1) % galleryImages.length);
  const previousImage = () =>
    setCurrentImageIndex((p) => (p - 1 + galleryImages.length) % galleryImages.length);

  // Keyboard nav
  useEffect(() => {
    const onKey = (e) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") previousImage();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen]);

  // Related projects (exclude this page by its id in your data)
  const relatedProjects = projects.filter((p) => p.id !== "power-quality");

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
            <span className="text-gray-800 font-medium">Mesaieed Refinery Analysis</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="project-hero py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>

        {/* floating decor */}
        <div className="absolute top-20 right-20 w-20 h-20 bg-white/10 rounded-full floating-animation"></div>
        <div
          className="absolute bottom-40 left-20 w-16 h-16 bg-white/10 rounded-full floating-animation"
          style={{ animationDelay: "-2s" }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/20 px-4 py-2 rounded-full mb-6">
                <FontAwesomeIcon icon={faIndustry} className="mr-2" />
                <span className="text-sm font-medium">Oil & Gas Power Systems</span>
              </div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Power Quality Analysis at <span className="text-yellow-400">Mesaieed</span> Refinery
              </h1>
              <p className="text-xl text-gray-100 mb-8 leading-relaxed">
                Comprehensive power quality measurement and analysis for Qatar Energy's critical refinery infrastructure,
                ensuring optimal electrical system performance and compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="glass-effect px-6 py-3 rounded-lg">
                  <div className="text-sm text-gray-200">Client</div>
                  <div className="font-semibold">Qatar Energy</div>
                </div>
                <div className="glass-effect px-6 py-3 rounded-lg">
                  <div className="text-sm text-gray-200">Standards</div>
                  <div className="font-semibold">IEEE 519 &amp; IEC 61000</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="glass-effect p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-center">Project Overview</h3>
                <div className="stats-grid">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">24 Hours</div>
                    <div className="text-white/80 text-sm">Monitoring Duration</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">G4500</div>
                    <div className="text-white/80 text-sm">Blackbox Analyzer</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">IEEE</div>
                    <div className="text-white/80 text-sm">Standards Compliance</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">THD</div>
                    <div className="text-white/80 text-sm">Analysis</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faWaveSquare} className="text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-800 mb-2">Power Quality</div>
              <div className="text-gray-600">Analysis &amp; Measurement</div>
            </div>

            <div className="stat-card">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faCertificate} className="text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-800 mb-2">IEEE/IEC</div>
              <div className="text-gray-600">Standards Compliance</div>
            </div>

            <div className="stat-card">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faOilCan} className="text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-800 mb-2">Qatar Energy</div>
              <div className="text-gray-600">Mesaieed Refinery</div>
            </div>

            <div className="stat-card">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faChartLine} className="text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-800 mb-2">High Precision</div>
              <div className="text-gray-600">G4500 Analyzer</div>
            </div>
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Project Background</h2>
              <p className="text-xl text-gray-600">
                Ensuring electrical system reliability for critical energy infrastructure
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>Mesaieed Refinery</strong>, a critical energy facility under Qatar Energy, operates with
                high-voltage electrical infrastructure to support its round-the-clock industrial processing. Ensuring
                consistent power quality is crucial to maintain equipment efficiency, protect sensitive controls, and
                meet international energy compliance standards.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                To evaluate system health and mitigate operational risks, a comprehensive{" "}
                <strong>Power Quality Measurement and Analysis</strong> was undertaken. The initiative aimed to detect
                electrical anomalies—such as harmonics, transients, voltage sags, and imbalance—that can compromise
                plant operations and asset life.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-green-100 rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                    <FontAwesomeIcon icon={faIndustry} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Refinery Operations</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li><span className="text-green-500 mr-2">•</span>High-voltage electrical infrastructure</li>
                  <li><span className="text-green-500 mr-2">•</span>Round-the-clock industrial processing</li>
                  <li><span className="text-green-500 mr-2">•</span>Critical energy facility operations</li>
                  <li><span className="text-green-500 mr-2">•</span>Qatar Energy main refinery</li>
                </ul>
              </div>

              <div className="bg-white border border-blue-100 rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <FontAwesomeIcon icon={faClipboardCheck} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Compliance Standards</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li><span className="text-blue-500 mr-2">•</span>IEEE 519 power quality standards</li>
                  <li><span className="text-blue-500 mr-2">•</span>IEC 61000-4-30 measurement standards</li>
                  <li><span className="text-blue-500 mr-2">•</span>IEC 61000-4-7 harmonic analysis</li>
                  <li><span className="text-blue-500 mr-2">•</span>International energy compliance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="challenge-card">
              <div className="challenge-icon section-icon">
                <FontAwesomeIcon icon={faExclamationTriangle} />
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6">The Challenge</h2>
              <p className="text-lg text-gray-700 mb-8">
                Conducting comprehensive power quality analysis in a critical refinery environment required addressing
                complex technical and operational challenges.
              </p>

              <div className="space-y-6">
                <div className="timeline-item">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    <FontAwesomeIcon icon={faCogs} className="text-red-500 mr-3" />
                    Complex Load Environment
                  </h3>
                  <p className="text-gray-700">
                    The refinery operates with diverse electrical loads (motors, drives, inverters), generating
                    potential harmonic distortion and voltage fluctuations requiring precise analysis.
                  </p>
                </div>

                <div className="timeline-item">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    <FontAwesomeIcon icon={faClock} className="text-red-500 mr-3" />
                    Critical System Uptime
                  </h3>
                  <p className="text-gray-700">
                    Measurement had to be conducted without interrupting essential refinery operations, requiring
                    careful planning and non-intrusive monitoring techniques.
                  </p>
                </div>

                <div className="timeline-item">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    <FontAwesomeIcon icon={faBullseye} className="text-red-500 mr-3" />
                    High Accuracy Requirements
                  </h3>
                  <p className="text-gray-700">
                    Data collection and analysis needed to meet international standards such as IEEE 519 and IEC
                    61000-4-30 for regulatory compliance and system optimization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="solution-card">
              <div className="solution-icon section-icon">
                <FontAwesomeIcon icon={faLightbulb} />
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Comprehensive Solution</h2>
              <p className="text-lg text-gray-700 mb-8">
                We deployed <strong>high-precision Power Quality Analyzers</strong> at strategic points across the
                refinery's electrical network, providing detailed assessment and compliance verification.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    <FontAwesomeIcon icon={faChartLine} className="text-blue-600 mr-3" />
                    Advanced Monitoring System
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Real-time monitoring of voltage, current, power factor, harmonic distortion (THD), flicker, and
                    imbalance using Blackbox G4500 power quality analyzers.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>Blackbox G4500 analyzers</li>
                    <li>24-hour continuous logging</li>
                    <li>Multiple operational cycles</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    <FontAwesomeIcon icon={faClipboardCheck} className="text-green-600 mr-3" />
                    Standards Compliance Analysis
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Comparative analysis against IEEE/IEC standards with a detailed assessment report including
                    actionable recommendations for system enhancement.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>IEEE 519 compliance verification</li>
                    <li>IEC 61000 standards reference</li>
                    <li>Detailed assessment report</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  <FontAwesomeIcon icon={faCogs} className="text-purple-600 mr-3" />
                  Live Operations Implementation
                </h3>
                <p className="text-gray-700">
                  The analyzers were installed and configured during live operations, ensuring no disruption to refinery
                  processes. Special attention was given to grounding, CT/PT calibration, and shielding to preserve
                  signal integrity and measurement accuracy.
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
                <FontAwesomeIcon icon={faTrophy} />
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6">Project Benefits &amp; Advantages</h2>
              <p className="text-lg text-gray-700 mb-8">
                This comprehensive power quality analysis delivers critical insights for refinery operations, equipment
                reliability, and regulatory compliance.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-green-100 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                      <FontAwesomeIcon icon={faTools} className="text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Improved Equipment Reliability</h3>
                  </div>
                  <p className="text-gray-600">
                    Identified and mitigated power quality issues that could affect motors, transformers, and sensitive
                    instruments, extending asset life.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                      <FontAwesomeIcon icon={faChartBar} className="text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Energy Optimization</h3>
                  </div>
                  <p className="text-gray-600">
                    Insights enabled better energy usage patterns and reactive power management, improving overall
                    system efficiency.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-purple-100 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                      <FontAwesomeIcon icon={faCertificate} className="text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Regulatory Compliance</h3>
                  </div>
                  <p className="text-gray-600">
                    Verified conformance to global standards, reducing the risk of penalties or failures while ensuring
                    operational compliance.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-orange-100 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                      <FontAwesomeIcon icon={faWrench} className="text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Predictive Maintenance</h3>
                  </div>
                  <p className="text-gray-600">
                    Early detection of electrical anomalies reduced the likelihood of unplanned outages and equipment
                    failures.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-indigo-100 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center mr-4">
                      <FontAwesomeIcon icon={faRoad} className="text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Strategic Planning</h3>
                  </div>
                  <p className="text-gray-600">
                    Report findings supported future upgrades such as harmonic filters or capacitor bank adjustments for
                    system enhancement.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-teal-100 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center mr-4">
                      <FontAwesomeIcon icon={faShieldAlt} className="text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Risk Mitigation</h3>
                  </div>
                  <p className="text-gray-600">
                    Actionable recommendations for risk mitigation and system reliability improvement.
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
            <p className="text-xl text-gray-600">Visual documentation of the power quality analysis implementation</p>
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
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

          {/* Optional static nav */}
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
              <FontAwesomeIcon icon={faChevronRightSolid} className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
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
              <FontAwesomeIcon icon={faChevronRightSolid} className="text-xl" />
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
              Detailed specifications and measurable outcomes of this power quality analysis
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faMicrochip} className="text-white text-2xl" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">G4500</div>
              <div className="text-gray-700 font-medium mb-2">Blackbox Analyzer</div>
              <div className="text-sm text-gray-600">High-precision equipment</div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faClock} className="text-white text-2xl" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24 Hours</div>
              <div className="text-gray-700 font-medium mb-2">Monitoring Duration</div>
              <div className="text-sm text-gray-600">Continuous logging</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faCertificate} className="text-white text-2xl" />
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">IEEE 519</div>
              <div className="text-gray-700 font-medium mb-2">Standards Referenced</div>
              <div className="text-sm text-gray-600">&amp; IEC 61000 series</div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faWaveSquare} className="text-white text-2xl" />
              </div>
              <div className="text-3xl font-bold text-yellow-600 mb-2">THD</div>
              <div className="text-gray-700 font-medium mb-2">Harmonic Analysis</div>
              <div className="text-sm text-gray-600">Distortion levels tracked</div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faScaleBalanced} className="text-white text-2xl" />
              </div>
              <div className="text-3xl font-bold text-red-600 mb-2">Voltage</div>
              <div className="text-gray-700 font-medium mb-2">&amp; Current Imbalance</div>
              <div className="text-sm text-gray-600">Measured &amp; analyzed</div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faOilCan} className="text-white text-2xl" />
              </div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">Qatar Energy</div>
              <div className="text-gray-700 font-medium mb-2">Client</div>
              <div className="text-sm text-gray-600">Mesaieed Refinery</div>
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

export default PowerQuality;
