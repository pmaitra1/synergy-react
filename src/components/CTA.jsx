import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const CTA = () => {
  return (
    <section className="hero-gradient py-20 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Energy Future?</h2>
        <p className="text-xl text-gray-100 mb-8">
          Join hundreds of satisfied clients who've already made the switch to sustainable energy
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition"
          >
            Get Free Consultation
          </a>
          <a
            href="tel:+97444123456"
            className="glass-effect text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition"
          >
            <FontAwesomeIcon icon={faPhone} className="mr-2" /> Call Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
