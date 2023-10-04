// Navbar.js

import React, { useState, useEffect } from "react";
import "./navbar.css";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${scrolling ? "scrolling" : ""}`}>
      <div className="company-name"></div>
      <div className="nav-buttons">
        <button>About Us</button>
        <button>Our Services</button>
        <button>Contact Us</button>
        <button>Book Appointment</button>
      </div>
    </div>
  );
};

export default Navbar;
