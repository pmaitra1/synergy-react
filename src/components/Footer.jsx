import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFooterClick = (e, id) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => scrollToSection(id), 100);
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div>
            <div className="logo-container mb-4 flex items-center space-x-4">
              <img src="/src/images/synergy_logo.png" alt="Synergy Gulf Logo" className="h-10" />
              <div>
                <h1 className="footer-main-text text-white text-lg font-bold">SYNERGY GULF</h1>
                <p className="footer-subtitle text-white text-sm">TRADING & CONTRACTING</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Leading sustainable energy solutions provider in the Gulf region.
            </p>
            <div className="flex space-x-4 text-xl">
  <a 
    href="https://www.linkedin.com/company/synergy-gulf-trading-w.l.l./" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-gray-400 hover:text-green-400"
  >
    <i className="fab fa-linkedin"></i>
  </a>

  <a 
    href="https://www.facebook.com/synergygulf.qa/" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-gray-400 hover:text-green-400"
  >
    <i className="fab fa-facebook"></i>
  </a>
   <a 
    href="https://www.youtube.com/channel/UCbsuprMH-AuT1VBzNSo9s8g" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-gray-400 hover:text-green-400"
  >
    <i className="fab fa-youtube"></i>
  </a>
</div>

          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/#services" onClick={(e) => handleFooterClick(e, 'services')} className="hover:text-green-400">Solar Energy Systems</a></li>
              <li><a href="/#services" onClick={(e) => handleFooterClick(e, 'services')} className="hover:text-green-400">EV Charging Infrastructure</a></li>
              <li><a href="/#services" onClick={(e) => handleFooterClick(e, 'services')} className="hover:text-green-400">Power Quality Solutions</a></li>
              <li><a href="/#services" onClick={(e) => handleFooterClick(e, 'services')} className="hover:text-green-400">Maintenance & Support</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/#about" onClick={(e) => handleFooterClick(e, 'about')} className="hover:text-green-400">About Us</a></li>
              <li>
                  <a
                    href="https://www.linkedin.com/company/synergy-gulf-trading-w.l.l./jobs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-400"
                  >
                    Careers
                  </a>
                </li>
                <li><a href="/#projects" onClick={(e) => handleFooterClick(e, 'projects')} className="hover:text-green-400">Projects</a></li>
              <li><a href="/#contact" onClick={(e) => handleFooterClick(e, 'contact')} className="hover:text-green-400">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li><i className="fas fa-map-marker-alt mr-2"></i>E Industrial St, Doha, Qatar</li>
              <li><i className="fas fa-phone mr-2"></i>+974 5016 2727</li>
              <li><i className="fas fa-envelope mr-2"></i>info@synergygulf.qa</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Synergy Gulf Trading & Contracting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
