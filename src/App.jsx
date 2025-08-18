import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CookieConsent from "react-cookie-consent";
import NavBar from './components/NavBar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Projects from './components/Projects.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import Contact from './components/Contact.jsx';
import CTA from "./components/CTA.jsx";
import Footer from './components/Footer.jsx';
import Rawdat from './pages/Rawdat.jsx';
import Farm from './pages/Farm.jsx'; 
import Station from "./pages/Station.jsx";
import HospitalScada from "./pages/HospitalScada.jsx"; // ✅ New import
import PowerQuality  from "./pages/PowerQuality.jsx";
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'; // ✅ New import
import CookiePolicy from "./pages/CookiePolicy.jsx";
import ScrollToTop from './components/ScrollToTop';
import ScrollToHash from './components/ScrollToHash.jsx';

// Fallback 404 Page
const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-800">
    <div className="text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl">Sorry, the page you’re looking for doesn’t exist.</p>
    </div>
  </div>
);

// Home page layout
const Home = () => (
  <>
    <NavBar />
    <div id="home">
      <Hero />
    </div>
    <div id="about">
      <About />
    </div>
    <div id="services">
      <Services />
    </div>
    <div id="projects">
      <Projects />
    </div>
    <div id="why-us">
      <WhyChooseUs />
    </div>
    <div id="contact">
      <Contact />
    </div>
    <CTA />
    <Footer />
  </>
);


// Main App
function App() {
   const grantConsent = () => {
    if (window.gtag) {
      window.gtag('consent', 'update', {
        ad_storage: 'granted',
        analytics_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted'
      });
    }
  };

  const denyConsent = () => {
    if (window.gtag) {
      window.gtag('consent', 'update', {
        ad_storage: 'denied',
        analytics_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied'
      });
    }
  };
  return (
    <div className="bg-gray-50 text-gray-800 antialiased scroll-smooth">
      <Router>
        <ScrollToTop />
        <ScrollToHash />
        <CookieConsent
            debug                       // ← forces it to show even if the cookie already exists
            location="bottom"
            cookieName="synergy_cookie_consent"
            enableDeclineButton
            buttonText="Accept"
            declineButtonText="Decline"
            style={{ background: "#1F2937", zIndex: 9999 }}                  // keep it above headers/modals
            buttonStyle={{ background: "#FACC15", color: "#000", fontWeight: "bold" }}
            declineButtonStyle={{ background: "#F87171", color: "#fff" }}
            onAccept={grantConsent}
            onDecline={denyConsent}
            >
            We use cookies to enhance your browsing experience, serve personalized ads or content, 
            and analyze our traffic.{" "}
            <a href="/cookie-policy" className="underline text-yellow-300">Learn more</a>.
        </CookieConsent>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rawdat" element={<Rawdat />} />
          <Route path="/farm" element={<Farm />} />
          <Route path="/station" element={<Station />} />
          <Route path="/hospitalscada" element ={<HospitalScada />} />
          <Route path="/powerquality" element={<PowerQuality />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
