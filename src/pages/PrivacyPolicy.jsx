import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const PrivacyPolicy = () => {
  const effectiveDate = "August 10, 2025"; // <- update as needed

  return (
    <>
      <NavBar />

      {/* Breadcrumb */}
      <section className="pt-36 pb-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center space-x-2 text-sm bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 w-fit">
            <Link to="/" className="text-gray-500 hover:text-green-600 transition">
              <FontAwesomeIcon icon={faHome} className="mr-1" />
              Home
            </Link>
            <FontAwesomeIcon icon={faChevronRight} className="text-gray-400 text-xs" />
            <span className="text-gray-800 font-medium">Privacy Policy</span>
          </nav>
        </div>
      </section>

      <section className="hero-gradient py-20 text-white relative overflow-hidden">
    <div className="absolute inset-0 bg-black/20"></div>
    
  
    <div className="absolute top-20 right-20 w-20 h-20 bg-white/10 rounded-full floating-animation"></div>
    <div className="absolute bottom-40 left-20 w-16 h-16 bg-white/10 rounded-full floating-animation" style={{ animationDelay: "-2s" }}/>
    <div className="absolute top-40 left-1/4 w-12 h-12 bg-white/5 rounded-full floating-animation" style={{ animationDelay: "-1s" }}/>
    
    <div className="relative z-10 max-w-7xl mx-auto px-6">
      <div className="text-center">
        <div className="inline-flex items-center bg-white/20 px-4 py-2 rounded-full mb-6">
          <i className="fas fa-shield-alt mr-2"></i>
          <span className="text-sm font-medium">Privacy & Data Protection</span>
        </div>
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          Privacy <span className="text-yellow-400">Policy</span>
        </h1>
        <p className="text-xl text-gray-100 mb-8 leading-relaxed max-w-3xl mx-auto">
          At Synergy Gulf, we are committed to protecting your privacy and ensuring the security of your personal information. Learn how we collect, use, and safeguard your data.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <div className="bg-white/20 backdrop-blur px-6 py-3 rounded-lg">
            <div className="text-sm text-gray-200">Last Updated</div>
            <div className="font-semibold">January 15, 2024</div>
          </div>
          <div className="bg-white/20 backdrop-blur px-6 py-3 rounded-lg">
            <div className="text-sm text-gray-200">Governed By</div>
            <div className="font-semibold">Qatar Law</div>
          </div>
          <div className="flex justify-center">
  <Link
    to="/#contact"
    className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition inline-flex items-center"
  >
    <i className="fas fa-arrow-left mr-2"></i> Back to Contact Form
  </Link>
</div>
        </div>
      </div>
    </div>
  </section>


  <section className="py-8 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="policy-content bg-white rounded-xl shadow-sm p-8">
        
        <div className="last-updated">
          <strong>Last Updated:</strong> January 15, 2024
        </div>

        <p className="text-lg text-gray-700 mb-8">
          At Synergy Gulf Trading & Contracting, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or use our services.
        </p>

        <h2>Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li><strong>Contact Information:</strong> Name, email address, phone number, and company details when you contact us or request a quote</li>
          <li><strong>Project Information:</strong> Technical requirements, project specifications, and related communication</li>
          <li><strong>Website Usage:</strong> IP address, browser type, pages visited, and time spent on our website</li>
          <li><strong>Communication Records:</strong> Emails, phone call logs, and meeting notes related to our business relationship</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use the collected information for the following purposes:</p>
        <ul>
          <li>Responding to your inquiries and providing quotes for our services</li>
          <li>Managing and executing solar energy and electrical projects</li>
          <li>Communicating project updates and technical information</li>
          <li>Improving our website and services</li>
          <li>Compliance with legal and regulatory requirements</li>
          <li>Marketing our services (only with your consent)</li>
        </ul>

        <h2>Information Sharing</h2>
        <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
        <ul>
          <li><strong>Service Providers:</strong> With trusted partners who assist in delivering our services (under strict confidentiality agreements)</li>
          <li><strong>Legal Requirements:</strong> When required by law, regulation, or legal process</li>
          <li><strong>Business Protection:</strong> To protect our rights, property, or safety, or that of our clients</li>
          <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
        </ul>

        <h2>Data Security</h2>
        <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:</p>
        <ul>
          <li>Secure data transmission using SSL encryption</li>
          <li>Limited access to personal information on a need-to-know basis</li>
          <li>Regular security assessments and updates</li>
          <li>Secure storage of physical and electronic records</li>
        </ul>

        <h2>Cookies and Tracking</h2>
        <p>Our website may use cookies and similar tracking technologies to enhance your browsing experience. Cookies help us:</p>
        <ul>
          <li>Remember your preferences and settings</li>
          <li>Analyze website traffic and usage patterns</li>
          <li>Improve website functionality and performance</li>
        </ul>
        <p>You can control cookie settings through your browser preferences. However, disabling cookies may affect some website functionality.</p>

        <h2>Data Retention</h2>
        <p>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Project-related information may be retained for the duration of the project and any applicable warranty periods.</p>

        <h2>Your Rights</h2>
        <p>Depending on your location, you may have the following rights regarding your personal information:</p>
        <ul>
          <li>Access to your personal information</li>
          <li>Correction of inaccurate or incomplete data</li>
          <li>Deletion of your personal information</li>
          <li>Restriction of processing</li>
          <li>Data portability</li>
          <li>Objection to processing</li>
        </ul>
        <p>To exercise these rights, please contact us using the information provided below.</p>

        <h2>Updates to This Policy</h2>
        <p>We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on our website with a new "Last Updated" date.</p>

        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
          <ul className="list-none pl-0">
            <li><i className="fas fa-envelope mr-2 text-green-600"></i><strong>Email:</strong> privacy@synergygulf.com</li>
            <li><i className="fas fa-phone mr-2 text-green-600"></i><strong>Phone:</strong> +974 5016 2727</li>
            <li><i className="fas fa-map-marker-alt mr-2 text-green-600"></i><strong>Address:</strong> Al Nayf, Doha, Qatar</li>
          </ul>
        </div>

        <h2>Governing Law</h2>
        <p>This Privacy Policy is governed by the laws of Qatar. Any disputes arising from this policy will be subject to the jurisdiction of the courts in Qatar.</p>

      </div>
    </div>
  </section>
     
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
