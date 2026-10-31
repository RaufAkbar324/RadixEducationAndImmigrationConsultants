import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/Logo1.png";
import "./Footer.css";

const Footer = () => {
  const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

  const staggerLinks = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    },
    viewport: { once: true }
  };

  const linkItem = {
    initial: { x: -10, opacity: 0 },
    whileInView: { x: 0, opacity: 1 }
  };

  return (
    <footer className="footer pt-5 pb-4 overflow-hidden" style={{ backgroundColor: "#0f172a", color: "#94a3b8", position: "relative" }}>
      {/* Top Border Glow */}
      <div className="position-absolute top-0 start-0 w-100" style={{ height: "1px", background: "linear-gradient(90deg, transparent, var(--btn-blue), transparent)", opacity: "0.5" }}></div>
      
      <div className="container pt-5">
        <div className="row g-5">
          {/* Brand Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="col-lg-4 col-md-12"
          >
            <div className="d-flex align-items-center mb-4">
              <img src={logo} alt="Radix Logo" width="90" className="me-3" />
              <span className="fs-2 footer-logo-text fw-bold text-white" style={{ letterSpacing: "3px" }}>RADIX</span>
            </div>
            <p className="mb-4 pe-lg-5" style={{ lineHeight: "1.9", fontSize: "1rem", color: "rgba(255,255,255,0.7)" }}>
              Radix Immigration Consultants is your premier global partner. We specialize in student success, professional mobility, and world-class training solutions.
            </p>
            
            {/* Social Icons Section */}
            <div className="d-flex gap-3 mt-4">
              {[
                { icon: 'facebook', color: '#1877F2', name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61566409911216' },
                { icon: 'instagram', color: '#E4405F', name: 'Instagram', url: 'https://www.instagram.com/radixedu.consultants/' },
                { icon: 'tiktok', color: '#010101', name: 'TikTok', url: '#' },
                { icon: 'twitter-x', color: '#000000', name: 'Twitter', url: '#' }
              ].map((social, i) => (
                <motion.a 
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ 
                    y: -10, 
                    backgroundColor: social.color,
                    borderColor: social.color,
                    color: "#fff",
                    boxShadow: `0 15px 30px ${social.color}66`
                  }}
                  transition={{ 
                    y: { type: "spring", stiffness: 400, damping: 30 },
                    backgroundColor: { duration: 0 },
                    borderColor: { duration: 0 },
                    boxShadow: { duration: 0.2 }
                  }}
                  href={social.url || "#"} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex align-items-center justify-content-center text-decoration-none shadow-sm"
                  style={{ 
                    width: "50px", 
                    height: "50px", 
                    borderRadius: "15px", 
                    backgroundColor: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "#ffffff",
                    fontSize: "1.2rem"
                  }}
                >
                  <i className={`bi bi-${social.icon}`}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services Column */}
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="col-lg-2 col-md-4">
            <h5 className="text-white fw-bold mb-4 position-relative d-inline-block">
                Visa Services
                <div className="position-absolute bottom-0 start-0 w-50 bg-primary" style={{ height: "2px", marginBottom: "-8px" }}></div>
            </h5>
            <motion.div variants={staggerLinks} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="footer-links mt-4">
              {['Student Visa', 'Visit Visa', 'Work Permit', 'Business Visa', 'Family Reunion'].map((link, i) => (
                <motion.div key={i} variants={linkItem} className="mb-3">
                  <motion.div whileHover={{ x: 10, y: -2, color: "#ffffff" }} transition={{ type: "spring", stiffness: 300 }}>
                    <Link to="/services" className="text-decoration-none" style={{ color: "inherit", transition: "color 0.3s", display: "inline-block" }}>{link}</Link>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="col-lg-2 col-md-4">
            <h5 className="text-white fw-bold mb-4 position-relative d-inline-block">
                Quick Links
                <div className="position-absolute bottom-0 start-0 w-50 bg-primary" style={{ height: "2px", marginBottom: "-8px" }}></div>
            </h5>
            <motion.div variants={staggerLinks} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="footer-links mt-4">
              {['About Radix', 'IELTS Preparation', 'Language Courses', 'Success Stories', 'Contact Us'].map((link, i) => (
                <motion.div key={i} variants={linkItem} className="mb-3">
                   <motion.div whileHover={{ x: 10, y: -2, color: "#ffffff" }} transition={{ type: "spring", stiffness: 300 }}>
                    <Link to={`/${link.toLowerCase().replace(' ', '')}`} className="text-decoration-none" style={{ color: "inherit", transition: "color 0.3s", display: "inline-block" }}>{link}</Link>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Newsletter Column */}
          <motion.div {...fadeInUp} transition={{ delay: 0.4 }} className="col-lg-4 col-md-4">
            <h5 className="text-white fw-bold mb-4 position-relative d-inline-block">
                Stay Updated
                <div className="position-absolute bottom-0 start-0 w-50 bg-primary" style={{ height: "2px", marginBottom: "-8px" }}></div>
            </h5>
            <p className="small mb-4 mt-4 opacity-75">Join our global community for the latest updates and exclusive career insights.</p>
            <form className="mb-4">
              <div className="p-1 rounded-pill bg-white d-flex align-items-center shadow-lg" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
                <input type="email" className="form-control border-0 bg-transparent px-4 py-2" placeholder="Your email address" style={{ boxShadow: "none" }} />
                <button className="btn btn-primary rounded-pill px-4 py-2 fw-bold" type="button" style={{ backgroundColor: "var(--btn-blue)", border: "none" }}>Subscribe</button>
              </div>
            </form>
            <div className="contact-info small opacity-75">
              <div className="d-flex align-items-center mb-3">
                <div className="position-relative me-3 d-flex align-items-center justify-content-center" style={{ width: "24px", height: "24px" }}>
                    <motion.div 
                        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="position-absolute rounded-circle" 
                        style={{ width: "100%", height: "100%", backgroundColor: "var(--btn-blue)" }}
                    ></motion.div>
                    <div className="rounded-circle position-relative shadow-lg" style={{ width: "10px", height: "10px", backgroundColor: "var(--btn-blue)", border: "2px solid white" }}></div>
                </div>
                <span>Global Education Hub, Suite 402</span>
              </div>
              <div className="d-flex align-items-center">
                <div className="position-relative me-3 d-flex align-items-center justify-content-center" style={{ width: "24px", height: "24px" }}>
                    <motion.div 
                        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="position-absolute rounded-circle" 
                        style={{ width: "100%", height: "100%", backgroundColor: "var(--btn-blue)" }}
                    ></motion.div>
                    <div className="rounded-circle position-relative shadow-lg" style={{ width: "10px", height: "10px", backgroundColor: "var(--btn-blue)", border: "2px solid white" }}></div>
                </div>
                <span>info@radixconsultants.com</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <hr className="mt-5 mb-4 w-100" style={{ borderTop: "2px solid #ffffff", opacity: 1, margin: 0 }} />

      <div className="container py-4">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0 small fw-medium" style={{ color: "#ffffff", opacity: 0.9 }}>
              © {new Date().getFullYear()} RADIX Immigration & Educational Consultants. All Rights Reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="footer-legal d-flex justify-content-center justify-content-md-end gap-4 small fw-bold">
              <Link to="#" className="text-white text-decoration-none hover-primary" style={{ opacity: 1 }}>Privacy Policy</Link>
              <Link to="#" className="text-white text-decoration-none hover-primary" style={{ opacity: 1 }}>Terms of Use</Link>
              <Link to="#" className="text-white text-decoration-none hover-primary" style={{ opacity: 1 }}>Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;