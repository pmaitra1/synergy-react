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

const Station = () => {

  // Gallery images data
    const galleryImages = [
      {
        src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&h=800&fit=crop&crop=center",
        title: "Farm Solar Array Overview",
        description: "1.5MWp grid-tied solar installation strategically positioned on flat agricultural land to optimize energy capture while preserving farming operations."
      },
      {
        src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=800&fit=crop&crop=center",
        title: "High-Efficiency PV Modules",
        description: "State-of-the-art solar panels utilizing the latest technology to ensure maximum energy capture and long-term reliability for agricultural applications."
      },
      {
        src: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&h=800&fit=crop&crop=center",
        title: "Latest Generation Inverters",
        description: "Advanced inverter technology enabling seamless DC to AC conversion and efficient grid integration for surplus energy management."
      },
      {
        src: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&h=800&fit=crop&crop=center",
        title: "Agricultural Integration",
        description: "Solar system designed to complement agricultural operations, providing energy independence while maintaining productive farming activities."
      },
      {
        src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=800&fit=crop&crop=center",
        title: "Professional Installation",
        description: "Synergy Gulf's expert installation team ensuring precise system deployment with minimal disruption to farm operations."
      },
      {
        src: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&h=800&fit=crop&crop=center",
        title: "Energy Performance Monitoring",
        description: "Comprehensive monitoring system tracking energy production, grid feed-in, and system performance for optimal agricultural energy management."
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
  const relatedProjects = projects.filter(p => p.id !== 'station');

  return (
    <div className="bg-gray-50 text-gray-800 antialiased">
      <NavBar />
      {/* Breadcrumb Section */}
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

      <span className="text-gray-800 font-medium">Dahl Al Hamam Park</span>
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
                <i className="fas fa-charging-station mr-2"></i>
                <span className="text-sm font-medium">Solar Charging Infrastructure</span>
              </div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Solar Powered Charging Station at <span className="text-yellow-400">Dahl Al Hamam</span> Park
              </h1>
              <p className="text-xl text-gray-100 mb-8 leading-relaxed">
                An innovative renewable energy charging kiosk for Public Works Authority (Ashghal), providing sustainable device charging for park visitors with modern USB connectivity and weather-resistant design.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="glass-effect px-6 py-3 rounded-lg">
                  <div className="text-sm text-gray-200">Client</div>
                  <div className="font-semibold">Public Works Authority (Ashghal)</div>
                </div>
                <div className="glass-effect px-6 py-3 rounded-lg">
                  <div className="text-sm text-gray-200">Location</div>
                  <div className="font-semibold">Dahl Al Hamam Park, Qatar</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="glass-effect p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-center">Project Overview</h3>
                <div className="stats-grid">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">Solar</div>
                    <div className="text-white/80 text-sm">Powered Kiosk</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">USB A & C</div>
                    <div className="text-white/80 text-sm">Charging Outlets</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">Weather</div>
                    <div className="text-white/80 text-sm">Resistant</div>
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
            <i className="fas fa-solar-panel text-white"></i>
          </div>
          <div className="text-2xl font-bold text-gray-800 mb-2">Solar Powered</div>
          <div className="text-gray-600">Renewable Energy Source</div>
        </div>
        
        <div className="stat-card">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-usb text-white"></i>
          </div>
          <div className="text-2xl font-bold text-gray-800 mb-2">USB A & C</div>
          <div className="text-gray-600">Modern Charging Ports</div>
        </div>
        
        <div className="stat-card">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-building text-white"></i>
          </div>
          <div className="text-2xl font-bold text-gray-800 mb-2">Ashghal</div>
          <div className="text-gray-600">Government Client</div>
        </div>
        
        <div className="stat-card">
          <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-shield-alt text-white"></i>
          </div>
          <div className="text-2xl font-bold text-gray-800 mb-2">Weather Resistant</div>
          <div className="text-gray-600">Outdoor Durability</div>
        </div>
      </div>
    </div>
  </section>

   <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Project Background</h2>
          <p className="text-xl text-gray-600">Enhancing park visitor experience through sustainable charging infrastructure</p>
        </div>
        
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Dahl Al Hamam Park, a popular recreational space in Qatar, is known for its unique design, blending rich green spaces with vibrant leisure elements. The park provides visitors with jogging tracks, play equipment, covered seating areas, and beautiful gardens that feature distinctive plant species and fruit palms.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            As part of a larger initiative to enhance the park's facilities and sustainability, a <strong>solar-powered charging kiosk</strong> was installed to provide renewable energy to park visitors, enabling them to charge their devices while enjoying the outdoors. This kiosk is part of a broader project to refurbish several parks in Qatar, including Ras Abu Aboud, Al Wakra, Al Shamal, Barzan Olympic, and Dahl Al Hamam Park.
          </p>
        </div>
        {/* Key Features */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-green-100 rounded-xl p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                <i className="fas fa-map-marker-alt text-white"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Park Features</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li><i className="fas fa-check text-green-500 mr-2"></i>Jogging tracks and play equipment</li>
              <li><i className="fas fa-check text-green-500 mr-2"></i>Covered seating areas</li>
              <li><i className="fas fa-check text-green-500 mr-2"></i>Beautiful gardens with distinctive plants</li>
              <li><i className="fas fa-check text-green-500 mr-2"></i>Fruit palms and green spaces</li>
            </ul>
          </div>
          
          <div className="bg-white border border-blue-100 rounded-xl p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                <i className="fas fa-industry text-white"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Project Scope</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li><i className="fas fa-check text-blue-500 mr-2"></i>Public Infrastructure Enhancement</li>
              <li><i className="fas fa-check text-blue-500 mr-2"></i>Part of multi-park refurbishment</li>
              <li><i className="fas fa-check text-blue-500 mr-2"></i>Sustainable technology integration</li>
              <li><i className="fas fa-check text-blue-500 mr-2"></i>Clean energy demonstration</li>
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
            <i className="fas fa-exclamation-triangle"></i>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-800 mb-6">The Challenge</h2>
          <p className="text-lg text-gray-700 mb-8">
            The project faced several critical challenges in implementing sustainable charging infrastructure that would seamlessly integrate with the park's natural environment while providing reliable service.
          </p>
          
          <div className="space-y-6">
            <div className="timeline-item">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                <i className="fas fa-battery-full text-red-500 mr-3"></i>Energy Efficiency
              </h3>
              <p className="text-gray-700">
                Ensuring that the solar-powered charging kiosks would provide reliable energy for device charging throughout the day, especially under varying weather conditions.
              </p>
            </div>
            
            <div className="timeline-item">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                <i className="fas fa-palette text-red-500 mr-3"></i>Design Integration
              </h3>
              <p className="text-gray-700">
                The kiosks had to be seamlessly integrated into the park's landscape, complementing the park's rich natural design and hardscape elements, such as jogging tracks and seating areas.
              </p>
            </div>
            
            <div className="timeline-item">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                <i className="fas fa-users text-red-500 mr-3"></i>User Experience
              </h3>
              <p className="text-gray-700">
                Providing easy-to-use charging stations with the flexibility to accommodate modern devices, including USB Type A and Type C outlets for versatile connectivity.
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
            <i className="fas fa-lightbulb"></i>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Innovative Solution</h2>
          <p className="text-lg text-gray-700 mb-8">
            We designed, supplied, installed, and commissioned <strong>solar-powered charging kiosks</strong> at Dahl Al Hamam Park, incorporating state-of-the-art technology and renewable energy solutions that seamlessly blend functionality with environmental responsibility.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                <i className="fas fa-solar-panel text-blue-600 mr-3"></i>Solar Technology
              </h3>
              <p className="text-gray-700 mb-4">
                The kiosks are equipped with high-efficiency solar panels, which harness the sun's energy to charge devices via USB outlets. During cloudy conditions or at night, an AC rectifier provides backup power to ensure the kiosks remain operational at all times.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li><i className="fas fa-check text-blue-500 mr-2"></i>High-efficiency solar panels</li>
                <li><i className="fas fa-check text-blue-500 mr-2"></i>AC rectifier backup power</li>
                <li><i className="fas fa-check text-blue-500 mr-2"></i>Uninterrupted operation</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                <i className="fas fa-usb text-green-600 mr-3"></i>Modern Connectivity
              </h3>
              <p className="text-gray-700 mb-4">
                Each kiosk features USB Type A and Type C outlets, providing versatile charging options for park visitors with various devices. The kiosks were strategically placed in key areas of the park, such as near jogging tracks and seating areas.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li><i className="fas fa-check text-green-500 mr-2"></i>USB Type A outlets</li>
                <li><i className="fas fa-check text-green-500 mr-2"></i>USB Type C outlets</li>
                <li><i className="fas fa-check text-green-500 mr-2"></i>Strategic placement</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              <i className="fas fa-shield-alt text-purple-600 mr-3"></i>Durable Design
            </h3>
            <p className="text-gray-700">
              The kiosks were designed with durable, weather-resistant materials, ensuring their longevity and maintaining their aesthetic appeal in the park's outdoor environment. The design carefully integrates with the park's natural and hardscape elements.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* The Advantages */}
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <div className="advantage-card">
          <div className="advantage-icon section-icon">
            <i className="fas fa-trophy"></i>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Project Benefits & Advantages</h2>
          <p className="text-lg text-gray-700 mb-8">
            This innovative charging infrastructure delivers multiple benefits to park visitors, facility management, and Qatar's sustainability initiatives.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-green-100 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-leaf text-white"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Sustainability</h3>
              </div>
              <p className="text-gray-600">
                The solar-powered charging kiosks reduce the park's reliance on the national grid and provide a clean, renewable energy source for device charging.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-battery-full text-white"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Energy Independence</h3>
              </div>
              <p className="text-gray-600">
                Solar energy ensures that the kiosks can operate independently, providing uninterrupted service during the day.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-purple-100 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-users text-white"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">User Convenience</h3>
              </div>
              <p className="text-gray-600">
                Visitors can charge their devices easily while enjoying the park's recreational facilities, improving the overall park experience.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-orange-100 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-palette text-white"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Aesthetic Integration</h3>
              </div>
              <p className="text-gray-600">
                The kiosks were carefully designed to blend with the park's natural and hardscape elements, maintaining the park's beautiful aesthetic.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-indigo-100 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-shield-alt text-white"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Resilience</h3>
              </div>
              <p className="text-gray-600">
                Backup power from an AC rectifier ensures reliable charging, even in cloudy or low-sunlight conditions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-teal-100 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-lightbulb text-white"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Innovation</h3>
              </div>
              <p className="text-gray-600">
                The installation of solar-powered charging stations aligns with Qatar's growing focus on renewable energy solutions for public infrastructure.
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
        <p className="text-xl text-gray-600">Visual documentation of the agricultural solar installation</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {/* Gallery Item 1 - Farm Overview */}
        <div className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer" onClick={() => openLightbox(0)}>
          <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&h=400&fit=crop&crop=center" 
               alt="1.5MWp solar installation on flat agricultural land" 
               className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/90 backdrop-blur p-3 rounded-full">
              <i className="fas fa-search-plus text-gray-800 text-xl"></i>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <h3 className="text-white font-semibold">Farm Solar Array Overview</h3>
            <p className="text-white/80 text-sm">1.5MWp installation on flat land</p>
          </div>
        </div>
        
        {/* Gallery Item 2 - High-Efficiency Panels */}
        <div className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer" onClick={() => openLightbox(1)}>
          <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&h=400&fit=crop&crop=center" 
               alt="High-efficiency PV modules installation" 
               className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/90 backdrop-blur p-3 rounded-full">
              <i className="fas fa-search-plus text-gray-800 text-xl"></i>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <h3 className="text-white font-semibold">High-Efficiency PV Modules</h3>
            <p className="text-white/80 text-sm">State-of-the-art solar panels</p>
          </div>
        </div>
        
        {/* Gallery Item 3 - Grid Connection */}
        <div className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer" onClick={() => openLightbox(2)}>
          <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=500&h=400&fit=crop&crop=center" 
               alt="Latest generation inverters and grid connection" 
               className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/90 backdrop-blur p-3 rounded-full">
              <i className="fas fa-search-plus text-gray-800 text-xl"></i>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <h3 className="text-white font-semibold">Latest Generation Inverters</h3>
            <p className="text-white/80 text-sm">Advanced grid-tied system</p>
          </div>
        </div>
        
        {/* Gallery Item 4 - Agricultural Integration */}
        <div className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer" onClick={() => openLightbox(3)}>
          <img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=500&h=400&fit=crop&crop=center" 
               alt="Solar system integrated with agricultural operations" 
               className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/90 backdrop-blur p-3 rounded-full">
              <i className="fas fa-search-plus text-gray-800 text-xl"></i>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <h3 className="text-white font-semibold">Agricultural Integration</h3>
            <p className="text-white/80 text-sm">Solar system with farming operations</p>
          </div>
        </div>
        
        {/* Gallery Item 5 - Installation Process */}
        <div className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer" onClick={() => openLightbox(4)}>
          <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&h=400&fit=crop&crop=center" 
               alt="Professional installation team at work" 
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
               alt="Energy production monitoring dashboard" 
               className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/90 backdrop-blur p-3 rounded-full">
              <i className="fas fa-search-plus text-gray-800 text-xl"></i>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <h3 className="text-white font-semibold">Energy Performance</h3>
            <p className="text-white/80 text-sm">Real-time production monitoring</p>
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
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Key Figures & Technical Facts</h2>
        <p className="text-xl text-gray-600">Detailed specifications and features of this innovative charging infrastructure</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl text-center">
          <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-solar-panel text-white text-2xl"></i>
          </div>
          <div className="text-3xl font-bold text-green-600 mb-2">Solar</div>
          <div className="text-gray-700 font-medium mb-2">Power Source</div>
          <div className="text-sm text-gray-600">High-efficiency panels</div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl text-center">
          <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-usb text-white text-2xl"></i>
          </div>
          <div className="text-3xl font-bold text-blue-600 mb-2">USB A & C</div>
          <div className="text-gray-700 font-medium mb-2">Charging Outlets</div>
          <div className="text-sm text-gray-600">Versatile device charging</div>
        </div>
        
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl text-center">
          <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-plug text-white text-2xl"></i>
          </div>
          <div className="text-3xl font-bold text-purple-600 mb-2">AC Rectifier</div>
          <div className="text-gray-700 font-medium mb-2">Backup Power</div>
          <div className="text-sm text-gray-600">Cloudy condition support</div>
        </div>
        
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl text-center">
          <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-shield-alt text-white text-2xl"></i>
          </div>
          <div className="text-3xl font-bold text-yellow-600 mb-2">Weather</div>
          <div className="text-gray-700 font-medium mb-2">Resistant Materials</div>
          <div className="text-sm text-gray-600">Outdoor durability</div>
        </div>
        
        <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-2xl text-center">
          <div className="w-16 h-16 bg-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-palette text-white text-2xl"></i>
          </div>
          <div className="text-3xl font-bold text-red-600 mb-2">Aesthetic</div>
          <div className="text-gray-700 font-medium mb-2">Design Integration</div>
          <div className="text-sm text-gray-600">Landscape compatibility</div>
        </div>
        
        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-2xl text-center">
          <div className="w-16 h-16 bg-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-building text-white text-2xl"></i>
          </div>
          <div className="text-3xl font-bold text-indigo-600 mb-2">Ashghal</div>
          <div className="text-gray-700 font-medium mb-2">Client</div>
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

export default Station;
