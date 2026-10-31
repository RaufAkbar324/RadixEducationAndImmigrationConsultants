import React, { useState, useEffect } from "react";
import { NavLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from "../assets/Logo1.png";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="navbar-wrapper fixed-top w-100 d-flex justify-content-center" style={{ pointerEvents: "none", zIndex: 1000 }}>
      <motion.nav 
        layout
        initial={{ y: -100 }}
        animate={{ 
          y: scrolled ? 15 : 0,
          width: scrolled ? "94%" : "100%",
          borderRadius: scrolled ? "100px" : "0px",
          backgroundColor: "#0f172a",
        }}
        transition={{ 
          duration: 0.4, 
          ease: [0.4, 0, 0.2, 1], // Custom cubic-bezier for perfect synchronization
          layout: { duration: 0.4 }
        }}
        className={`navbar navbar-expand-lg navbar-dark shadow-lg ${scrolled ? 'navbar-scrolled' : 'py-3'}`}
        style={{ 
          backdropFilter: "blur(15px)",
          border: scrolled ? "1px solid rgba(255, 255, 255, 0.15)" : "none",
          pointerEvents: "auto",
          maxWidth: scrolled ? "1400px" : "100vw",
          position: "relative"
        }}
      >
        <div className="container">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link className="navbar-brand d-flex align-items-center" to="/">
              <img src={logo} alt="Radix Logo" width={scrolled ? "50" : "75"} className="me-3 transition-all" />
              <span className={`navbar-logo-text fw-bold transition-all ${scrolled ? 'fs-4' : 'fs-3'}`} style={{ letterSpacing: "2px" }}>RADIX</span>
            </Link>
          </motion.div>

          <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <motion.ul 
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1,
                  transition: { staggerChildren: 0.05 }
                }
              }}
              className="navbar-nav mx-auto mb-2 mb-lg-0"
            >
              {[
                { path: "/", label: "Home" },
                { path: "/about", label: "About" },
                { path: "/services", label: "Services" },
                { path: "/programs", label: "Programs" },
                { path: "/contact", label: "Contact" }
              ].map((link, i) => (
                <motion.li 
                  key={i}
                  variants={{
                    hidden: { y: -10, opacity: 0 },
                    visible: { y: 0, opacity: 1 }
                  }}
                  className="nav-item mx-1"
                >
                  <NavLink className={({ isActive }) => `nav-link fw-semibold nav-hover-link ${scrolled ? 'py-1 px-3 fs-6' : 'py-2 px-3'} ${isActive ? 'active' : ''}`} to={link.path}>
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="d-flex align-items-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className={`btn btn-consultation rounded-pill fw-bold text-white shadow-lg transition-all ${scrolled ? 'px-3 py-1 small' : 'px-4 py-2'}`}>
                  {scrolled ? 'Apply Now' : 'Request Consultation'}
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
