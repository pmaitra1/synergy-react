// src/components/ScrollToHash.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NAV_OFFSET = 80; // adjust to your Navbar height

export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Always scroll to top on route change
    window.scrollTo({ top: 0 });

    if (!hash) return;

    // Wait a tick to ensure target exists (useful when navigating from subpages to "/")
    const id = hash.replace("#", "");
    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
        window.scrollTo({ top: y, behavior: "smooth" });
        return true;
      }
      return false;
    };

    // Try immediately, or retry a few times if the element isn't mounted yet
    if (!tryScroll()) {
      let attempts = 0;
      const iv = setInterval(() => {
        attempts += 1;
        if (tryScroll() || attempts > 20) clearInterval(iv);
      }, 50);
      return () => clearInterval(iv);
    }
  }, [pathname, hash]);

  return null;
}
