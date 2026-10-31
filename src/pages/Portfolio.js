import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// --- Reusable Components for Clean Code ---
const ListingItem = ({ icon, title, subtitle, details, badge, badgeColor = "primary", delay = 0, image, isScrolling = false, cardBg }) => (
  <motion.div 
    initial={isScrolling ? {} : { opacity: 0, y: 40 }}
    whileInView={isScrolling ? {} : { opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.7, ease: "easeOut" }}
    viewport={{ once: true }}
    whileHover={{ y: -20, scale: 1.02 }}
    className={isScrolling ? "mx-3" : "col-lg-4 col-md-6 mb-5"}
    style={isScrolling ? { width: "340px", flexShrink: 0, cursor: "pointer" } : { cursor: "pointer" }}
  >
    <div className="h-100 rounded-5 overflow-hidden border-0 transition-all duration-500 position-relative group shadow-hover" 
         style={{ 
           backgroundColor: cardBg || "var(--bg-grey)",
           boxShadow: cardBg ? "0 20px 60px rgba(0,0,0,0.06)" : "0 10px 30px rgba(0,0,0,0.03), inset 0 0 20px rgba(255,255,255,0.5)",
           border: cardBg ? "1px solid rgba(0,0,0,0.03)" : "1px solid rgba(255,255,255,0.8)"
         }}>
      
      {/* High-Impact Image Thumbnail with Shine Effect */}
      <div className="rounded-0 overflow-hidden position-relative" style={{ height: "260px" }}>
        <motion.img 
          whileHover={{ scale: 1.12 }}
          transition={{ duration: 1, ease: "easeOut" }}
          src={image || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800"} 
          className="w-100 h-100 object-fit-cover" alt={title} 
        />
        
        {/* Shine Overlay */}
        <div className="position-absolute top-0 start-0 w-100 h-100 pointer-events-none overflow-hidden">
          <motion.div 
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.8 }}
            className="w-100 h-100"
            style={{ 
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
              transform: "skewX(-25deg)"
            }}
          />
        </div>

        {/* Modern Glassmorphic Badge */}
        {badge && (
          <div className="position-absolute top-0 end-0 m-3">
            <span className="badge rounded-pill px-3 py-2 fw-bold shadow-lg" 
                  style={{ 
                    backdropFilter: "blur(12px)", 
                    backgroundColor: "rgba(255, 255, 255, 0.9)", 
                    color: "var(--btn-blue)",
                    border: "1px solid rgba(255,255,255,0.8)",
                    fontSize: "0.7rem",
                    letterSpacing: "1px"
                  }}>
              <span className="d-flex align-items-center gap-2">
                <span className="spinner-grow spinner-grow-sm text-primary" style={{ width: "8px", height: "8px" }}></span>
                {badge.toUpperCase()}
              </span>
            </span>
          </div>
        )}
      </div>

      <div className="p-4 pt-5 text-start">
        <h4 className="fw-black text-dark mb-1 h5" style={{ letterSpacing: "-0.5px" }}>{title}</h4>
        <p className="text-muted small mb-4 fw-medium opacity-75">{subtitle}</p>

        {/* Refined Detail Badges */}
        <div className="d-flex flex-wrap gap-2 mb-4">
          {details.map((d, i) => (
            <div key={i} className="px-3 py-2 rounded-4 d-flex align-items-center gap-2" style={{ backgroundColor: "#f8fafc", border: "1px solid rgba(0,0,0,0.02)" }}>
              <i className={`bi ${d.icon} text-primary`} style={{ fontSize: "0.8rem" }}></i>
              <span style={{ fontSize: "0.7rem" }} className="fw-bold text-dark opacity-80">{d.text}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto pt-3 border-top d-flex align-items-center justify-content-between" style={{ borderColor: "rgba(0,0,0,0.05)" }}>
          <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }}>
            <Link to="/contact" className="text-decoration-none fw-black text-primary small d-flex align-items-center gap-2">
              Apply Program <i className="bi bi-arrow-right-short fs-4"></i>
            </Link>
          </motion.div>
          <div className="d-flex gap-1 text-warning" style={{ fontSize: "0.65rem" }}>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);



const SectionHeader = ({ title, subtitle, linkText, linkTo = "/contact" }) => (
  <div className="d-flex flex-column flex-md-row justify-content-between align-items-end mb-5">
    <div className="text-start">
      <h2 className="display-6 fw-bold mb-2">{title}</h2>
      <p className="text-muted mb-0 fs-5">{subtitle}</p>
    </div>
    {linkText && <Link to={linkTo} className="btn btn-outline-primary rounded-pill px-4 fw-bold mt-4 mt-md-0 shadow-sm">{linkText}</Link>}
  </div>
);

// --- Internal Component for Feature Spotlight ---
const SpotlightCard = ({ title, subtitle, features }) => (
  <motion.div 
    initial={{ scale: 0.95, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="p-5 rounded-5 shadow-2xl text-white position-relative overflow-hidden h-100" 
    style={{ background: "linear-gradient(145deg, #0f172a 0%, #1e293b 100%)", boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)" }}
  >
    <h2 className="display-6 fw-bold mb-4">{title}</h2>
    <p className="lead mb-5 opacity-75">{subtitle}</p>
    <div className="row g-4">
      {features.map((feat, idx) => (
        <motion.div 
          key={idx} 
          initial={{ opacity: 0, x: -10 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ delay: 0.3 + (idx * 0.1) }} 
          className="col-sm-6"
        >
          <div className="d-flex align-items-center gap-3">
            <div className="bg-primary rounded-circle p-1 d-flex align-items-center justify-content-center shadow-sm" style={{ width: "24px", height: "24px" }}>
              <i className="bi bi-check text-white fw-bold"></i>
            </div>
            <span className="small opacity-90 fw-medium">{feat}</span>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

// --- Internal Component for Methodology ---
const MethodologyCard = ({ title, text, icon, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.6 }}
    viewport={{ once: true }}
    whileHover={{ y: -10, scale: 1.02 }}
    className="col-md-3 mb-4"
  >
    <div className="p-4 h-100 text-center rounded-5 transition-all duration-300" 
         style={{ 
           backgroundColor: "var(--bg-grey)", 
           border: "1px solid rgba(255, 255, 255, 0.8)",
           boxShadow: "0 10px 30px rgba(0,0,0,0.03), inset 0 0 20px rgba(255,255,255,0.5)"
         }}>
      <motion.div 
        whileHover={{ rotate: [0, -10, 10, 0] }}
        className="bg-white text-primary p-3 rounded-circle d-inline-flex mb-4 shadow-sm"
        style={{ width: "70px", height: "70px", alignItems: "center", justifyContent: "center" }}
      >
        <i className={`bi ${icon} fs-3`}></i>
      </motion.div>
      <h4 className="fw-bold mb-3 text-dark">{title}</h4>
      <p className="text-muted small mb-0 fw-medium" style={{ lineHeight: "1.6" }}>{text}</p>
    </div>
  </motion.div>
);

// --- Reusable CTA Banner Component ---
const CTABanner = () => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.94 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.9, ease: "easeOut", staggerChildren: 0.2, delayChildren: 0.35 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <section className="py-5 bg-white text-center">
      <div className="container py-5">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="position-relative overflow-hidden rounded-5"
          style={{
            backgroundColor: "#111827",           /* single solid color — no gradient */
            boxShadow: "0 40px 80px -20px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.05)",
            padding: "90px 40px"
          }}
        >
          {/* === Animated Blue Glow Orbs === */}
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.18, 0.32, 0.18] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="position-absolute"
            style={{
              width: "500px", height: "500px",
              background: "radial-gradient(circle, #2563eb 0%, transparent 70%)",
              top: "-150px", left: "-140px", borderRadius: "50%", filter: "blur(40px)", pointerEvents: "none"
            }}
          />
          <motion.div
            animate={{ scale: [1, 1.45, 1], opacity: [0.12, 0.24, 0.12] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="position-absolute"
            style={{
              width: "540px", height: "540px",
              background: "radial-gradient(circle, #1d4ed8 0%, transparent 70%)",
              bottom: "-170px", right: "-120px", borderRadius: "50%", filter: "blur(45px)", pointerEvents: "none"
            }}
          />
          <motion.div
            animate={{ scale: [1, 1.25, 1], opacity: [0.08, 0.16, 0.08] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3.2 }}
            className="position-absolute"
            style={{
              width: "320px", height: "320px",
              background: "radial-gradient(circle, #2563eb 0%, transparent 70%)",
              top: "50%", left: "50%", transform: "translate(-50%,-50%)", borderRadius: "50%", filter: "blur(38px)", pointerEvents: "none"
            }}
          />

          {/* === Horizontal Scan Line === */}
          <motion.div
            className="position-absolute start-0 w-100"
            style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.5), transparent)", pointerEvents: "none" }}
            animate={{ top: ["10%", "90%", "10%"], opacity: [0, 0.6, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
          />

          {/* === Floating Blue Particles === */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="position-absolute rounded-circle"
              style={{
                width: `${3 + (i % 5) * 2}px`,
                height: `${3 + (i % 5) * 2}px`,
                backgroundColor: i % 2 === 0 ? "rgba(37,99,235,0.6)" : "rgba(59,130,246,0.5)",
                top: `${8 + (i * 7) % 84}%`,
                left: `${4 + (i * 9) % 92}%`,
                pointerEvents: "none"
              }}
              animate={{
                y: [0, -(14 + i * 2), 0],
                x: [0, i % 2 === 0 ? 12 : -12, 0],
                opacity: [0.3, 0.85, 0.3],
                scale: [1, 1.3, 1]
              }}
              transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.35 }}
            />
          ))}

          {/* === Pulsing Concentric Rings === */}
          {[600, 440, 280].map((size, i) => (
            <motion.div
              key={size}
              className="position-absolute top-50 start-50"
              style={{
                transform: "translate(-50%,-50%)",
                width: `${size}px`, height: `${size}px`,
                borderRadius: "50%",
                border: `1px solid rgba(37,99,235,${0.18 - i * 0.04})`,
                pointerEvents: "none"
              }}
              animate={{ scale: [0.85, 1.15, 0.85], opacity: [0.25, 0.04, 0.25] }}
              transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 1.2 }}
            />
          ))}

          {/* === Animated Dotted Grid Overlay === */}
          <div className="position-absolute top-0 start-0 w-100 h-100" style={{
            backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.12) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            pointerEvents: "none",
            opacity: 0.6
          }} />

          {/* === Content === */}
          <div className="position-relative" style={{ zIndex: 2 }}>

            {/* Live Badge */}
            <motion.div variants={itemVariants} className="mb-4">
              <motion.span
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="d-inline-flex align-items-center gap-2 rounded-pill px-4 py-2 fw-bold"
                style={{
                  backgroundColor: "rgba(37,99,235,0.2)",
                  border: "1px solid rgba(59,130,246,0.45)",
                  color: "rgba(147,197,253,1)",
                  fontSize: "0.75rem",
                  letterSpacing: "2.5px",
                  textTransform: "uppercase"
                }}
              >
                <motion.span
                  className="rounded-circle"
                  style={{ width: "8px", height: "8px", backgroundColor: "#3b82f6", display: "inline-block", flexShrink: 0 }}
                  animate={{ opacity: [1, 0.15, 1], scale: [1, 1.5, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                />
                Enrollment Open — Limited Seats
              </motion.span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              variants={itemVariants}
              className="fw-black mb-4 text-white"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", lineHeight: 1.1, letterSpacing: "-1.5px" }}
            >
              Ready to Start Your{" "}
              <motion.span
                className="text-gradient"
                animate={{ opacity: [0.85, 1, 0.85] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                Journey?
              </motion.span>
            </motion.h2>

            {/* Animated Divider */}
            <motion.div
              variants={itemVariants}
              className="mx-auto mb-4"
              style={{ height: "2px", backgroundColor: "#2563eb", borderRadius: "99px", maxWidth: "60px" }}
              animate={{ maxWidth: ["60px", "120px", "60px"], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-5"
              style={{ maxWidth: "600px", color: "rgba(255,255,255,0.6)", fontSize: "1.1rem", lineHeight: 1.9 }}
            >
              Join thousands of successful students who have transformed their careers with{" "}
              <span style={{ color: "#3b82f6", fontWeight: 700 }}>Radix Consultancy</span>.{" "}
              Get your <span style={{ color: "#ffffff", fontWeight: 700 }}>free language assessment</span> test today!
            </motion.p>

            {/* Stat Chips Row */}
            <motion.div
              variants={itemVariants}
              className="d-flex flex-wrap justify-content-center gap-4 mb-5"
            >
              {[
                { icon: "bi-people-fill",  label: "5,000+ Students Enrolled" },
                { icon: "bi-star-fill",    label: "4.9 / 5 Average Rating"   },
                { icon: "bi-award-fill",   label: "Certified Instructors"     }
              ].map((chip, i) => (
                <motion.div
                  key={i}
                  className="d-flex align-items-center gap-2"
                  style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem" }}
                  whileHover={{ color: "rgba(255,255,255,0.9)", scale: 1.05 }}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.65 + i * 0.15 }}
                >
                  <i className={`bi ${chip.icon}`} style={{ color: "#2563eb" }} />
                  <span>{chip.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="d-flex flex-wrap justify-content-center gap-3"
            >
              {/* Primary — solid flat blue, no gradient, no shadow */}
              <motion.div whileHover={{ scale: 1.06, y: -4 }} whileTap={{ scale: 0.96 }}>
                <Link
                  to="/contact"
                  className="btn btn-lg rounded-pill fw-bold d-flex align-items-center gap-2 position-relative overflow-hidden"
                  style={{
                    backgroundColor: "#2563eb",
                    backgroundImage: "none",   /* kill Bootstrap gradient */
                    border: "none",
                    color: "#fff",
                    padding: "14px 42px",
                    boxShadow: "none"
                  }}
                >
                  {/* Shimmer sweep */}
                  <motion.div
                    className="position-absolute top-0 h-100"
                    style={{ width: "50px", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent)", left: 0 }}
                    animate={{ left: ["-15%", "125%"] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.5 }}
                  />
                  <i className="bi bi-calendar-check-fill" />
                  Book Free Assessment
                </Link>
              </motion.div>

              {/* Secondary — ghost outline */}
              <motion.div whileHover={{ scale: 1.06, y: -4 }} whileTap={{ scale: 0.96 }}>
                <Link
                  to="/contact"
                  className="btn btn-lg rounded-pill fw-bold d-flex align-items-center gap-2"
                  style={{
                    backgroundColor: "transparent",
                    backgroundImage: "none",
                    border: "1.5px solid rgba(255,255,255,0.22)",
                    color: "#fff",
                    padding: "14px 42px",
                    backdropFilter: "blur(10px)",
                    boxShadow: "none"
                  }}
                >
                  <i className="bi bi-list-task" />
                  View All Batches
                </Link>
              </motion.div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

// --- Internal Component for Global Courses ---
const CourseCard = ({ course, delay, isScrolling = false }) => (
  <motion.div 
    initial={isScrolling ? {} : { opacity: 0, y: 30 }}
    whileInView={isScrolling ? {} : { opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.6 }}
    viewport={{ once: true }}
    whileHover={{ y: -15, scale: 1.02 }}
    className={isScrolling ? "h-100 mx-2" : "col-lg-4 col-md-6 mb-4"}
    style={isScrolling ? { width: "380px", flexShrink: 0, cursor: "pointer" } : { cursor: "pointer" }}
  >
    <div className="h-100 bg-white rounded-5 overflow-hidden border-0 transition-all duration-500" 
         style={{ boxShadow: "0 15px 45px rgba(0,0,0,0.07)", border: "1px solid rgba(0,0,0,0.03)" }}>
      <div className="position-relative" style={{ height: "260px", overflow: "hidden" }}>
        <motion.img 
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          src={course.image} 
          alt={course.title} 
          className="w-100 h-100 object-fit-cover" 
        />
        <div className="position-absolute top-0 start-0 m-3">
          <span className="badge bg-white text-primary rounded-pill px-3 py-2 fw-bold shadow-sm" style={{ backdropFilter: "blur(10px)", backgroundColor: "rgba(255,255,255,0.9)" }}>
            {course.levels}
          </span>
        </div>
      </div>
      <div className="p-4 text-start position-relative">
        {/* Subtle Accent Glow */}
        <div className="position-absolute top-0 start-0 w-100 h-100 opacity-0 hover-opacity-5 transition-opacity" style={{ background: "radial-gradient(circle at top right, var(--primary), transparent)" }}></div>
        
        <h4 className="fw-bold text-dark mb-3 h5">{course.title}</h4>
        <p className="text-muted small mb-4" style={{ lineHeight: "1.8", minHeight: "85px" }}>{course.text}</p>
        
        <div className="d-flex justify-content-between align-items-center pt-3 border-top" style={{ borderColor: "rgba(0,0,0,0.05)" }}>
          <motion.div whileHover={{ x: 5 }}>
            <Link to="/contact" className="text-decoration-none fw-bold text-primary small d-flex align-items-center gap-2">
              Explore Course <i className="bi bi-arrow-right"></i>
            </Link>
          </motion.div>
          <div className="bg-primary-subtle rounded-circle p-2 text-primary d-flex align-items-center justify-content-center" style={{ width: "35px", height: "35px" }}>
            <i className="bi bi-check2-all small"></i>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const Programs = () => {
  const languageCourses = [
    {
      title: "German Language",
      subtitle: "University Prep",
      badge: "A1 to C1",
      icon: "bi-translate",
      details: [
        { icon: "bi-mortarboard", text: "TestDaF & DSH" },
        { icon: "bi-globe", text: "Study in Germany" }
      ],
      image: "https://images.unsplash.com/photo-1527866959252-deab85ef7d1b?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "French Language",
      subtitle: "Immigration & Culture",
      badge: "A1 to B2",
      icon: "bi-translate",
      details: [
        { icon: "bi-file-earmark-text", text: "TEF / TCF Exam" },
        { icon: "bi-geo-alt", text: "Canada & France" }
      ],
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Spanish Language",
      subtitle: "Global Communication",
      badge: "A1 to B2",
      icon: "bi-translate",
      details: [
        { icon: "bi-briefcase", text: "Business & Travel" },
        { icon: "bi-people", text: "Latin America" }
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Japanese Language",
      subtitle: "Tech & Careers",
      badge: "N5 to N1",
      icon: "bi-translate",
      details: [
        { icon: "bi-patch-check", text: "JLPT Certified" },
        { icon: "bi-cpu", text: "Tech Industry" }
      ],
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Korean Language",
      subtitle: "Business & Pop Culture",
      badge: "TOPIK I & II",
      icon: "bi-translate",
      details: [
        { icon: "bi-camera-video", text: "K-Entertainment" },
        { icon: "bi-building", text: "Corporate Track" }
      ],
      image: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Arabic Language",
      subtitle: "Middle East Trade",
      badge: "Basic to Advanced",
      icon: "bi-translate",
      details: [
        { icon: "bi-currency-exchange", text: "Gulf Markets" },
        { icon: "bi-person-badge", text: "Pro Certification" }
      ],
      image: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const ieltsFeatures = [
    "Native-level Certified Instructors",
    "Intensive Mock Test Series",
    "One-on-One Speaking Practice",
    "Advanced Grammar & Vocab Workshops",
    "Lifetime Access to Study Material",
    "Guaranteed Band Score Improvement"
  ];

  const openPrograms = [
    {
      title: "IELTS Intensive",
      subtitle: "Evening Batch",
      badge: "8 Slots Left",
      icon: "bi-mortarboard",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800",
      details: [
        { icon: "bi-calendar-event", text: "Starts May 15" },
        { icon: "bi-clock", text: "6 PM - 8 PM" }
      ]
    },
    {
      title: "German A1",
      subtitle: "Weekend Warrior",
      badge: "New Batch",
      icon: "bi-translate",
      image: "https://images.unsplash.com/photo-1527866959252-deab85ef7d1b?auto=format&fit=crop&q=80&w=800",
      details: [
        { icon: "bi-calendar-check", text: "Starts May 20" },
        { icon: "bi-sun", text: "Morning Session" }
      ]
    },
    {
      title: "Spoken English",
      subtitle: "Corporate Skills",
      badge: "Filling Fast",
      icon: "bi-chat-dots",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
      details: [
        { icon: "bi-person-badge", text: "Native Trainer" },
        { icon: "bi-graph-up-arrow", text: "Advanced level" }
      ]
    },
    {
      title: "French B1 Pro",
      subtitle: "Professional French",
      badge: "Upcoming",
      icon: "bi-translate",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800",
      details: [
        { icon: "bi-calendar-date", text: "Starts June 10" },
        { icon: "bi-award", text: "B1 Certification" }
      ]
    }
  ];

  const scholarships = [
    {
      title: "DAAD Scholarship",
      subtitle: "Germany Graduate Study",
      badge: "Fully Funded",
      icon: "bi-bank",
      image: "https://images.unsplash.com/photo-1527866959252-deab85ef7d1b?auto=format&fit=crop&q=80&w=800",
      details: [
        { icon: "bi-geo-alt", text: "Germany" },
        { icon: "bi-cash-stack", text: "€1,200/Month" }
      ]
    },
    {
      title: "Chevening Awards",
      subtitle: "UK Leadership Program",
      badge: "Open Now",
      icon: "bi-mortarboard-fill",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800",
      details: [
        { icon: "bi-globe", text: "United Kingdom" },
        { icon: "bi-shield-check", text: "Full Tuition" }
      ]
    },
    {
      title: "Fulbright Program",
      subtitle: "USA Research & Study",
      badge: "Prestigious",
      icon: "bi-flag-fill",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
      details: [
        { icon: "bi-building-columns", text: "United States" },
        { icon: "bi-star", text: "All-Inclusive" }
      ]
    },
    {
      title: "Vanier CGS",
      subtitle: "Canada Research Excellence",
      badge: "Apply Now",
      icon: "bi-award-fill",
      image: "https://images.unsplash.com/photo-1517090504586-fde19ea6066f?auto=format&fit=crop&q=80&w=800",
      details: [
        { icon: "bi-geo-alt", text: "Canada" },
        { icon: "bi-currency-dollar", text: "$50,000/Year" }
      ]
    },
    {
      title: "Erasmus+ Mundus",
      subtitle: "European Joint Master",
      badge: "EU Funded",
      icon: "bi-universal-access",
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=800",
      details: [
        { icon: "bi-map", text: "Multiple EU" },
        { icon: "bi-briefcase", text: "Travel & Stay" }
      ]
    },
    {
      title: "Australia Awards",
      subtitle: "Pacific & Asia Leaders",
      badge: "Ongoing",
      icon: "bi-sun-fill",
      image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=800",
      details: [
        { icon: "bi-geo", text: "Australia" },
        { icon: "bi-check-circle", text: "Full Support" }
      ]
    },
    {
      title: "Swiss Government",
      subtitle: "Excellence Scholarships",
      badge: "Highly Competitive",
      icon: "bi-mountain",
      image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80&w=800",
      details: [
        { icon: "bi-geo-alt", text: "Switzerland" },
        { icon: "bi-currency-exchange", text: "Research Grant" }
      ]
    },
    {
      title: "Eiffel Excellence",
      subtitle: "France Master's & PhD",
      badge: "Open Now",
      icon: "bi-lightning-charge-fill",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800",
      details: [
        { icon: "bi-geo-alt", text: "France" },
        { icon: "bi-award", text: "Prestige Grant" }
      ]
    }
  ];


  const ecommerceCourses = [
    {
      title: "Amazon FBA",
      subtitle: "Mastery Course",
      badge: "Bestseller",
      icon: "bi-cart-check",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
      details: [
        { icon: "bi-shop", text: "Private Label" },
        { icon: "bi-cash-coin", text: "PL & Wholesale" }
      ]
    },
    {
      title: "Shopify Dropship",
      subtitle: "E-com Blueprint",
      badge: "Live Training",
      icon: "bi-bag-heart",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
      details: [
        { icon: "bi-lightning-charge", text: "Scaling tactics" },
        { icon: "bi-device-ssd", text: "Ads Mastery" }
      ]
    },
    {
      title: "TikTok Shop",
      subtitle: "Social Commerce",
      badge: "Trending",
      icon: "bi-phone",
      image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&q=80&w=800",
      details: [
        { icon: "bi-hourglass-split", text: "4 Weeks Course" },
        { icon: "bi-lightning", text: "Viral Tactics" }
      ]
    },
    {
      title: "Meta & Google Ads",
      subtitle: "Paid Traffic Mastery",
      badge: "High Demand",
      icon: "bi-megaphone",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&q=80&w=800",
      details: [
        { icon: "bi-graph-up-arrow", text: "ROAS Optimization" },
        { icon: "bi-bullseye", text: "Retargeting" }
      ]
    },
    {
      title: "Etsy & Handmade",
      subtitle: "Creative Commerce",
      badge: "New Batch",
      icon: "bi-palette",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800",
      details: [
        { icon: "bi-stars", text: "Product Research" },
        { icon: "bi-shop", text: "SEO & Listings" }
      ]
    },
    {
      title: "Freelancing Pro",
      subtitle: "Fiverr & Upwork",
      badge: "Open Now",
      icon: "bi-laptop",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800",
      details: [
        { icon: "bi-person-check", text: "Profile Mastery" },
        { icon: "bi-briefcase", text: "Client Acquisition" }
      ]
    },
    {
      title: "Content Creation",
      subtitle: "YouTube & Reels",
      badge: "Trending",
      icon: "bi-camera-video",
      image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&q=80&w=800",
      details: [
        { icon: "bi-play-circle", text: "Video Strategy" },
        { icon: "bi-bar-chart", text: "Monetization" }
      ]
    },
    {
      title: "Print on Demand",
      subtitle: "Merch & Branding",
      badge: "New",
      icon: "bi-printer",
      image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&q=80&w=800",
      details: [
        { icon: "bi-brush", text: "Design Basics" },
        { icon: "bi-box-seam", text: "Fulfillment Setup" }
      ]
    }
  ];

  const methodology = [
    {
      title: "Interactive Learning",
      text: "Forget boring lectures. Our classes are built on real-world conversations and roleplay.",
      icon: "bi-chat-left-dots"
    },
    {
      title: "Digital Ecosystem",
      text: "Access our exclusive LMS for recorded lectures, quizzes, and instant feedback.",
      icon: "bi-laptop"
    },
    {
      title: "Progress Tracking",
      text: "Weekly assessments and personalized feedback loops to ensure you never fall behind.",
      icon: "bi-check2-square"
    },
    {
      title: "Native Immersion",
      text: "Exposure to native speakers and cultural nuances for authentic language mastery.",
      icon: "bi-person-badge"
    }
  ];

  const fadeInUp = {
    initial: { y: 40, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

  return (
    <div className="programs-page overflow-hidden">
      {/* [ENHANCED] Hero Section */}
      <section className="programs-hero position-relative bg-white overflow-hidden" style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: "60px" }}>
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 text-start">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
                }}
              >
                <motion.h6 variants={fadeInUp} className="text-primary fw-bold text-uppercase mb-3" style={{ letterSpacing: "5px" }}>Language Mastery</motion.h6>
                <motion.h1 variants={fadeInUp} className="display-2 fw-bold text-dark mb-4" style={{ lineHeight: "1.1" }}>
                  IELTS & Foreign <br />
                  <span className="text-primary">Language Training</span>
                </motion.h1>
                <motion.p variants={fadeInUp} className="lead text-muted mb-5" style={{ maxWidth: "550px", fontSize: "1.25rem" }}>
                  Bridge the language gap and open doors to international education. Our results-oriented training ensures your global success through immersion and expert guidance.
                </motion.p>
                <motion.div variants={fadeInUp} className="d-flex gap-3">
                  <a href="#ielts" className="btn btn-primary btn-lg rounded-pill px-5 py-3 fw-bold shadow-lg" style={{ backgroundColor: "var(--btn-blue)", border: "none" }}>Our Courses</a>
                  <Link to="/contact" className="btn btn-outline-dark btn-lg rounded-pill px-5 py-3 fw-bold">Free Assessment</Link>
                </motion.div>
              </motion.div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
              <motion.div initial={{ opacity: 0, scale: 0.8, x: 50 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 1 }} className="position-relative">
                <div className="hero-img-wrapper rounded-5 overflow-hidden shadow-2xl" style={{ border: "10px solid white" }}>
                  <img src="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?auto=format&fit=crop&q=80&w=1000" alt="Language Training" className="img-fluid" style={{ minHeight: "500px", objectFit: "cover" }} />
                </div>
                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity }} className="position-absolute bottom-0 start-0 bg-white p-4 rounded-4 shadow-lg mb-n4 ms-n4 border">
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-primary-subtle p-3 rounded-circle text-primary"><i className="bi bi-patch-check fs-3"></i></div>
                    <div><h5 className="fw-bold mb-0">98% Success</h5><p className="small text-muted mb-0">Band 7.5+ Guaranteed</p></div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* IELTS Spotlight Section */}
      <section id="ielts" className="py-5" style={{ backgroundColor: "var(--bg-grey)" }}>
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <SpotlightCard 
                title="IELTS Preparation Hub"
                subtitle="Achieve Band 7.5+ with expert techniques for all modules. Our intensive coaching is designed for global success."
                features={ieltsFeatures}
              />
            </div>
            <motion.div 
              initial={{ x: 50, opacity: 0 }} 
              whileInView={{ x: 0, opacity: 1 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8 }}
              className="col-lg-6 ps-lg-5"
            >
              <h3 className="display-4 fw-bold mb-4">Why Train with <span className="text-primary">Radix?</span></h3>
              <p className="text-muted mb-5 fs-5">We believe that language is a skill, not just a subject. Our instructors provide personalized feedback and intensive mock tests to mirror real exam conditions.</p>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                animate={{ y: [0, -10, 0] }}
                transition={{ 
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  opacity: { duration: 0.8 }
                }}
                className="card border-0 bg-white p-5 rounded-5 mb-5 shadow-2xl position-relative"
                style={{ boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.1)" }}
              >
                  {/* Decorative element */}
                  <div className="position-absolute top-0 start-0 w-100 h-100 rounded-5 opacity-5" style={{ background: "radial-gradient(circle at 10% 20%, var(--primary) 0%, transparent 50%)" }}></div>
                  
                  <div className="d-flex position-relative">
                    <div className="text-primary fs-1 me-4 opacity-50"><i className="bi bi-quote"></i></div>
                    <div>
                      <p className="fst-italic text-muted mb-4 fs-5 fw-medium" style={{ lineHeight: "1.6" }}>
                        "I improved from a 6.0 to a 7.5 in just 5 weeks. The mock tests were identical to the real exam!"
                      </p>
                      <div className="d-flex align-items-center gap-3">
                        <div className="bg-primary rounded-pill shadow-sm" style={{ width: "40px", height: "4px" }}></div>
                        <div>
                          <span className="fw-black d-block text-dark h6 mb-0">Taha Malik</span>
                          <span className="small text-muted text-uppercase fw-bold ls-widest" style={{ fontSize: "0.7rem" }}>Successful Student</span>
                        </div>
                      </div>
                    </div>
                  </div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  to="/contact" 
                  className="btn btn-primary rounded-pill px-5 py-3 fw-bold shadow-lg position-relative overflow-hidden group" 
                  style={{ backgroundColor: "var(--btn-blue)", border: "none" }}
                >
                  <motion.span 
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="d-flex align-items-center gap-2"
                  >
                    Enroll in Next Batch <i className="bi bi-arrow-right transition-all group-hover-translate-x-2"></i>
                  </motion.span>
                  
                  {/* Subtle Glow Overlay */}
                  <div className="position-absolute top-0 start-0 w-100 h-100 bg-white opacity-0 group-hover-opacity-10 transition-opacity"></div>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Methodology Section */}
      <section className="py-5 bg-white">
        <div className="container py-5">
          <div className="text-center mb-5">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="display-5 fw-bold mb-3 text-dark"
            >
              Our Methodology
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-muted mx-auto" 
              style={{ maxWidth: "700px" }}
            >
              A scientific and interactive approach designed to help you master languages effectively and confidently.
            </motion.p>
          </div>
          <div className="row g-4">
            {methodology.map((item, idx) => (
              <MethodologyCard key={idx} {...item} delay={idx * 0.15} />
            ))}
          </div>
        </div>
      </section>

      {/* Global Language Courses - Infinite Auto-Scroll */}
      <section className="pt-2 pb-5 bg-white overflow-hidden">
        <div className="container overflow-hidden py-5">
          <div className="container text-center mb-5">
            <motion.div 
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="display-4 fw-black text-dark mb-4">
                Currently <span className="text-primary">Opened Courses</span>
              </h2>
              <p className="lead text-muted mx-auto" style={{ maxWidth: "750px" }}>
                Master the languages of leading economies with our expert-led sessions. Start your global journey today.
              </p>
            </motion.div>
          </div>
          
          <div className="position-relative overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)" }}>
            <motion.div 
              className="d-flex"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ 
                x: { 
                  repeat: Infinity, 
                  repeatType: "loop", 
                  duration: 35, 
                  ease: "linear" 
                } 
              }}
              style={{ width: "max-content" }}
            >
              {[...languageCourses, ...languageCourses].map((course, idx) => (
                <ListingItem key={idx} {...course} delay={0} isScrolling cardBg="#ffffff" />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Currently Open Programs - Infinite Auto-Scroll */}
      <section className="py-5" style={{ backgroundColor: "var(--bg-grey)" }}>
        <div className="container overflow-hidden py-5">
          <div className="container text-center mb-5">
            <motion.div 
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="display-4 fw-black text-dark mb-3">
                Open <span className="text-primary">Batches</span>
              </h2>
              <p className="lead text-muted mx-auto" style={{ maxWidth: "750px" }}>
                Live batches ready for enrollment. Secure your spot in our upcoming sessions.
              </p>
            </motion.div>
          </div>
          
          <div className="position-relative overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)" }}>
            <motion.div 
              className="d-flex"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ 
                x: { 
                  repeat: Infinity, 
                  repeatType: "loop", 
                  duration: 40, 
                  ease: "linear" 
                } 
              }}
              style={{ width: "max-content" }}
            >
              {[...openPrograms, ...openPrograms].map((prog, idx) => (
                <ListingItem key={idx} {...prog} delay={0} isScrolling cardBg="#ffffff" />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Currently Opened Scholarships */}
      <section className="py-5 position-relative overflow-hidden bg-white">

        <div className="container py-5 position-relative">
          
          {/* === TOP LABEL === */}
          <div className="text-center mb-4">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary fw-bold text-uppercase ls-widest small d-inline-block"
            >
              Global Opportunities
            </motion.span>
          </div>

          {/* === HERO INTRO SPLIT LAYOUT === */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="row align-items-center mb-5 g-5"
          >
            {/* Left: Big Bold Heading + Description */}
            <div className="col-lg-6 text-start">
              <h2 className="display-4 fw-black text-dark mb-4" style={{ lineHeight: "1.1", letterSpacing: "-1px" }}>
                Your Gateway to <span className="text-primary">World-Class</span> Funding
              </h2>

              {/* Premium styled paragraph block */}
              <div className="position-relative ps-4 mb-4" style={{ borderLeft: "3px solid var(--btn-blue)" }}>
                <p className="text-dark mb-0 fw-medium" style={{ lineHeight: "1.9", fontSize: "1.05rem" }}>
                  At <span className="text-primary fw-black">Radix Consultancy</span>, we do the heavy lifting so you can focus on your future. Our dedicated research team scours every major funding body — from the <strong>British Council</strong> to the <strong>US State Department</strong> — delivering verified, active scholarships the moment they open.
                </p>
              </div>

              {/* Bullet highlights */}
              <div className="d-flex flex-column gap-3 mb-5">
                {[
                  { icon: "bi-search", text: "Daily-verified listings from 40+ countries" },
                  { icon: "bi-shield-check", text: "Expert-reviewed deadlines & eligibility" },
                  { icon: "bi-person-lines-fill", text: "Personalized guidance from application to visa" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="d-flex align-items-center gap-3"
                  >
                    <div className="rounded-3 p-2 d-flex align-items-center justify-content-center flex-shrink-0"
                         style={{ backgroundColor: "rgba(37,99,235,0.08)", width: "38px", height: "38px" }}>
                      <i className={`bi ${item.icon} text-primary`} style={{ fontSize: "1rem" }}></i>
                    </div>
                    <span className="text-dark fw-medium" style={{ fontSize: "0.95rem" }}>{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="d-flex flex-wrap gap-3">
                <Link to="/contact" className="btn btn-primary btn-lg rounded-pill px-5 py-3 fw-bold shadow-lg" style={{ backgroundColor: "var(--btn-blue)", border: "none" }}>
                  Get Expert Guidance <i className="bi bi-arrow-right ms-2"></i>
                </Link>
                <Link to="/contact" className="btn btn-outline-primary btn-lg rounded-pill px-4 py-3 fw-bold">
                  Guide to Scholarships
                </Link>
              </div>
            </div>

            {/* Right: Animated Stat Cards */}
            <div className="col-lg-6">
              <div className="row g-3">
                {[
                  { icon: "bi-globe2", value: "40+", label: "Countries Covered" },
                  { icon: "bi-cash-stack", value: "$2M+", label: "Total Funding Available" },
                  { icon: "bi-people-fill", value: "1,500+", label: "Students Placed" },
                  { icon: "bi-patch-check-fill", value: "98%", label: "Application Success Rate" }
                ].map((stat, idx) => (
                  <div key={idx} className="col-6">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.12, duration: 0.6 }}
                      whileHover={{ y: -10, scale: 1.02 }}
                      className="p-4 h-100 text-center rounded-5 transition-all duration-300"
                      style={{
                        backgroundColor: "var(--bg-grey)",
                        border: "1px solid rgba(255,255,255,0.8)",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.03), inset 0 0 20px rgba(255,255,255,0.5)",
                        cursor: "default"
                      }}
                    >
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        className="bg-white text-primary p-3 rounded-circle d-inline-flex mb-3 shadow-sm"
                        style={{ width: "70px", height: "70px", alignItems: "center", justifyContent: "center" }}
                      >
                        <i className={`bi ${stat.icon} fs-3`}></i>
                      </motion.div>
                      <h3 className="fw-black mb-1 text-primary" style={{ fontSize: "1.8rem", letterSpacing: "-1px" }}>{stat.value}</h3>
                      <p className="text-muted small fw-medium mb-0" style={{ lineHeight: "1.5" }}>{stat.label}</p>
                    </motion.div>
                  </div>
                ))}


              </div>
            </div>
          </motion.div>

          {/* === HIGHLIGHT PILLS ROW === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="d-flex flex-wrap justify-content-center gap-3 mb-5 pb-3"
          >
            {["🇩🇪 Germany – DAAD", "🇬🇧 UK – Chevening", "🇺🇸 USA – Fulbright", "🇨🇦 Canada – Vanier", "🇪🇺 EU – Erasmus+", "🇫🇷 France – Eiffel", "🇨🇭 Switzerland – ESKAS", "🇦🇺 Australia – Awards"].map((pill, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ scale: 1.08, y: -3 }}
                className="badge rounded-pill px-4 py-2 fw-semibold"
                style={{ backgroundColor: "rgba(37,99,235,0.08)", color: "var(--btn-blue)", border: "1px solid rgba(37,99,235,0.2)", fontSize: "0.85rem", cursor: "default" }}
              >
                {pill}
              </motion.span>
            ))}
          </motion.div>

          {/* Spacer */}
          <div className="mb-5"></div>

          {/* === SECTION HEADING === */}
          <div className="text-center mb-5 pb-2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="display-5 fw-black text-dark mb-3"
            >
              Currently Opened <span className="text-primary">Scholarships</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lead text-muted mx-auto"
              style={{ maxWidth: "600px" }}
            >
              Browse our hand-verified list of active international scholarships. Apply with confidence — every listing is live and deadline-checked.
            </motion.p>
          </div>

          {/* === SCHOLARSHIP CARDS GRID === */}
          <div className="row g-4 mt-2">
            {scholarships.map((sch, idx) => <ListingItem key={idx} {...sch} badgeColor="primary" delay={idx * 0.1} />)}
          </div>
        </div>
      </section>


      {/* E-Commerce Courses */}
      <section className="py-5 position-relative overflow-hidden" style={{ backgroundColor: "var(--bg-grey)" }}>
        <div className="container py-5">

          {/* TOP LABEL */}
          <div className="text-center mb-4">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary fw-bold text-uppercase ls-widest small d-inline-block"
            >
              Digital Economy
            </motion.span>
          </div>

          {/* SPLIT INTRO LAYOUT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="row align-items-center mb-5 g-5"
          >
            {/* Left */}
            <div className="col-lg-6 text-start">
              <h2 className="display-4 fw-black text-dark mb-4" style={{ lineHeight: "1.1", letterSpacing: "-1px" }}>
                Master the <span className="text-primary">Digital Economy</span> & Build Real Income
              </h2>
              <div className="position-relative ps-4 mb-4" style={{ borderLeft: "3px solid var(--btn-blue)" }}>
                <p className="text-dark mb-0 fw-medium" style={{ lineHeight: "1.9", fontSize: "1.05rem" }}>
                  At <span className="text-primary fw-black">Radix Consultancy</span>, our E-Commerce programs are engineered for real results. From launching a profitable <strong>Amazon FBA</strong> private label brand to building a high-converting <strong>Shopify Dropshipping</strong> store — we give you the exact skills, tools, and live mentorship to succeed in today's global digital marketplace.
                </p>
              </div>
              <div className="d-flex flex-column gap-3 mb-5">
                {[
                  { icon: "bi-play-circle", text: "Live instructor-led sessions with real case studies" },
                  { icon: "bi-graph-up-arrow", text: "Proven scaling strategies for Amazon, Shopify & TikTok" },
                  { icon: "bi-award", text: "Certificate of completion recognized by global employers" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="d-flex align-items-center gap-3"
                  >
                    <div className="rounded-3 p-2 d-flex align-items-center justify-content-center flex-shrink-0"
                         style={{ backgroundColor: "rgba(37,99,235,0.08)", width: "38px", height: "38px" }}>
                      <i className={`bi ${item.icon} text-primary`} style={{ fontSize: "1rem" }}></i>
                    </div>
                    <span className="text-dark fw-medium" style={{ fontSize: "0.95rem" }}>{item.text}</span>
                  </motion.div>
                ))}
              </div>
              <div className="d-flex flex-wrap gap-3">
                <Link to="/contact" className="btn btn-primary btn-lg rounded-pill px-5 py-3 fw-bold shadow-lg" style={{ backgroundColor: "var(--btn-blue)", border: "none" }}>
                  Enroll Now <i className="bi bi-arrow-right ms-2"></i>
                </Link>
                <Link to="/contact" className="btn btn-outline-primary btn-lg rounded-pill px-4 py-3 fw-bold">
                  View Curriculum
                </Link>
              </div>
            </div>

            {/* Right: Feature boxes */}
            <div className="col-lg-6">
              <div className="row g-3">
                {[
                  { icon: "bi-shop", value: "Amazon FBA", label: "Private Label & Wholesale" },
                  { icon: "bi-bag-heart", value: "Shopify", label: "Dropshipping Blueprint" },
                  { icon: "bi-phone", value: "TikTok Shop", label: "Social Commerce Mastery" },
                  { icon: "bi-megaphone", value: "Ads & SEO", label: "Traffic & Conversion Skills" }
                ].map((feat, idx) => (
                  <div key={idx} className="col-6">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.12, duration: 0.6 }}
                      whileHover={{ y: -10, scale: 1.02 }}
                      className="p-4 h-100 text-center rounded-5 transition-all duration-300"
                      style={{ backgroundColor: "#ffffff", border: "1px solid rgba(255,255,255,0.9)", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", cursor: "default" }}
                    >
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        className="bg-primary-subtle text-primary p-3 rounded-circle d-inline-flex mb-3 shadow-sm"
                        style={{ width: "70px", height: "70px", alignItems: "center", justifyContent: "center" }}
                      >
                        <i className={`bi ${feat.icon} fs-3`}></i>
                      </motion.div>
                      <h5 className="fw-black mb-1 text-primary" style={{ letterSpacing: "-0.5px" }}>{feat.value}</h5>
                      <p className="text-muted small fw-medium mb-0" style={{ lineHeight: "1.5" }}>{feat.label}</p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Spacer */}
          <div className="mb-4"></div>

          {/* SECTION HEADING */}
          <div className="text-center mb-5">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="display-5 fw-black text-dark mb-3"
            >
              Our <span className="text-primary">E-Commerce</span> Courses
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="lead text-muted mx-auto"
              style={{ maxWidth: "580px" }}
            >
              Pick your path, start earning. Every course is hands-on, mentor-backed, and built for real results.
            </motion.p>
          </div>

          {/* COURSE CARDS — Auto Scroll Marquee */}
          <div className="position-relative overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)" }}>
            <motion.div
              className="d-flex"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 45,
                  ease: "linear"
                }
              }}
              style={{ width: "max-content" }}
            >
              {[...ecommerceCourses, ...ecommerceCourses].map((eco, idx) => (
                <ListingItem key={idx} {...eco} delay={0} isScrolling cardBg="#ffffff" />
              ))}
            </motion.div>
          </div>

        </div>
      </section>


      {/* Final CTA */}
      <CTABanner />
    </div>
  );
};

export default Programs;
