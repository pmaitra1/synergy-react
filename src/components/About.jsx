import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faBullseye, faLeaf, faLightbulb,  faShieldAlt,faRocket, faAward,faUsers,faGlobe} from '@fortawesome/free-solid-svg-icons';


export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
      {/* ISO Certification Highlight */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 p-8 rounded-2xl text-center mb-20">
        <div className="flex items-center justify-center mb-4">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-4">
            <i className="fas fa-certificate text-white text-2xl"></i>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-blue-900 mb-1">ISO 9001:2015 Certified</h3>
            <p className="text-blue-700">International Quality Management Standards</p>
          </div>
        </div>
        <p className="text-lg text-blue-800 max-w-3xl mx-auto">
          Our ISO 9001:2015 certification demonstrates our commitment to quality management, customer satisfaction, and continuous improvement in every project we deliver.
        </p>
      </div>
        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded in 2015 in the heart of Qatar, Synergy Gulf Trading & Contracting began with a simple yet powerful vision: to transform the Gulf region's energy landscape through innovative sustainable solutions.
              </p>
              <p>
                Over the past 10 years, we've witnessed the remarkable transformation of the energy sector. From our first 10kW solar installation to today's multi-megawatt projects, our journey has been defined by innovation, quality, and understanding our clients.
              </p>
              <p>
                Today, with over 500 successful projects across Qatar and Bahrain, we continue to push the boundaries in sustainable energy—driven by excellence, integrity, and environmental stewardship.
              </p>
            </div>
          </div>

         <div class="relative">
          <div class="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg">
            <div class="grid grid-cols-2 gap-6 text-center">
              <div class="bg-white p-6 rounded-xl shadow-sm">
                <div class="text-3xl font-bold text-green-600 mb-2">2015</div>
                <div class="text-gray-600 text-sm">Company Founded</div>
              </div>
              <div class="bg-white p-6 rounded-xl shadow-sm">
                <div class="text-3xl font-bold text-blue-600 mb-2">10+</div>
                <div class="text-gray-600 text-sm">Years Experience</div>
              </div>
              <div class="bg-white p-6 rounded-xl shadow-sm">
                <div class="text-3xl font-bold text-yellow-600 mb-2">32+</div>
                <div class="text-gray-600 text-sm">Projects Completed</div>
              </div>
              <div class="bg-white p-6 rounded-xl shadow-sm">
                <div class="text-3xl font-bold text-purple-600 mb-2">2</div>
                <div class="text-gray-600 text-sm">Countries Served</div>
              </div>
            </div>
          </div>

            {/* Floating Decoration */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-green-400/20 rounded-full floating-animation"></div>
            <div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-yellow-400/20 rounded-full floating-animation"
              style={{ animationDelay: "-3s" }}
            ></div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-10 rounded-2xl shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-600"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <FontAwesomeIcon icon={faBullseye} className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                To accelerate the Gulf region's transition to sustainable energy by delivering innovative, reliable, and cost-effective renewable solutions that empower communities and businesses.
              </p>
              <div className="flex items-center text-green-600 font-semibold">
                <FontAwesomeIcon icon={faLeaf} className="mr-2" />
                <span>Sustainable. Reliable. Innovative.</span>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-green-200/30 rounded-full -mr-16 -mb-16"></div>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-10 rounded-2xl shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-600"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                <FontAwesomeIcon icon={faEye} className="text-white text-2xl" />

              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                To be the leading renewable energy partner in the Gulf region, recognized for our technical excellence, innovation, and commitment to creating a sustainable energy future.
              </p>
              <div className="flex items-center text-blue-600 font-semibold">
                <FontAwesomeIcon icon={faLightbulb} className="mr-2" />
                <span>Leading. Excellent. Committed.</span>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-200/30 rounded-full -mr-16 -mb-16"></div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Core Values</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and define who we are as a company
            </p>
          </div>

          <div class="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          
          <div class="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
             < FontAwesomeIcon icon={faShieldAlt} className="text-white" />
            </div>
            <h4 class="font-semibold text-gray-800 mb-2">Integrity</h4>
            <p class="text-sm text-gray-600">Transparent, honest relationships built on trust</p>
          </div>
          
          <div class="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon icon={faRocket} className="text-white" />
            </div>
            <h4 class="font-semibold text-gray-800 mb-2">Innovation</h4>
            <p class="text-sm text-gray-600">Cutting-edge solutions for tomorrow's challenges</p>
          </div>
          
          <div class="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon icon={faAward} className="text-white" />
            </div>
            <h4 class="font-semibold text-gray-800 mb-2">Excellence</h4>
            <p class="text-sm text-gray-600">Uncompromising quality in every project</p>
          </div>
          
          <div class="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon icon={faUsers} className="text-white" />
            </div>
            <h4 class="font-semibold text-gray-800 mb-2">Partnership</h4>
            <p class="text-sm text-gray-600">Collaborative approach to shared success</p>
          </div>
          
          <div class="text-center p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon icon={faGlobe} className="text-white" />
            </div>
            <h4 class="font-semibold text-gray-800 mb-2">Sustainability</h4>
            <p class="text-sm text-gray-600">Environmental responsibility in everything we do</p>
          </div>
          
        </div>

          
        </div>
      </div>
    </section>
  );
}
