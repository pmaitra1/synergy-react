// src/components/NavBar.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../images/synergy_logo.png';
export default function NavBar() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileOpen(false); // close mobile if open
    navigate('/');
    // give React Router a tick to render home before scrolling
    setTimeout(() => scrollToSection(id), 50);
  };

  return (
    <nav className="fixed top-0 w-full z-50 shadow-lg">
      {/* ISO Certification Banner */}
      <div className="bg-blue-600 text-white text-center py-2 text-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-2">
            <i className="fas fa-certificate text-yellow-400" />
            <span>ISO 9001:2015 Certified Quality Management</span>
          </div>
        </div>
      </div>

      {/* Main NavBar */}
      <div className="bg-white/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="/"
              onClick={(e) => handleNavClick(e, 'home')}
              className="flex items-center"
            >
              <div className="logo-container">
                {/* Consider importing the asset: import logo from '../images/synergy_logo.png' */}
               <img src={logo} alt="Synergy Gulf Logo" className="lightning-bolt" />

                <div className="text-container">
                  <h1 className="main-text">SYNERGY GULF</h1>
                  <p className="subtitle">TRADING &amp; CONTRACTING</p>
                </div>
              </div>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, 'home')}
                className="text-gray-700 hover:text-green-600 font-medium transition"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, 'about')}
                className="text-gray-700 hover:text-green-600 font-medium transition"
              >
                About
              </a>

              {/* Services Dropdown (relies on your existing .dropdown CSS) */}
              <div className="dropdown">
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, 'services')}
                  className="dropdown-trigger text-gray-700 hover:text-green-600 font-medium transition"
                >
                  Services <i className="fas fa-chevron-down text-xs" />
                </a>
                <div className="dropdown-content">
                  <a
                    href="#services"
                    onClick={(e) => handleNavClick(e, 'services')}
                    className="dropdown-item"
                  >
                    <i className="fas fa-solar-panel" />
                    <div>
                      <div className="dropdown-title">Solar Energy Systems</div>
                      <div className="dropdown-desc">Complete solar solutions &amp; monitoring</div>
                    </div>
                  </a>
                  <a
                    href="#services"
                    onClick={(e) => handleNavClick(e, 'services')}
                    className="dropdown-item"
                  >
                    <i className="fas fa-charging-station" />
                    <div>
                      <div className="dropdown-title">EV Charging Infrastructure</div>
                      <div className="dropdown-desc">Smart charging stations &amp; grid integration</div>
                    </div>
                  </a>
                  <a
                    href="#services"
                    onClick={(e) => handleNavClick(e, 'services')}
                    className="dropdown-item"
                  >
                    <i className="fas fa-wave-square" />
                    <div>
                      <div className="dropdown-title">Power Quality Solutions</div>
                      <div className="dropdown-desc">Harmonics analysis &amp; mitigation</div>
                    </div>
                  </a>
                  <a
                    href="#services"
                    onClick={(e) => handleNavClick(e, 'services')}
                    className="dropdown-item"
                  >
                    <i className="fas fa-tools" />
                    <div>
                      <div className="dropdown-title">Maintenance &amp; Support</div>
                      <div className="dropdown-desc">24/7 system monitoring &amp; maintenance</div>
                    </div>
                  </a>
                  <a
                    href="#services"
                    onClick={(e) => handleNavClick(e, 'services')}
                    className="dropdown-item"
                  >
                    <i className="fas fa-microchip" />
                    <div>
                      <div className="dropdown-title">PLC &amp; SCADA Systems</div>
                      <div className="dropdown-desc">Industrial automation &amp; control</div>
                    </div>
                  </a>
                  <a
                    href="#services"
                    onClick={(e) => handleNavClick(e, 'services')}
                    className="dropdown-item"
                  >
                    <i className="fas fa-cogs" />
                    <div>
                      <div className="dropdown-title">Component Trading</div>
                      <div className="dropdown-desc">Premium electrical components</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Projects Dropdown */}
              <div className="dropdown">
                <Link
                  to="/#projects"
                  className="dropdown-trigger text-gray-700 hover:text-green-600 font-medium transition"
                >
                  Projects <i className="fas fa-chevron-down text-xs" />
                </Link>

                <div className="dropdown-content">
                  <Link to="/rawdat" className="dropdown-item">
                    <i className="fas fa-tree" />
                    <div>
                      <div className="dropdown-title">Rawdat Al Hamama Park Solar</div>
                      <div className="dropdown-desc">251.6kWp flexible solar system</div>
                    </div>
                  </Link>

                  <Link to="/farm" className="dropdown-item">
                    <i className="fas fa-seedling" />
                    <div>
                      <div className="dropdown-title">Ruwais Vegetable Farm</div>
                      <div className="dropdown-desc">1.5MWp grid-tied solar installation</div>
                    </div>
                  </Link>

                  <Link to="/station" className="dropdown-item">
                    <i className="fas fa-charging-station" />
                    <div>
                      <div className="dropdown-title">Dahl Al Hamam Charging Station</div>
                      <div className="dropdown-desc">Solar-powered device charging kiosk</div>
                    </div>
                  </Link>

                  <Link to="/hospitalscada" className="dropdown-item">
                    <i className="fas fa-hospital" />
                    <div>
                      <div className="dropdown-title">Hospital SCADA System</div>
                      <div className="dropdown-desc">Multi-facility monitoring solution</div>
                    </div>
                  </Link>

                  <Link to="/powerquality" className="dropdown-item">
                    <i className="fas fa-industry" />
                    <div>
                      <div className="dropdown-title">Mesaieed Refinery Analysis</div>
                      <div className="dropdown-desc">Power quality measurement &amp; analysis</div>
                    </div>
                  </Link>
                </div>
              </div>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full font-semibold hover:from-green-600 hover:to-emerald-700 transition cta-pulse"
              >
                Get Quote
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 hover:text-green-600"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <i className="fas fa-bars text-xl" />
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <div
          id="mobile-menu"
          className={`md:hidden border-t border-gray-100 bg-white ${mobileOpen ? 'block' : 'hidden'}`}
        >
          <div className="px-6 py-4 flex flex-col space-y-2">
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="py-2 text-gray-700">
              Home
            </a>
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="py-2 text-gray-700">
              About
            </a>

            {/* Services disclosure */}
            <button
              type="button"
              className="py-2 text-left text-gray-700 flex items-center justify-between"
              onClick={() => setMobileServicesOpen((v) => !v)}
              aria-expanded={mobileServicesOpen}
            >
              <span>Services</span>
              <i className={`fas ${mobileServicesOpen ? 'fa-chevron-up' : 'fa-chevron-down'} text-xs`} />
            </button>
            {mobileServicesOpen && (
              <div className="ml-3 flex flex-col">
                <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="py-2 text-gray-600">
                  Solar Energy Systems
                </a>
                <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="py-2 text-gray-600">
                  EV Charging Infrastructure
                </a>
                <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="py-2 text-gray-600">
                  Power Quality Solutions
                </a>
                <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="py-2 text-gray-600">
                  Maintenance &amp; Support
                </a>
                <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="py-2 text-gray-600">
                  PLC &amp; SCADA Systems
                </a>
                <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="py-2 text-gray-600">
                  Component Trading
                </a>
              </div>
            )}

            {/* Projects disclosure */}
            <button
              type="button"
              className="py-2 text-left text-gray-700 flex items-center justify-between"
              onClick={() => setMobileProjectsOpen((v) => !v)}
              aria-expanded={mobileProjectsOpen}
            >
              <span>Projects</span>
              <i className={`fas ${mobileProjectsOpen ? 'fa-chevron-up' : 'fa-chevron-down'} text-xs`} />
            </button>
            {mobileProjectsOpen && (
              <div className="ml-3 flex flex-col">
                <Link to="/rawdat" onClick={() => setMobileOpen(false)} className="py-2 text-gray-600">
                  Rawdat Al Hamama Park Solar
                </Link>
                <Link to="/farm" onClick={() => setMobileOpen(false)} className="py-2 text-gray-600">
                  Ruwais Vegetable Farm
                </Link>
                <Link to="/station" onClick={() => setMobileOpen(false)} className="py-2 text-gray-600">
                  Dahl Al Hamam Charging Station
                </Link>
                <Link to="/hospitalscada" onClick={() => setMobileOpen(false)} className="py-2 text-gray-600">
                  Hospital SCADA System
                </Link>
                <Link to="/powerquality" onClick={() => setMobileOpen(false)} className="py-2 text-gray-600">
                  Mesaieed Refinery Analysis
                </Link>
              </div>
            )}

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="mt-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full font-semibold w-max"
            >
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
