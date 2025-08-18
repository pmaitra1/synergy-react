// src/pages/CookiePolicy.jsx
import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const CookiePolicy = () => {
  return (
    <div className="bg-gray-50 text-gray-800 antialiased">
      <NavBar />

      {/* Breadcrumb */}
      <section className="pt-36 pb-6 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm flex-wrap">
            <Link to="/" className="text-gray-500 hover:text-green-600 transition">
              <FontAwesomeIcon icon={faHome} className="mr-1" />
              Home
            </Link>
            <FontAwesomeIcon icon={faChevronRight} className="text-gray-400 text-xs" />
            <span className="text-gray-800 font-medium">Cookie Policy</span>
          </nav>
        </div>
      </section>

      {/* Header */}
      <section className="relative overflow-hidden text-white py-20 bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800">
        <div className="absolute inset-0 bg-black/20" />
        {/* floating bits */}
        <div className="absolute top-20 right-20 w-20 h-20 bg-white/10 rounded-full floating-animation" />
        <div
          className="absolute bottom-40 left-20 w-16 h-16 bg-white/10 rounded-full floating-animation"
          style={{ animationDelay: "-2s" }}
        />
        <div
          className="absolute top-40 left-1/4 w-12 h-12 bg-white/5 rounded-full floating-animation"
          style={{ animationDelay: "-1s" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/20 px-4 py-2 rounded-full mb-6">
              <i className="fas fa-cookie-bite mr-2" />
              <span className="text-sm font-medium">Cookie Usage &amp; Tracking</span>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Cookie <span className="text-yellow-400">Policy</span>
            </h1>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Learn how Synergy Gulf uses cookies and similar technologies to enhance your browsing experience and analyze website engagement through Google Analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white/20 backdrop-blur px-6 py-3 rounded-lg">
                <div className="text-sm text-gray-200">Last Updated</div>
                <div className="font-semibold">January 15, 2024</div>
              </div>
              <div className="bg-white/20 backdrop-blur px-6 py-3 rounded-lg">
                <div className="text-sm text-gray-200">Analytics Provider</div>
                <div className="font-semibold">Google Analytics</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-xl shadow-sm p-8 max-w-3xl mx-auto leading-7">
            <div className="bg-gray-50 border-l-4 border-green-500 p-4 mb-8 text-sm text-gray-600">
              <strong>Last Updated:</strong> January 15, 2024
            </div>

            <p className="text-lg text-gray-700 mb-8">
              This Cookie Policy explains how Synergy Gulf Trading &amp; Contracting uses cookies and similar tracking technologies on our website. We use these tools primarily to understand how visitors engage with our site through Google Analytics, helping us improve your experience and our services.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-200 pb-2">What Are Cookies?</h2>
            <p className="text-gray-700 mb-4">
              Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They help websites remember information about your visit, such as your preferences and actions, which can make your next visit easier and the site more useful to you.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-200 pb-2">Types of Cookies We Use</h2>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
              <h3 className="text-emerald-700 font-semibold mb-2">
                <i className="fas fa-chart-line mr-2" />
                Analytics Cookies (Google Analytics)
              </h3>
              <p className="text-gray-700">
                We use Google Analytics to collect information about how visitors use our website. This helps us understand website engagement and improve our content and user experience.
              </p>
              <p className="text-gray-700 mt-3"><strong>Purpose:</strong> Track page views, session duration, bounce rates, and user interactions</p>
              <p className="text-gray-700"><strong>Data Collected:</strong> Pages visited, time spent on site, device type, browser info, and general location (city/country)</p>
              <p className="text-gray-700"><strong>Retention Period:</strong> Up to 26 months</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse rounded-lg overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-3 text-gray-800 font-semibold border-b">Cookie Name</th>
                    <th className="p-3 text-gray-800 font-semibold border-b">Provider</th>
                    <th className="p-3 text-gray-800 font-semibold border-b">Purpose</th>
                    <th className="p-3 text-gray-800 font-semibold border-b">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 text-gray-700">_ga</td>
                    <td className="p-3 text-gray-700">Google Analytics</td>
                    <td className="p-3 text-gray-700">Distinguishes unique users and sessions</td>
                    <td className="p-3 text-gray-700">2 years</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 text-gray-700">_ga_*</td>
                    <td className="p-3 text-gray-700">Google Analytics</td>
                    <td className="p-3 text-gray-700">Persists session state for GA4</td>
                    <td className="p-3 text-gray-700">2 years</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 text-gray-700">_gid</td>
                    <td className="p-3 text-gray-700">Google Analytics</td>
                    <td className="p-3 text-gray-700">Distinguishes users</td>
                    <td className="p-3 text-gray-700">24 hours</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-gray-700">_gat</td>
                    <td className="p-3 text-gray-700">Google Analytics</td>
                    <td className="p-3 text-gray-700">Throttles request rate</td>
                    <td className="p-3 text-gray-700">1 minute</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-200 pb-2">How We Use Cookie Data</h2>
            <p className="text-gray-700 mb-2">The information collected through cookies helps us:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
              <li><strong>Understand Website Performance:</strong> Analyze popular pages and navigation</li>
              <li><strong>Improve User Experience:</strong> Identify friction and optimize flows</li>
              <li><strong>Track Engagement:</strong> Measure time on site and content interest</li>
              <li><strong>Monitor Traffic Sources:</strong> Discover how visitors find us</li>
              <li><strong>Optimize Content:</strong> Focus on the most relevant services/projects</li>
              <li><strong>Technical Improvements:</strong> Spot compatibility and performance issues</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-200 pb-2">Third-Party Cookies</h2>
            <p className="text-gray-700 mb-4">
              We use Google Analytics, a third-party service by Google Inc. Google Analytics may place cookies on your device and collects information anonymously. See the{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noreferrer"
                className="text-green-600 hover:text-green-700 underline"
              >
                Google Privacy Policy
              </a>.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-200 pb-2">Managing Your Cookie Preferences</h2>

            <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">Browser Settings</h3>
            <p className="text-gray-700 mb-2">Most browsers let you control cookies. You can:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
              <li>Block all cookies or only third-party cookies</li>
              <li>Delete existing cookies</li>
              <li>Get notified when cookies are being placed</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">Google Analytics Opt-Out</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
              <li>
                Install the{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noreferrer"
                  className="text-green-600 hover:text-green-700 underline"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
              </li>
              <li>Enable “Do Not Track” in your browser</li>
              <li>Use privacy-focused browsers or extensions</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">Impact of Disabling Cookies</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
              <li>Our website will still function</li>
              <li>We can’t analyze engagement for improvements</li>
              <li>Some features may not behave as intended</li>
              <li>You may need to re-enter information</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-200 pb-2">Data Protection and Privacy</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
              <li><strong>Anonymous:</strong> We can’t identify individual users</li>
              <li><strong>Secure:</strong> Transmitted with secure protocols</li>
              <li><strong>Limited:</strong> Used only as stated</li>
              <li><strong>Compliant:</strong> Processed per applicable laws</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-200 pb-2">Updates to This Cookie Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this policy to reflect changes in practices, technology, or legal requirements. We’ll post updates with a new “Last Updated” date.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-200 pb-2">Legal Basis</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-6">
              <li><strong>Legitimate Interest:</strong> Analytics to improve our site and services</li>
              <li><strong>Consent:</strong> Where required, we seek consent before placing cookies</li>
            </ul>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
              <h3 className="text-emerald-700 font-semibold mb-2">Questions About Our Cookie Policy?</h3>
              <p className="text-gray-700 mb-3">If you have questions about cookies or this policy, contact us:</p>
              <ul className="space-y-1 text-gray-700">
                <li>
                  <i className="fas fa-envelope mr-2 text-green-600" />
                  <strong>Email:</strong> privacy@synergygulf.com
                </li>
                <li>
                  <i className="fas fa-phone mr-2 text-green-600" />
                  <strong>Phone:</strong> +974 5016 2727
                </li>
                <li>
                  <i className="fas fa-map-marker-alt mr-2 text-green-600" />
                  <strong>Address:</strong> Al Nayf, Doha, Qatar
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4 border-b border-gray-200 pb-2">Related Policies</h2>
            <p className="text-gray-700">
              Read alongside our{" "}
              <Link to="/privacy-policy" className="text-green-600 hover:text-green-700 underline">
                Privacy Policy
              </Link>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CookiePolicy;
