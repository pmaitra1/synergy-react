import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-gradient min-h-screen flex items-center relative overflow-hidden pt-20"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-white/10 rounded-full floating-animation"></div>
      <div
        className="absolute bottom-40 left-20 w-16 h-16 bg-white/10 rounded-full floating-animation"
        style={{ animationDelay: "-2s" }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Powering the <span className="text-yellow-400">Future</span> with Sustainable Energy
          </h1>
          <p className="text-xl text-gray-100 mb-8 leading-relaxed">
            Transform your business with cutting-edge renewable energy solutions. From solar systems to EV charging infrastructure, we deliver innovation that drives growth while protecting our planet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#services"
              className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition text-center"
            >
              Explore Solutions
            </a>
            <a
              href="#contact"
              className="glass-effect text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition text-center"
            >
              <i className="fas fa-phone mr-2"></i> Get Consultation
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="glass-effect p-8 rounded-2xl">
            <div className="grid grid-cols-2 gap-6">
              {[
                ["32+", "Projects Delivered"],
                ["2.34 MW", "Solar Capacity"],
                ["80+", "Happy Clients"],
                ["10+", "Years Experience"],
              ].map(([count, label], idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2 stats-counter">{count}</div>
                  <div className="text-white/80 text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
