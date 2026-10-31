import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import Slider from "react-slick";

// --- Reusable Components ---

const ServiceFeatureSection = ({
  reverse = false,
  bgColor = "bg-white",
  bgStyle = {},
  imageSrc,
  badgeIcon,
  badgeTitle,
  badgeSubtitle,
  badgePosition = "bottom-end",
  badgeBg = "bg-white text-dark",
  label,
  labelBg = "bg-primary-subtle text-primary",
  title,
  description,
  features,
  layoutType = "grid",
  ctaText,
  ctaLink = "/contact",
  ctaStyle = "primary"
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <section className={`py-5 ${bgColor} position-relative overflow-hidden`} style={bgStyle}>
      <div className="container py-5 my-5 position-relative" style={{ zIndex: 1 }}>
        <div className={`row align-items-center g-5 ${reverse ? 'flex-row-reverse' : ''}`}>
          {/* Image Column */}
          <motion.div
            initial={{ x: reverse ? 100 : -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
            viewport={{ once: true }}
            className="col-lg-6"
          >
            <div className="position-relative">
              {/* Modern background shape */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className={`position-absolute rounded-5 ${reverse ? 'bg-white shadow-sm' : 'bg-primary opacity-10'}`}
                style={reverse ? { top: "30px", left: "30px", right: "-30px", bottom: "-30px", zIndex: 0 } : { top: "-30px", left: "-30px", right: "30px", bottom: "30px", zIndex: 0 }}
              ></motion.div>

              <div className="overflow-hidden rounded-5 shadow-2xl position-relative z-1">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={imageSrc}
                  alt="Service"
                  className="img-fluid w-100 h-100 object-fit-cover"
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
                className={`position-absolute ${badgePosition === 'bottom-end' ? 'bottom-0 end-0' : 'top-0 start-0'} ${badgeBg} p-4 rounded-4 shadow-2xl z-2 border`}
                style={{ transform: badgePosition === 'bottom-end' ? "translate(30px, 30px)" : "translate(-30px, -30px)", minWidth: "180px" }}
              >
                <div className="d-flex align-items-center gap-3">
                  {badgeIcon && <div className={badgeBg.includes('primary') ? "bg-white text-primary p-3 rounded-circle fs-3 shadow-sm" : "bg-primary-subtle text-primary p-3 rounded-circle fs-3"}><i className={`bi ${badgeIcon}`}></i></div>}
                  <div>
                    <h3 className="fw-bold mb-0 h4">{badgeTitle}</h3>
                    <span className={badgeBg.includes('text-white') ? "text-white-50 small" : "text-muted small fw-medium"}>{badgeSubtitle}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className={`col-lg-6 ${reverse ? 'pe-lg-5' : 'ps-lg-5'}`}
          >
            <motion.div variants={itemVariants} className="mb-4">
              <span className={`d-inline-flex align-items-center ${labelBg} fw-bold px-4 py-2 rounded-pill small text-uppercase shadow-sm`} style={{ letterSpacing: "1.5px" }}>
                {label}
              </span>
            </motion.div>

            <motion.h2 variants={itemVariants} className="display-4 fw-bold mb-4 text-dark" style={{ lineHeight: "1.2" }} dangerouslySetInnerHTML={{ __html: title }}></motion.h2>

            <motion.p variants={itemVariants} className="text-black mb-5 fs-5 lh-lg" style={{ fontWeight: "500" }}>{description}</motion.p>

            {layoutType === "grid" ? (
              <div className="row g-4 mb-5">
                {features.map((item, i) => (
                  <div key={i} className="col-sm-6">
                    <motion.div
                      variants={{
                        ...itemVariants,
                        hover: { y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }
                      }}
                      whileHover="hover"
                      className="d-flex align-items-center gap-3 p-4 rounded-4 transition-all h-100"
                      style={{ cursor: "pointer", backgroundColor: "var(--bg-grey)" }}
                    >
                      <motion.div
                        variants={{
                          rest: { backgroundColor: "rgba(37, 99, 235, 0.1)", color: "#2563eb" },
                          hover: { backgroundColor: "#2563eb", color: "#ffffff", scale: 1.1 }
                        }}
                        transition={{ duration: 0.3 }}
                        className="fs-3 p-3 rounded-3 d-flex align-items-center justify-content-center"
                        style={{ width: "60px", height: "60px" }}
                      >
                        <i className={`bi ${item.icon}`} style={{ color: "inherit" }}></i>
                      </motion.div>
                      <motion.span
                        variants={{ hover: { x: 5 } }}
                        className="fw-bold text-dark h6 mb-0 transition-all"
                      >
                        {item.title}
                      </motion.span>
                    </motion.div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mb-5">
                {features.map((feature, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="d-flex align-items-center gap-4 mb-4 bg-white p-3 rounded-4 shadow-sm border transition-all"
                    style={{ cursor: "pointer" }}
                  >
                    <div className="bg-primary text-white rounded-circle p-2 d-flex align-items-center justify-content-center shadow-sm" style={{ width: "35px", height: "35px" }}>
                      <i className="bi bi-check-lg fw-bold"></i>
                    </div>
                    <span className="fw-bold text-dark">{feature}</span>
                  </motion.div>
                ))}
              </div>
            )}

            <motion.div
              variants={itemVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
              className="pt-3 d-inline-block"
            >
              {ctaStyle === "primary" ? (
                <motion.div variants={{ hover: { scale: 1.05 } }}>
                  <Link to={ctaLink} className="btn btn-primary btn-lg rounded-pill px-5 py-3 fw-bold shadow-lg transition-all" style={{ backgroundColor: "var(--btn-blue)", border: "none" }}>
                    {ctaText} <motion.i variants={{ hover: { x: 5 } }} transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.6 }} className="bi bi-arrow-right ms-2"></motion.i>
                  </Link>
                </motion.div>
              ) : (
                <motion.div variants={{ hover: { scale: 1.05 } }}>
                  <Link to={ctaLink} className="btn btn-outline-primary btn-lg rounded-pill px-5 py-3 fw-bold border-2 transition-all">
                    {ctaText} <motion.i variants={{ hover: { x: 5 } }} transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.6 }} className="bi bi-calendar-check ms-2"></motion.i>
                  </Link>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- New Premium Service Section (Advanced Aesthetics & Animations) ---
const PremiumServiceSection = ({
  reverse = false,
  bgColor = "bg-white",
  label,
  title,
  description,
  imageSrc,
  badgeIcon,
  badgeTitle,
  badgeSubtitle,
  features = [],
  ctaText
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    }
  };

  return (
    <section 
      className={`py-5 position-relative overflow-hidden`}
      style={{ backgroundColor: bgColor === "bg-light" ? "var(--bg-grey)" : "var(--bg-light)" }}
    >
      <div className="container py-5 my-5 position-relative" style={{ zIndex: 1 }}>
        <div className={`row align-items-center g-5 ${reverse ? 'flex-row-reverse' : ''}`}>
          
          {/* Visual Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ once: true }}
            className="col-lg-6"
          >
            <div className="position-relative">
              {/* Solid Blue Decorative Box (Matching Visa Section Style) */}
              <motion.div 
                animate={{ rotate: [0, 2, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="position-absolute rounded-5 bg-primary shadow-lg"
                style={{ 
                  top: "-20px", 
                  left: reverse ? "20px" : "-20px", 
                  right: reverse ? "-20px" : "20px", 
                  bottom: "20px", 
                  zIndex: 0,
                  opacity: 0.85
                }}
              ></motion.div>

              {/* Main Image with Mask Effect */}
              <div className="rounded-5 overflow-hidden shadow-2xl position-relative z-1 border-white border-8 bg-white">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src={imageSrc} 
                  alt="Feature" 
                  className="img-fluid w-100 object-fit-cover" 
                  style={{ height: "550px" }}
                />
              </div>

              {/* Advanced Floating Badge (Glassmorphism) */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="position-absolute top-0 end-0 translate-middle-y z-2 p-4 rounded-5 shadow-2xl border-white border-2"
                style={{ 
                  background: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(15px)",
                  minWidth: "160px",
                  transform: "translate(30px, -20px)"
                }}
              >
                <div className="text-center">
                  <div className="bg-primary text-white rounded-circle p-3 d-inline-flex mb-2 shadow-lg">
                    <i className={`bi ${badgeIcon} fs-4`}></i>
                  </div>
                  <h3 className="fw-black mb-0 text-dark">{badgeTitle}</h3>
                  <span className="text-muted small fw-bold tracking-widest text-uppercase">{badgeSubtitle}</span>
                </div>
              </motion.div>

              {/* Subtle Decorative Badge */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="position-absolute bottom-0 start-0 z-2 bg-dark text-white p-3 rounded-4 shadow-2xl translate-middle-x"
                style={{ marginLeft: "40px", marginBottom: "40px" }}
              >
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-success rounded-circle" style={{ width: "10px", height: "10px" }}></div>
                  <span className="small fw-bold">Live Training Sessions</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="col-lg-6"
          >
            <motion.div variants={itemVariants} className="mb-4">
              <span className="badge bg-primary-subtle text-primary px-4 py-2 rounded-pill shadow-sm fw-black tracking-widest text-uppercase" style={{ fontSize: "0.75rem" }}>
                {label}
              </span>
            </motion.div>

            <motion.h2 
              variants={itemVariants} 
              className="display-4 fw-bold mb-4 text-dark" 
              style={{ lineHeight: "1.2" }} 
              dangerouslySetInnerHTML={{ __html: title }}
            ></motion.h2>

            <motion.p variants={itemVariants} className="text-black fs-5 mb-5 lh-lg" style={{ fontWeight: "500" }}>
              {description}
            </motion.p>

            {/* Premium Feature Grid */}
            <div className="row g-4 mb-5">
              {features.map((feat, i) => (
                <motion.div 
                  key={i} 
                  className="col-sm-6"
                  variants={itemVariants}
                >
                  <motion.div 
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="p-4 rounded-4 bg-white border border-light-subtle transition-all h-100 shadow-sm"
                    style={{ cursor: "pointer" }}
                  >
                    <div className="d-flex align-items-center gap-3">
                      <div className="bg-primary text-white rounded-circle p-2 d-flex shadow-sm" style={{ width: "45px", height: "45px", flexShrink: 0 }}>
                        <i className={`bi ${feat.icon} fs-5 m-auto`}></i>
                      </div>
                      <span className="fw-black text-dark small">{feat.title}</span>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="d-flex gap-4">
              <Link to="/contact" className="btn btn-primary btn-lg rounded-pill px-5 py-3 fw-black shadow-lg" style={{ backgroundColor: "var(--btn-blue)", border: "none" }}>
                {ctaText} <i className="bi bi-arrow-right ms-2"></i>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


const LanguageCard = ({ lang, idx }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: idx * 0.1 }}
    viewport={{ once: true }}
    whileHover="hover"
    className="h-100 p-2"
  >
    <motion.div 
      className="p-5 h-100 rounded-5 text-center border position-relative overflow-hidden shadow-sm" 
      style={{ 
        zIndex: 1, 
        cursor: "pointer", 
        backgroundColor: "var(--bg-grey)",
        transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)" 
      }}
      variants={{
        hover: { y: -10, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)", borderColor: "var(--btn-blue)" }
      }}
    >
      {/* Accent Top Border */}
      <div className="position-absolute top-0 start-0 w-100 h-2 bg-primary"></div>
      
      <motion.div 
        className="p-4 rounded-circle d-inline-flex align-items-center justify-content-center mb-4 border shadow-sm"
        style={{ width: "80px", height: "80px", backgroundColor: "#ffffff", color: "var(--btn-blue)" }}
        variants={{
          hover: { backgroundColor: "var(--btn-blue)", color: "#ffffff", scale: 1.1, rotate: 15 }
        }}
      >
        <i className={`bi ${lang.icon} fs-2`}></i>
      </motion.div>
      
      <h4 className="fw-black mb-3 text-dark">{lang.title}</h4>
      <div className="badge bg-primary-subtle text-primary rounded-pill px-4 py-2 mb-4 small fw-bold shadow-sm">{lang.level}</div>
      <p className="text-dark mb-0 lh-base fw-bold px-2" style={{ fontSize: "0.95rem" }}>{lang.desc}</p>
      
      {/* Decorative background element removed as requested */}
    </motion.div>
  </motion.div>
);

// --- Helper Components ---
const CountUp = ({ to, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(to.replace(/[,+]/g, ''));
      if (isNaN(end)) {
        setCount(to);
        return;
      }
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(to);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start).toLocaleString() + (to.includes('+') ? '+' : ''));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, to, duration]);

  return <span ref={ref}>{count}</span>;
};

// --- E-Commerce Data ---
const ECOMMERCE_DATA = [
  { 
    title: "Amazon FBA Mastery", 
    level: "Beginner to Pro", 
    desc: "Learn to build a highly profitable Amazon business from scratch. Covers product hunting, sourcing, and PPC campaigns.", 
    icon: "bi-box-seam", 
    features: ["Product Hunting Secrets", "Supplier Sourcing", "PPC Optimization"],
    color: "#2563eb" 
  },
  { 
    title: "Shopify Dropshipping", 
    level: "Intermediate", 
    desc: "Master the art of creating high-converting Shopify stores and driving targeted traffic using Facebook and TikTok Ads.", 
    icon: "bi-cart-check", 
    features: ["Store Design & Conversion", "Winning Product Research", "FB/TikTok Ads Strategy"],
    color: "#2563eb"
  },
  { 
    title: "Digital Marketing", 
    level: "Advanced", 
    desc: "Become a full-stack digital marketer. Master SEO, Social Media, Email Marketing, and Analytics to scale any brand.", 
    icon: "bi-graph-up-arrow", 
    features: ["Advanced SEO Tactics", "Social Media Mastery", "Google Analytics 4"],
    color: "#2563eb"
  }
];

const EcommerceCard = ({ course, idx }) => {
  const accent = course.color;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: idx * 0.15, type: "spring", stiffness: 100 }}
      viewport={{ once: true }}
      whileHover="hover"
      animate={{ 
        y: [0, -8, 0],
        transition: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.5 }
      }}
      className="col-lg-4 col-md-6"
    >
      <motion.div
        variants={{
          hover: {
            y: -20,
            scale: 1.05,
            boxShadow: `0 30px 60px ${accent}40`,
            borderColor: accent
          }
        }}
        className="h-100 rounded-5 text-start position-relative overflow-hidden transition-all"
        style={{
          cursor: "pointer",
          backgroundColor: "#ffffff",
          border: "none",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)"
        }}
      >
        {/* Top Accent Line */}
        <motion.div
          variants={{ hover: { scaleX: 1, opacity: 1 } }}
          initial={{ scaleX: 0, opacity: 0 }}
          style={{
            height: "5px",
            background: accent,
            transformOrigin: "left"
          }}
        />

        <div className="p-5 position-relative z-1">
          {/* Icon & Badge Header */}
          <div className="d-flex justify-content-between align-items-start mb-4">
            <motion.div
              variants={{ hover: { scale: 1.2, rotate: 12, backgroundColor: accent, color: "#fff" } }}
              className="rounded-4 d-inline-flex align-items-center justify-content-center shadow-sm transition-all"
              style={{
                width: "70px", height: "70px",
                backgroundColor: `${accent}15`,
                color: accent
              }}
            >
              <i className={`bi ${course.icon} fs-2`}></i>
            </motion.div>
            <span
              className="badge rounded-pill px-4 py-2 fw-bold text-uppercase shadow-sm"
              style={{
                backgroundColor: `${accent}10`,
                color: accent,
                letterSpacing: "1px",
                fontSize: "0.72rem",
                border: `1px solid ${accent}40`
              }}
            >
              {course.level}
            </span>
          </div>

          <h4 className="fw-black text-dark mb-3" style={{ fontSize: "1.6rem", lineHeight: 1.2 }}>{course.title}</h4>
          <p className="text-muted mb-4 lh-lg" style={{ fontSize: "1rem", fontWeight: 500, opacity: 0.8 }}>{course.desc}</p>

          {/* Features List with Staggered Hover Animation */}
          <div className="d-flex flex-column gap-3 mb-5">
            {course.features.map((f, i) => (
              <motion.div
                key={i}
                variants={{
                  hover: { x: 8, transition: { delay: i * 0.08, type: "spring", stiffness: 300 } }
                }}
                className="d-flex align-items-center gap-3"
              >
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 shadow-sm"
                  style={{ width: "26px", height: "26px", backgroundColor: `${accent}20` }}
                >
                  <i className="bi bi-check-lg" style={{ color: accent, fontSize: "0.9rem", fontWeight: "bold" }}></i>
                </div>
                <span className="text-dark fw-bold" style={{ fontSize: "0.95rem", opacity: 0.9 }}>{f}</span>
              </motion.div>
            ))}
          </div>

          {/* Action Link */}
          <div className="mt-auto pt-2">
            <Link
              to="/contact"
              className="d-flex align-items-center gap-2 fw-black text-decoration-none transition-all"
              style={{ color: accent, fontSize: "1rem", letterSpacing: "0.5px" }}
            >
              Get Started <motion.i variants={{ hover: { x: 5 } }} className="bi bi-arrow-right fs-4"></motion.i>
            </Link>
          </div>
        </div>



        {/* Decorative background watermark removed as requested */}
      </motion.div>
    </motion.div>
  );
};

const ServicesHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1920",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1920"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="position-relative overflow-hidden" style={{ height: "95vh" }}>
      <div className="h-100 w-100 position-absolute top-0 start-0 bg-dark">
        {slides.map((slide, index) => (
          <motion.img
            key={index}
            src={slide}
            alt={`Services Banner ${index + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
          />
        ))}
        {/* Dark overlay for text readability */}
        <div className="position-absolute top-0 start-0 w-100 h-100 z-1" style={{ background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.85))" }}></div>
      </div>

      {/* Static text overlay centered on top of slider */}
      <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center z-2" style={{ pointerEvents: "none" }}>
        <div className="container mt-5 pt-5" style={{ pointerEvents: "auto" }}>
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="display-2 fw-bold text-white mb-4"
            style={{ lineHeight: "1.1" }}
          >
            Comprehensive <br />
            <span className="text-primary">Global Solutions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lead text-white-50 mx-auto mb-5" style={{ maxWidth: "600px", fontSize: "1.25rem" }}
          >
            Expert visa consultancy, world-class language training, and elite e-commerce courses tailored for your international success.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="d-flex gap-3 justify-content-center"
          >
            <Link to="/contact" className="btn btn-primary btn-lg rounded-pill px-5 py-3 fw-bold shadow-lg" style={{ backgroundColor: "var(--btn-blue)", border: "none" }}>
              Explore Services
            </Link>
            <Link to="/contact" className="btn btn-outline-light btn-lg rounded-pill px-5 py-3 fw-bold">
              Free Consultation
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


// --- Main Component ---




const Services = () => {

  const languages = [
    { title: "German", level: "A1 - B2", desc: "Master the language of Europe's largest economy. Essential for work and study in Germany.", icon: "bi-globe-europe-africa" },
    { title: "French", level: "DELF/DALF", desc: "Elegant French training for Canada immigration and European work permits.", icon: "bi-translate" },
    { title: "Spanish", level: "Beginner - Adv", desc: "Connect with 20+ countries. Engaging courses for personal and professional growth.", icon: "bi-chat-text" },
    { title: "Korean", level: "TOPIK Prep", desc: "Unlock opportunities in South Korea with our intensive TOPIK exam training.", icon: "bi-person-badge" },
    { title: "Italian", level: "A1 - C2", desc: "Experience the art and culture of Italy. Perfect for leisure and specialized careers.", icon: "bi-palette-fill" },
    { title: "Japanese", level: "JLPT N5-N1", desc: "From business to anime, master Japanese with our comprehensive proficiency training.", icon: "bi-flower1" }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    cssEase: "linear",
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };


  return (
    <div className="services-page overflow-hidden">

      {/* 1. Premium Hero Section */}
      <ServicesHero />


      {/* 2. Service 1: Visa Consultancy (Alternating Layout - White) */}
      <ServiceFeatureSection
        bgColor="bg-white"
        reverse={false}
        imageSrc="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800"
        badgeIcon="bi-passport"
        badgeTitle="98%"
        badgeSubtitle="Success Rate"
        badgePosition="bottom-end"
        badgeBg="bg-white text-dark"
        label="Immigration Services"
        labelBg="bg-primary-subtle text-primary"
        title="World-Class <br/> Visa Consultancy"
        description="Navigating the complexities of international immigration requires precision and expertise. Our certified consultants provide end-to-end guidance for study, work, and visit visas across top global destinations."
        layoutType="grid"
        features={[
          { title: "Student Visas", icon: "bi-mortarboard" },
          { title: "Work Permits", icon: "bi-briefcase" },
          { title: "Visit Visas", icon: "bi-airplane" },
          { title: "Business Visas", icon: "bi-buildings" }
        ]}
        ctaText="Evaluate My Profile"
        ctaStyle="primary"
      />

      {/* 3. Service 2: IELTS Preparation (Premium & Attractive Layout) */}
      <PremiumServiceSection 
        reverse={true}
        bgColor="bg-light"
        label="International Success"
        title="Elevate Your <br/>IELTS Band Score"
        description="Master the art of the IELTS exam with our world-class training program. We combine expert pedagogy with intensive practice to ensure you achieve your target band on the very first attempt."
        imageSrc="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000"
        badgeIcon="bi-star-fill"
        badgeTitle="8.5+"
        badgeSubtitle="Band Goal"
        features={[
          { title: "Listening Mastery", icon: "bi-headphones" },
          { title: "Reading Precision", icon: "bi-book" },
          { title: "Writing Excellence", icon: "bi-pencil-square" },
          { title: "Speaking Fluency", icon: "bi-mic" }
        ]}
        ctaText="Enroll Today"
      />



      {/* 4. Service 3: Other Languages (Premium Academy Layout) */}
      <section className="py-5 bg-light position-relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="position-absolute top-0 start-0 w-100 h-100 opacity-5" style={{ backgroundImage: "radial-gradient(#2563eb 0.5px, transparent 0.5px)", backgroundSize: "20px 20px" }}></div>

        <div className="container py-5 my-5 position-relative">
          <div className="text-center mb-5 pb-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="d-inline-block bg-primary-subtle text-primary fw-bold px-4 py-2 rounded-pill mb-4 small text-uppercase shadow-sm" style={{ letterSpacing: "2px" }}>
                <i className="bi bi-mortarboard-fill me-2"></i> Polyglot Academy
              </div>
              <h2 className="display-4 fw-bold mb-3 text-dark">Master Foreign Languages</h2>
              <p className="text-muted lead mx-auto" style={{ maxWidth: "750px" }}>
                Step into the global arena with fluency in the world's most influential languages. Our immersive training methods guarantee rapid progress and cultural mastery.
              </p>
            </motion.div>
          </div>

          <div className="row g-4 mb-5 pb-4 px-3">
            <Slider {...sliderSettings}>
              {languages.map((lang, idx) => (
                <LanguageCard key={idx} lang={lang} idx={idx} />
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* 5. Service 4: E-Commerce Courses (Premium Light Redesign) */}
      <section
        className="position-relative overflow-hidden"
        style={{ backgroundColor: "#0f172a", paddingTop: "120px", paddingBottom: "120px" }}
      >
        {/* Animated Background Grid */}
        <div 
          className="position-absolute top-0 start-0 w-100 h-100 opacity-20"
          style={{ 
            backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
            maskImage: "radial-gradient(ellipse at center, black, transparent 80%)"
          }}
        ></div>

        {/* Soft Animated background orbs */}
        <motion.div
          animate={{ 
            x: [0, 100, 0], 
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="position-absolute rounded-circle"
          style={{ width: "700px", height: "700px", top: "-350px", left: "-250px", background: "radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%)", filter: "blur(80px)", zIndex: 0 }}
        />
        <motion.div
          animate={{ 
            x: [0, -80, 0], 
            y: [0, -40, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="position-absolute rounded-circle"
          style={{ width: "600px", height: "600px", bottom: "-300px", right: "-200px", background: "radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)", filter: "blur(80px)", zIndex: 0 }}
        />

        <div className="container position-relative" style={{ zIndex: 1 }}>

          {/* Section Header */}
          <div className="text-center mb-5 pb-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="d-inline-block bg-primary-subtle text-primary fw-bold px-4 py-2 rounded-pill mb-4 small text-uppercase shadow-sm" style={{ letterSpacing: "2px" }}>
                <i className="bi bi-lightning-charge-fill me-2"></i> Digital Wealth
              </div>
              <h2 className="display-4 fw-black mb-3 text-white">E-Commerce & Digital Skills</h2>
              <p className="lead mx-auto" style={{ maxWidth: "750px", color: "rgba(255,255,255,0.6)" }}>
                Learn highly monetizable skills from industry practitioners. Build passive income streams and scale global digital businesses.
              </p>
            </motion.div>
          </div>

          {/* Animated Stats Row */}
          <div className="row g-4 justify-content-center mb-5 pb-4">
            {[
              { value: "5,000+", label: "Students Trained", icon: "bi-people-fill", color: "#2563eb" },
              { value: "92%", label: "Success Rate", icon: "bi-graph-up-arrow", color: "#2563eb" },
              { value: "3", label: "Expert Tracks", icon: "bi-layers-fill", color: "#2563eb" },
              { value: "Live", label: "Mentorship", icon: "bi-camera-video-fill", color: "#2563eb" }
            ].map((stat, i) => (
              <div key={i} className="col-6 col-lg-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  animate={{ 
                    y: [0, -5, 0],
                    transition: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }
                  }}
                  whileHover={{ 
                    y: -15, 
                    scale: 1.08, 
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    borderColor: stat.color,
                    boxShadow: `0 25px 50px ${stat.color}40`,
                    zIndex: 10
                  }}
                  transition={{ type: "spring", stiffness: 400 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-4 shadow-lg text-center border border-white border-opacity-10 h-100 transition-all"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.05)", backdropFilter: "blur(12px)", cursor: "pointer" }}
                >
                  <motion.div 
                    className="mb-2"
                    variants={{ hover: { scale: 1.3, rotate: 15, color: "#fff" } }}
                  >
                    <motion.i 
                      animate={{ 
                        scale: [1, 1.1, 1],
                      }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className={`bi ${stat.icon} d-inline-block`} 
                      style={{ color: stat.color, fontSize: "1.8rem" }}
                    ></motion.i>
                  </motion.div>
                  <div className="fw-black text-white h2 mb-1">
                    <CountUp to={stat.value} />
                  </div>
                  <div className="small fw-bold text-uppercase" style={{ letterSpacing: "1.5px", color: "rgba(255,255,255,0.7)" }}>{stat.label}</div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="row g-4 justify-content-center mb-5">
            {ECOMMERCE_DATA.map((course, idx) => (
              <EcommerceCard key={idx} course={course} idx={idx} />
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-5"
          >
            <Link
              to="/contact"
              className="btn btn-primary btn-lg rounded-pill px-5 py-3 fw-black shadow-lg d-inline-flex align-items-center gap-2"
              style={{ backgroundColor: "var(--btn-blue)", border: "none" }}
            >
              Book a Free Consultation <i className="bi bi-calendar2-check"></i>
            </Link>
          </motion.div>

        </div>
      </section>

      {/* 6. Final CTA Banner (Radix Premium Style) */}
      <section className="py-5 my-5 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-5 p-lg-5 text-center position-relative overflow-hidden shadow-2xl"
            style={{
              background: "#2563eb",
              color: "white",
              borderRadius: "50px"
            }}
          >
            {/* Background Decorative Rings */}
            <div className="position-absolute top-0 start-0 translate-middle bg-white opacity-10 rounded-circle" style={{ width: "400px", height: "400px" }}></div>
            <div className="position-absolute bottom-0 end-0 bg-white opacity-10 rounded-circle" style={{ width: "400px", height: "400px", transform: "translate(20%, 20%)" }}></div>

            <div className="position-relative z-1 py-4">
              <h2 className="display-3 fw-bold mb-4 text-white">Unlock Your Potential <br /> With Radix</h2>
              <p className="lead text-white mb-5 mx-auto" style={{ maxWidth: "750px", fontWeight: "600" }}>Whether you're moving abroad, mastering a language, or building an e-commerce empire, your journey begins here.</p>
              <div className="d-flex flex-wrap justify-content-center gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/contact" className="btn btn-light text-primary btn-lg rounded-pill px-5 py-3 fw-bold shadow-lg">Start Your Journey Today</Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Services;
