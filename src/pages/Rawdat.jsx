import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { projects } from '../data/projects';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import '../style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faChevronRight,
  faSolarPanel,
  faMapMarkerAlt,
  faBolt,
  faLeaf,
  faDollarSign,
  faCheckCircle,
  faChartLine,
  faQuoteRight,
  faPhone,
  faBuilding,
  faUsers
} from '@fortawesome/free-solid-svg-icons';

const Rawdat = () => {

  // Gallery images data
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=800&fit=crop&crop=center",
      title: "Flexible Solar Panel Installation",
      description: "State-of-the-art flexible solar panels installed on the park's walkway structures, maximizing energy capture while maintaining aesthetic appeal."
    },
    {
      src: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&h=800&fit=crop&crop=center",
      title: "Grid Connection System",
      description: "Advanced inverters and electrical infrastructure enabling seamless integration with Qatar's national power grid."
    },
    {
      src: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1200&h=800&fit=crop&crop=center",
      title: "Monitoring System",
      description: "Real-time performance monitoring system providing detailed analytics on energy production and system efficiency."
    },
    {
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop&crop=center",
      title: "Park Overview",
      description: "Aerial view of Rawdat Al Hamama Park showing the integrated solar solution that powers the air-conditioned walkway."
    },
    {
      src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=800&fit=crop&crop=center",
      title: "Professional Installation",
      description: "Synergy Gulf's expert installation team ensuring precise placement and optimal performance of every solar panel."
    },
    {
      src: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&h=800&fit=crop&crop=center",
      title: "Performance Dashboard",
      description: "Comprehensive performance dashboard displaying real-time energy production, grid feed-in, and system health metrics."
    }
  ];

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [mobileDropdowns, setMobileDropdowns] = React.useState({ services: false, projects: false });

  // Lightbox handlers
  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  // Keyboard navigation for lightbox
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxOpen) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') previousImage();
        if (e.key === 'ArrowRight') nextImage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  // Mobile menu handlers
  const toggleMobileMenu = () => {
    setMobileMenuOpen((open) => !open);
  };

  const toggleMobileDropdown = (dropdownName) => {
    setMobileDropdowns((prev) => ({ ...prev, [dropdownName]: !prev[dropdownName] }));
  };

  // Close mobile menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = document.getElementById('mobileMenu');
      const menuButton = event.target.closest('button');
      if (menu && !menu.contains(event.target) && !menuButton) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Smooth scrolling for anchor links
  React.useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    const handleAnchorClick = function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      setMobileMenuOpen(false);
    };
    anchors.forEach(anchor => anchor.addEventListener('click', handleAnchorClick));
    return () => anchors.forEach(anchor => anchor.removeEventListener('click', handleAnchorClick));
  }, []);

  // Related projects (exclude this project)
  const relatedProjects = projects.filter(p => p.id !== 'solar-doha');

  return (
    <div className="bg-gray-50 text-gray-800 antialiased">
      <NavBar />

      
   <section className="breadcrumb pt-36 pb-6">
  <div className="max-w-7xl mx-auto px-6">
    <nav className="flex items-center space-x-2 text-sm bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 w-fit">
      <Link to="/" className="text-gray-500 hover:text-green-600 transition">
        <FontAwesomeIcon icon={faHome} className="mr-1" /> Home
      </Link>

      <FontAwesomeIcon icon={faChevronRight} className="text-gray-400 text-xs" />

      <Link to="/#projects" className="text-gray-500 hover:text-green-600 transition">
        Projects
      </Link>

      <FontAwesomeIcon icon={faChevronRight} className="text-gray-400 text-xs" />

      <span className="text-gray-800 font-medium">Rawdat Al Hamama Park</span>
    </nav>
  </div>
</section>


      <section className="project-hero py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-20 h-20 bg-white/10 rounded-full floating-animation"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-white/10 rounded-full floating-animation" style={{ animationDelay: '-2s' }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/20 px-4 py-2 rounded-full mb-6">
                <FontAwesomeIcon icon={faSolarPanel} className="mr-2" />
                <span className="text-sm font-medium">Solar Energy Project</span>
              </div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                251.6 kWp Flexible Solar System at <span className="text-yellow-400">Rawdat Al Hamama</span> Public Park
              </h1>
              <p className="text-xl text-gray-100 mb-8 leading-relaxed">
                A landmark renewable energy installation for Public Works Authority (Ashghal), featuring innovative flexible solar panels to power the park's air-conditioned walkway and facilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="glass-effect px-6 py-3 rounded-lg">
                  <div className="text-sm text-gray-200">Client</div>
                  <div className="font-semibold">Public Works Authority (Ashghal)</div>
                </div>
                <div className="glass-effect px-6 py-3 rounded-lg">
                  <div className="text-sm text-gray-200">Location</div>
                  <div className="font-semibold">Rawdat Al Hamama Park, Qatar</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="glass-effect p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-center">Project Overview</h3>
                <div className="stats-grid">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">251.6kWp</div>
                    <div className="text-white/80 text-sm">System Capacity</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">Grid-Tied</div>
                    <div className="text-white/80 text-sm">System Type</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">Flexible</div>
                    <div className="text-white/80 text-sm">Solar Panels</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">Public</div>
                    <div className="text-white/80 text-sm">Infrastructure</div>
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
            <FontAwesomeIcon icon={faBolt} className="text-white" />
          </div>
          <div className="text-2xl font-bold text-gray-800 mb-2">251.6 kWp</div>
          <div className="text-gray-600">Total Installed Capacity</div>
        </div>
        <div className="stat-card">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <FontAwesomeIcon icon={faLeaf} className="text-white" />
          </div>
          <div className="text-2xl font-bold text-gray-800 mb-2">CO₂ Reduced</div>
          <div className="text-gray-600">Environmental Impact</div>
        </div>
        <div className="stat-card">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <FontAwesomeIcon icon={faBuilding} className="text-white" />
          </div>
          <div className="text-2xl font-bold text-gray-800 mb-2">Ashghal</div>
          <div className="text-gray-600">Government Client</div>
        </div>
        <div className="stat-card">
          <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <FontAwesomeIcon icon={faUsers} className="text-white" />
          </div>
          <div className="text-2xl font-bold text-gray-800 mb-2">Public</div>
          <div className="text-gray-600">Park Visitors Served</div>
        </div>
      </div>
    </div>
  </section>

  {/* Project Background */}
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">Project Background</h2>
          <p class="text-xl text-gray-600">Understanding the context and objectives behind this innovative solar installation</p>
        </div>
        
        <div class="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl mb-12">
          <p class="text-lg text-gray-700 leading-relaxed mb-6">
            Rawdat Al Hamama Public Park, a prominent public recreational area in Qatar, boasts a large air-conditioned walkway, along with various public amenities that require consistent electricity for lighting, air conditioning, and other services. The park's high electricity consumption was previously supplied by the national grid, contributing to significant operational costs and a higher environmental footprint.
          </p>
          <p class="text-lg text-gray-700 leading-relaxed">
            With Qatar's commitment to sustainable energy solutions, the park aimed to integrate a <strong>renewable energy source</strong> to reduce electricity costs and emissions, while promoting environmental responsibility in public infrastructure development.
          </p>
        </div>
        
        {/* Key Features */}
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white border border-green-100 rounded-xl p-6 shadow-sm">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                <i class="fas fa-map-marker-alt text-white"></i>
              </div>
              <h3 class="text-lg font-semibold text-gray-800">Location Details</h3>
            </div>
            <ul class="space-y-2 text-gray-600">
              <li><i class="fas fa-check text-green-500 mr-2"></i>Rawdat Al Hamama Park, Qatar</li>
              <li><i class="fas fa-check text-green-500 mr-2"></i>Prominent public recreational area</li>
              <li><i class="fas fa-check text-green-500 mr-2"></i>Air-conditioned walkway facility</li>
              <li><i class="fas fa-check text-green-500 mr-2"></i>Various public amenities</li>
            </ul>
          </div>
          
          <div class="bg-white border border-blue-100 rounded-xl p-6 shadow-sm">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                <i class="fas fa-industry text-white"></i>
              </div>
              <h3 class="text-lg font-semibold text-gray-800">Industry & Sector</h3>
            </div>
            <ul class="space-y-2 text-gray-600">
              <li><i class="fas fa-check text-blue-500 mr-2"></i>Public Infrastructure</li>
              <li><i class="fas fa-check text-blue-500 mr-2"></i>Sustainability Initiative</li>
              <li><i class="fas fa-check text-blue-500 mr-2"></i>Government Project</li>
              <li><i class="fas fa-check text-blue-500 mr-2"></i>Environmental Responsibility</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* The Challenge */}
  <section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-6">
      <div class="max-w-4xl mx-auto">
        <div class="challenge-card">
          <div class="challenge-icon section-icon">
            <i class="fas fa-exclamation-triangle"></i>
          </div>
          
          <h2 class="text-3xl font-bold text-gray-800 mb-6">The Challenge</h2>
          <p class="text-lg text-gray-700 mb-8">
            The project posed several critical challenges that required innovative engineering solutions and careful planning to ensure successful implementation without disrupting park operations.
          </p>
          
          <div class="space-y-6">
            <div class="timeline-item">
              <h3 class="text-xl font-semibold text-gray-800 mb-3">
                <i class="fas fa-snowflake text-red-500 mr-3"></i>Powering the Air-Conditioned Walkway
              </h3>
              <p class="text-gray-700">
                The park's air-conditioned walkway needed a reliable and uninterrupted energy supply to maintain visitor comfort, particularly during Qatar's extreme heat conditions where temperatures can exceed 45°C.
              </p>
            </div>
            
            <div class="timeline-item">
              <h3 class="text-xl font-semibold text-gray-800 mb-3">
                <i class="fas fa-compress-arrows-alt text-red-500 mr-3"></i>Space Limitations
              </h3>
              <p class="text-gray-700">
                The park's available space for solar installations was limited, requiring careful planning to ensure the system would generate sufficient energy without overcrowding the park's infrastructure or affecting its aesthetic appeal.
              </p>
            </div>
            
            <div class="timeline-item">
              <h3 class="text-xl font-semibold text-gray-800 mb-3">
                <i class="fas fa-plug text-red-500 mr-3"></i>Grid Integration Requirements
              </h3>
              <p class="text-gray-700">
                The solar system needed to be effectively integrated with the national grid to ensure any surplus energy produced could be sent back, allowing for efficient energy management and potential revenue generation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* The Solution */}
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="max-w-4xl mx-auto">
        <div class="solution-card">
          <div class="solution-icon section-icon">
            <i class="fas fa-lightbulb"></i>
          </div>
          
          <h2 class="text-3xl font-bold text-gray-800 mb-6">Our Innovative Solution</h2>
          <p class="text-lg text-gray-700 mb-8">
            We successfully designed, supplied, installed, tested, and commissioned a comprehensive <strong>251.6 kWp grid-tied solar power system</strong> using cutting-edge flexible solar panels, maximizing energy production while working within the park's spatial constraints.
          </p>
          
          <div class="grid md:grid-cols-2 gap-8 mb-8">
            <div class="bg-blue-50 p-6 rounded-xl">
              <h3 class="text-xl font-semibold text-gray-800 mb-4">
                <i class="fas fa-solar-panel text-blue-600 mr-3"></i>Flexible Solar Technology
              </h3>
              <p class="text-gray-700 mb-4">
                Utilized innovative flexible solar panels that could be installed on irregular or curved surfaces, including rooftops, walkways, and other suitable surfaces throughout the park.
              </p>
              <ul class="space-y-2 text-gray-600">
                <li><i class="fas fa-check text-blue-500 mr-2"></i>Adaptive to curved surfaces</li>
                <li><i class="fas fa-check text-blue-500 mr-2"></i>Lightweight installation</li>
                <li><i class="fas fa-check text-blue-500 mr-2"></i>Maximized space utilization</li>
              </ul>
            </div>
            
            <div class="bg-green-50 p-6 rounded-xl">
              <h3 class="text-xl font-semibold text-gray-800 mb-4">
                <i class="fas fa-network-wired text-green-600 mr-3"></i>Grid Integration
              </h3>
              <p class="text-gray-700 mb-4">
                Seamlessly connected to the local utility grid, enabling the park to feed surplus energy back during peak solar production times, reducing costs and supporting the local grid.
              </p>
              <ul class="space-y-2 text-gray-600">
                <li><i class="fas fa-check text-green-500 mr-2"></i>Bidirectional energy flow</li>
                <li><i class="fas fa-check text-green-500 mr-2"></i>Smart grid connectivity</li>
                <li><i class="fas fa-check text-green-500 mr-2"></i>Real-time monitoring</li>
              </ul>
            </div>
          </div>
          
          <div class="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-xl">
            <h3 class="text-xl font-semibold text-gray-800 mb-4">
              <i class="fas fa-cogs text-purple-600 mr-3"></i>Complete Turnkey Solution
            </h3>
            <p class="text-gray-700">
              Our comprehensive approach included design optimization for the park's unique layout, professional installation with minimal disruption to park operations, rigorous testing protocols, and full commissioning to ensure optimal performance from day one.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* The Advantages */}
  <section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-6">
      <div class="max-w-4xl mx-auto">
        <div class="advantage-card">
          <div class="advantage-icon section-icon">
            <i class="fas fa-trophy"></i>
          </div>
          
          <h2 class="text-3xl font-bold text-gray-800 mb-6">Project Benefits & Advantages</h2>
          <p class="text-lg text-gray-700 mb-8">
            This innovative solar installation delivers multiple benefits to the park, its visitors, and the broader community, setting a new standard for sustainable public infrastructure in Qatar.
          </p>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-6 rounded-xl border border-green-100 shadow-sm">
              <div class="flex items-center mb-4">
                <div class="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                  <i class="fas fa-leaf text-white"></i>
                </div>
                <h3 class="text-lg font-semibold text-gray-800">Environmental Sustainability</h3>
              </div>
              <p class="text-gray-600">
                Substantial reduction in the park's carbon emissions and dependency on fossil fuel-based electricity, advancing Qatar's environmental goals.
              </p>
            </div>
            
            <div class="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
              <div class="flex items-center mb-4">
                <div class="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <i class="fas fa-dollar-sign text-white"></i>
                </div>
                <h3 class="text-lg font-semibold text-gray-800">Cost Savings</h3>
              </div>
              <p class="text-gray-600">
                Significant reductions in electricity costs, with potential revenue from surplus energy returned to the grid.
              </p>
            </div>
            
            <div class="bg-white p-6 rounded-xl border border-purple-100 shadow-sm">
              <div class="flex items-center mb-4">
                <div class="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <i class="fas fa-expand-arrows-alt text-white"></i>
                </div>
                <h3 class="text-lg font-semibold text-gray-800">Space Efficiency</h3>
              </div>
              <p class="text-gray-600">
                Flexible solar panels enabled installation in areas that traditional rigid panels couldn't fit, maximizing energy capture.
              </p>
            </div>
            
            <div class="bg-white p-6 rounded-xl border border-orange-100 shadow-sm">
              <div class="flex items-center mb-4">
                <div class="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                  <i class="fas fa-battery-full text-white"></i>
                </div>
                <h3 class="text-lg font-semibold text-gray-800">Energy Independence</h3>
              </div>
              <p class="text-gray-600">
                The park now relies on renewable energy, decreasing dependence on conventional grid power during peak sunlight hours.
              </p>
            </div>
            
            <div class="bg-white p-6 rounded-xl border border-indigo-100 shadow-sm">
              <div class="flex items-center mb-4">
                <div class="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center mr-4">
                  <i class="fas fa-chart-line text-white"></i>
                </div>
                <h3 class="text-lg font-semibold text-gray-800">Scalability</h3>
              </div>
              <p class="text-gray-600">
                The system is designed for future expansion, with flexibility to meet growing energy needs as the park evolves.
              </p>
            </div>
            
            <div class="bg-white p-6 rounded-xl border border-teal-100 shadow-sm">
              <div class="flex items-center mb-4">
                <div class="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center mr-4">
                  <i class="fas fa-award text-white"></i>
                </div>
                <h3 class="text-lg font-semibold text-gray-800">Public Demonstration</h3>
              </div>
              <p class="text-gray-600">
                Serves as a showcase for renewable energy adoption in public infrastructure across Qatar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Project Gallery */}
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Project Gallery</h2>
        <p className="text-xl text-gray-600">Visual documentation of the installation process and final results</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {/* Gallery Item 1 - Main Installation */}
        <div className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer" onClick={() => openLightbox(0)}>
          <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&h=400&fit=crop&crop=center"
               alt="Flexible solar panels installation on park walkway"
               className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/90 backdrop-blur p-3 rounded-full">
              <i className="fas fa-search-plus text-gray-800 text-xl"></i>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <h3 className="text-white font-semibold">Flexible Solar Panel Installation</h3>
            <p className="text-white/80 text-sm">Main walkway solar array</p>
          </div>
        </div>
        {/* Gallery Item 2 - Grid Connection */}
        <div className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer" onClick={() => openLightbox(1)}>
          <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=500&h=400&fit=crop&crop=center"
               alt="Grid connection and inverter installation"
               className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/90 backdrop-blur p-3 rounded-full">
              <i className="fas fa-search-plus text-gray-800 text-xl"></i>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <h3 className="text-white font-semibold">Grid Connection System</h3>
            <p className="text-white/80 text-sm">Inverters and electrical infrastructure</p>
          </div>
        </div>
        {/* Gallery Item 3 - Monitoring System */}
        <div className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer" onClick={() => openLightbox(2)}>
          <img src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=400&fit=crop&crop=center"
               alt="Solar monitoring and control system"
               className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/90 backdrop-blur p-3 rounded-full">
              <i className="fas fa-search-plus text-gray-800 text-xl"></i>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <h3 className="text-white font-semibold">Monitoring System</h3>
            <p className="text-white/80 text-sm">Real-time performance tracking</p>
          </div>
        </div>
        {/* Gallery Item 4 - Park Overview */}
        <div className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer" onClick={() => openLightbox(3)}>
          <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=400&fit=crop&crop=center"
               alt="Rawdat Al Hamama Park overview with solar installation"
               className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/90 backdrop-blur p-3 rounded-full">
              <i className="fas fa-search-plus text-gray-800 text-xl"></i>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <h3 className="text-white font-semibold">Park Overview</h3>
            <p className="text-white/80 text-sm">Integrated solar solution</p>
          </div>
        </div>
        {/* Gallery Item 5 - Installation Team */}
        <div className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer" onClick={() => openLightbox(4)}>
          <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&h=400&fit=crop&crop=center"
               alt="Synergy Gulf installation team at work"
               className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/90 backdrop-blur p-3 rounded-full">
              <i className="fas fa-search-plus text-gray-800 text-xl"></i>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <h3 className="text-white font-semibold">Professional Installation</h3>
            <p className="text-white/80 text-sm">Expert Synergy Gulf team</p>
          </div>
        </div>
        {/* Gallery Item 6 - System Performance */}
        <div className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer" onClick={() => openLightbox(5)}>
          <img src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=500&h=400&fit=crop&crop=center"
               alt="Solar system performance dashboard"
               className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/90 backdrop-blur p-3 rounded-full">
              <i className="fas fa-search-plus text-gray-800 text-xl"></i>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <h3 className="text-white font-semibold">Performance Dashboard</h3>
            <p className="text-white/80 text-sm">Real-time energy production data</p>
          </div>
        </div>
      </div>
      {/* Gallery Navigation */}
      <div className="flex justify-center items-center space-x-4">
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg transition">
          <i className="fas fa-chevron-left mr-2"></i>Previous
        </button>
        <span className="text-gray-600">6 Images</span>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg transition">
          Next<i className="fas fa-chevron-right ml-2"></i>
        </button>
      </div>
    </div>
  </section>

  {/* Lightbox Modal (React State Controlled) */}
  {lightboxOpen && (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="relative max-w-5xl w-full">
        {/* Close Button */}
        <button onClick={closeLightbox} className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full z-10 transition" aria-label="Close">
          <i className="fas fa-times text-xl"></i>
        </button>
        {/* Previous Button */}
        <button onClick={previousImage} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full z-10 transition" aria-label="Previous">
          <i className="fas fa-chevron-left text-xl"></i>
        </button>
        {/* Next Button */}
        <button onClick={nextImage} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full z-10 transition" aria-label="Next">
          <i className="fas fa-chevron-right text-xl"></i>
        </button>
        {/* Image Container */}
        <div className="relative">
          <img
            src={galleryImages[currentImageIndex].src}
            alt={galleryImages[currentImageIndex].title}
            className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
          />
          {/* Image Info */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <h3 className="text-white text-xl font-semibold mb-2">{galleryImages[currentImageIndex].title}</h3>
            <p className="text-white/80">{galleryImages[currentImageIndex].description}</p>
          </div>
        </div>
        {/* Image Counter */}
        <div className="text-center mt-4">
          <span className="text-white/70 text-sm">
            Image {currentImageIndex + 1} of {galleryImages.length}
          </span>
        </div>
      </div>
    </div>
  )}

  {/* Key Figures and Facts */}
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Key Figures & Technical Facts</h2>
        <p className="text-xl text-gray-600">Detailed specifications and measurable outcomes of this landmark project</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl text-center">
          <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-bolt text-white text-2xl"></i>
          </div>
          <div className="text-3xl font-bold text-green-600 mb-2">251.6 kWp</div>
          <div className="text-gray-700 font-medium mb-2">Total Installed Capacity</div>
          <div className="text-sm text-gray-600">High-efficiency flexible PV modules</div>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl text-center">
          <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-solar-panel text-white text-2xl"></i>
          </div>
          <div className="text-3xl font-bold text-blue-600 mb-2">Flexible</div>
          <div className="text-gray-700 font-medium mb-2">Solar Module Type</div>
          <div className="text-sm text-gray-600">Ideal for irregular surfaces</div>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl text-center">
          <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-plug text-white text-2xl"></i>
          </div>
          <div className="text-3xl font-bold text-purple-600 mb-2">Grid-Tied</div>
          <div className="text-gray-700 font-medium mb-2">System Configuration</div>
          <div className="text-sm text-gray-600">Bidirectional energy flow</div>
        </div>
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl text-center">
          <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-chart-line text-white text-2xl"></i>
          </div>
          <div className="text-3xl font-bold text-yellow-600 mb-2">Significant</div>
          <div className="text-gray-700 font-medium mb-2">Energy Offset</div>
          <div className="text-sm text-gray-600">Reduced grid consumption</div>
        </div>
        <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-2xl text-center">
          <div className="w-16 h-16 bg-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-leaf text-white text-2xl"></i>
          </div>
          <div className="text-3xl font-bold text-red-600 mb-2">Reduced</div>
          <div className="text-gray-700 font-medium mb-2">Carbon Footprint</div>
          <div className="text-sm text-gray-600">Supporting Qatar's sustainability goals</div>
        </div>
        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-2xl text-center">
          <div className="w-16 h-16 bg-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-building text-white text-2xl"></i>
          </div>
          <div className="text-3xl font-bold text-indigo-600 mb-2">Ashghal</div>
          <div className="text-gray-700 font-medium mb-2">Government Client</div>
          <div className="text-sm text-gray-600">Public Works Authority</div>
        </div>
      </div>
    </div>
  </section>

  {/* Related Projects */}
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Related Projects</h2>
        <p className="text-lg text-gray-600">Explore our other renewable energy installations</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {relatedProjects.map(project => (
          <a
            key={project.id}
            href={project.route}
            className="block group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="h-48 bg-gradient-to-br from-green-400 to-emerald-600 relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute top-4 left-4 bg-white/20 backdrop-blur px-3 py-1 rounded-full text-white text-sm font-medium">
                {project.capacity}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex items-center text-green-600 font-medium">
                <span>View Project</span>
                <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default Rawdat;
