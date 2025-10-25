import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser, faEnvelope, faPhone, faBuilding,
  faCogs, faDollarSign, faRocket, faMapMarkerAlt,
  faClock, faRoute
} from '@fortawesome/free-solid-svg-icons';
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
    contact_preference: ""
  });

  const handleRecaptcha = (token) => {
    setRecaptchaToken(token);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!recaptchaToken) {
      alert("Please complete the CAPTCHA.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8082/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Message sent successfully!");
      } else {
        alert("❌ Error: " + (data.error || "Something went wrong."));
      }
    } catch (error) {
      alert("❌ Network error. Please try again.");
      console.error(error);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your energy future? Contact us for a free consultation and custom solution design.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="contact-form p-10 rounded-2xl shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-2">Let's Start a Conversation</h3>
              <p className="text-gray-600">Tell us about your project and we'll get back to you within 24 hours</p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="form-label">First Name *</label>
                  <div className="relative">
                    <FontAwesomeIcon icon={faUser} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input type="text" id="firstName" name="firstName" required placeholder="Enter your first name" className="form-input pl-10" value={formData.firstName} onChange={handleChange} />
                  </div>
                </div>
                <div>
                  <label htmlFor="lastName" className="form-label">Last Name *</label>
                  <div className="relative">
                    <FontAwesomeIcon icon={faUser} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input type="text" id="lastName" name="lastName" required placeholder="Enter your last name" className="form-input pl-10" value={formData.lastName} onChange={handleChange} />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="form-label">Email Address *</label>
                  <div className="relative">
                    <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input type="email" id="email" name="email" required placeholder="your@email.com" className="form-input pl-10" value={formData.email} onChange={handleChange} />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <div className="relative">
                    <FontAwesomeIcon icon={faPhone} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input type="tel" id="phone" name="phone" placeholder="+974 XXXX XXXX" className="form-input pl-10" value={formData.phone} onChange={handleChange} />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="company" className="form-label">Company Name</label>
                <div className="relative">
                  <FontAwesomeIcon icon={faBuilding} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input type="text" id="company" name="company" placeholder="Your company name" className="form-input pl-10" value={formData.company} onChange={handleChange} />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="form-label">Service of Interest</label>
                <div className="relative">
                  <FontAwesomeIcon icon={faCogs} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <select id="service" name="service" className="form-input pl-10" value={formData.service} onChange={handleChange}>
                    <option value="">Select a service</option>
                    <option value="solar">Solar Energy Systems</option>
                    <option value="ev-charging">EV Charging Infrastructure</option>
                    <option value="power-quality">Power Quality Solutions</option>
                    <option value="maintenance">Maintenance & Support</option>
                    <option value="plc-scada">PLC & SCADA Systems</option>
                    <option value="component-trading">Component Trading</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="budget" className="form-label">Project Budget Range</label>
                <div className="relative">
                  <FontAwesomeIcon icon={faDollarSign} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <select id="budget" name="budget" className="form-input pl-10" value={formData.budget} onChange={handleChange}>
                    <option value="">Select budget range</option>
                    <option value="under-50k">Under $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k-250k">$100,000 - $250,000</option>
                    <option value="250k-500k">$250,000 - $500,000</option>
                    <option value="500k-plus">$500,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="form-label">Project Details *</label>
                <textarea id="message" name="message" required placeholder="Tell us about your project requirements, timeline, and any specific challenges you're facing..." className="form-input form-textarea" value={formData.message} onChange={handleChange}></textarea>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl space-y-4">
                <h4 className="font-semibold text-gray-800 mb-3">How would you prefer to be contacted?</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="radio" name="contact_preference" value="email" className="text-green-500 focus:ring-green-500" checked={formData.contact_preference === "email"} onChange={handleChange} />
                    <span className="text-gray-700">📧 Email</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="radio" name="contact_preference" value="phone" className="text-green-500 focus:ring-green-500" checked={formData.contact_preference === "phone"} onChange={handleChange} />
                    <span className="text-gray-700">📞 Phone Call</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="radio" name="contact_preference" value="meeting" className="text-green-500 focus:ring-green-500" checked={formData.contact_preference === "meeting"} onChange={handleChange} />
                    <span className="text-gray-700">🤝 In-Person Meeting</span>
                  </label>
                </div>
              </div>

              <div className="flex justify-center">
                <ReCAPTCHA sitekey="6Lc4-Y4rAAAAADk31hhEHgObcIsM07XKyq4qm1Y7" onChange={handleRecaptcha} />
              </div>
              <div className="flex items-start space-x-3">
  <input
    type="checkbox"
    id="consent"
    required
    className="mt-1"
  />
  <label htmlFor="consent" className="text-sm text-gray-700">
    I consent to my data being stored and used to respond to this inquiry. Read our{" "}
     <Link to="/privacy-policy" className="text-blue-600 underline">Privacy Policy</Link>.
  </label>
</div>


              <button type="submit" className="submit-btn w-full text-white py-4 px-8 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <FontAwesomeIcon icon={faRocket} className="mr-3" />Send My Project Details
              </button>

              <p className="text-center text-sm text-gray-500 mt-4">
                🔒 Your information is secure and will only be used to respond to your inquiry
              </p>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Office Address</h4>
                    <p className="text-gray-600">B-149, Al Nayf Commercial Complex<br />E Industrial St, Doha, Qatar</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faPhone} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <p className="text-gray-600">+974 5016 2727</p>
                    <p className="text-gray-600">+974 5544 2053</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faEnvelope} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">info@synergygulf.qa</p>
                    <p className="text-gray-600">jayati.bm@synergygulf.qa</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faClock} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Business Hours</h4>
                    <p className="text-gray-600">Sunday - Saturday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Friday : Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.4755954632933!2d51.43361217591081!3d25.22090147769584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45dabb67a7e757%3A0xdaefc329b719b51c!2sSynergy%20Gulf%20Trading%20W.L.L.!5e0!3m2!1sen!2sqa!4v1752574724817!5m2!1sen!2sqa"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="font-semibold text-gray-800 mb-3">
                <FontAwesomeIcon icon={faRoute} className="text-green-500 mr-2" />How to Reach Us
              </h4>
              <ul className="text-gray-600 space-y-2">
                <li><strong>By Car:</strong> Take Al Rayyan Road exit from C-Ring Road, 5 minutes from City Center</li>
                <li><strong>By Metro:</strong> Al Shaqab Station (Green Line) - 18 minutes walk</li>
                <li><strong>Parking:</strong> Free parking available on-site</li>
              </ul>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Contact;
