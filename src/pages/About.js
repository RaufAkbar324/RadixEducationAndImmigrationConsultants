import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { motion, AnimatePresence } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { 
  Container, 
  Grid, 
  Box, 
  Typography, 
  Paper, 
  Avatar, 
  useTheme,
  alpha
} from '@mui/material';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import DescriptionIcon from '@mui/icons-material/Description';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import University6 from '../assets/University6.png';
import AboutHeroImg from '../assets/AboutHero_New.png';
import University1 from '../assets/University1.png';
import University2 from '../assets/University2.png';
import University3 from '../assets/University3.png';
import University4 from '../assets/University4.png';
import University5 from '../assets/University5.png';

const PillarPanel = ({ pillar, index }) => {
  return (
    <motion.div
      initial={{ flex: 1 }}
      whileHover={{ flex: 1.05 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="position-relative overflow-hidden group cursor-pointer"
      style={{
        background: "#ffffff",
        borderRight: index !== 2 ? "4px solid #e2e8f0" : "none",
        transition: "all 0.3s ease-out"
      }}
    >
      {/* Content Container */}
      <div className="position-absolute inset-0 w-100 h-100 d-flex flex-column justify-content-between p-5">
        <div className="d-flex align-items-center gap-3">
          <div
            className="rounded-circle d-flex align-items-center justify-content-center shadow-sm"
            style={{ width: "60px", height: "60px", backgroundColor: pillar.accent, color: "white" }}
          >
            <i className={`bi ${pillar.icon} fs-3`}></i>
          </div>
          <h3 className="fw-bold mb-0 transition-all duration-500" style={{ color: "#0f172a" }}>
            {pillar.title}
          </h3>
        </div>

        <div className="mb-4">
          <p className="fs-5 text-muted mb-4" style={{ lineHeight: "1.6" }}>{pillar.text}</p>

          <Link to="/contact" className="btn btn-primary rounded-pill px-4 fw-bold shadow-sm" style={{ backgroundColor: pillar.accent, border: "none" }}>
            Explore Details <i className="bi bi-arrow-right ms-2"></i>
          </Link>
        </div>
      </div>

      <style>{`
        /* Minimalist styles for clean layout */
      `}</style>
    </motion.div>
  );
};

// Reusable Workflow Step Component (MUI + Framer Motion)
const ProcessStep = ({ step, title, text, icon: Icon, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2, duration: 0.8, type: "spring" }}
    viewport={{ once: true }}
    style={{ height: '100%', width: '100%' }}
  >
    <Paper
      elevation={0}
      sx={{
        p: 4,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 8,
        background: '#ffffff',
        border: '1px solid rgba(0,0,0,0.05)',
        transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        '&:hover': {
          transform: 'translateY(-15px)',
          boxShadow: 'none',
          '& .icon-squircle': {
            transform: 'scale(1.1) rotate(10deg)',
          }
        }
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 3 }}>
        <Box
          className="icon-squircle"
          sx={{
            width: 70,
            height: 70,
            borderRadius: '24px',
            background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            boxShadow: '0 10px 20px rgba(37, 99, 235, 0.2)'
          }}
        >
          <Icon sx={{ fontSize: 32 }} />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
          <Typography variant="h5" fontWeight="900" sx={{ color: '#0f172a', letterSpacing: -0.5 }}>
            {title}
          </Typography>
        </Box>
      </Box>

      <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8, fontSize: '0.95rem', mb: 2 }}>
        {text}
      </Typography>

      {/* Step Indicator at the bottom right */}
      <Box
        sx={{
          alignSelf: 'flex-end',
          mt: 'auto',
          px: 2,
          py: 0.5,
          bgcolor: 'primary.main',
          color: 'white',
          borderRadius: '50px',
          fontSize: '0.75rem',
          fontWeight: 900,
          letterSpacing: 1,
          boxShadow: '0 5px 15px rgba(37, 99, 235, 0.2)'
        }}
      >
        STEP {step}
      </Box>
    </Paper>
  </motion.div>
);

const MilestoneCard = ({ milestone, index }) => (
  <motion.div
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
    viewport={{ once: true }}
    className="col-lg-3 col-md-6"
  >
    <motion.div 
      whileHover={{ y: -15 }}
      className="p-4 h-100 position-relative overflow-hidden group shadow-lg" 
      style={{ 
        backgroundColor: "#ffffff", 
        borderRadius: "24px", 
        border: "1px solid rgba(0,0,0,0.05)", 
        cursor: "pointer",
        transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
      }}
    >
      {/* Year Badge with Neon Pulse */}
      <div className="d-inline-block px-3 py-1 rounded-pill bg-primary-subtle text-primary fw-bold mb-4 position-relative">
        {milestone.year}
        <span className="position-absolute top-0 start-100 translate-middle p-1 bg-primary border border-light rounded-circle shadow-lg animate-pulse" style={{ width: "8px", height: "8px" }}></span>
      </div>

      <h4 className="fw-bold mb-3 text-dark">{milestone.title}</h4>
      <p className="text-muted small mb-0" style={{ lineHeight: "1.8", fontSize: "0.9rem" }}>{milestone.text}</p>
    </motion.div>
  </motion.div>
);

const PartnerCard = ({ logo }) => (
  <div className="px-3">
    <div className="p-4 bg-white rounded-4 d-flex align-items-center justify-content-center shadow-sm" style={{ height: "150px", border: "1px solid rgba(0,0,0,0.05)" }}>
      <img src={logo} alt="Partner Logo" className="img-fluid grayscale hover-color transition" style={{ maxHeight: "80px" }} />
    </div>
  </div>
);

const TeamCard = ({ member }) => (
  <div className="px-3 pb-5">
    <motion.div
      whileHover={{ y: -10 }}
      style={{ cursor: "pointer" }}
      className="team-card rounded-5 overflow-hidden border-0 bg-white"
    >
      <div style={{ height: "400px" }} className="overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          src={member.image}
          alt={member.name}
          className="w-100 h-100 object-fit-cover"
        />
      </div>
      <div className="p-4 text-center">
        <h4 className="fw-bold mb-1">{member.name}</h4>
        <p className="text-primary small fw-bold mb-4">{member.role}</p>
        <div className="d-flex justify-content-center gap-3">
          <motion.a whileHover={{ y: -3, color: "#0077b5" }} href="#" className="text-dark fs-5"><i className="bi bi-linkedin"></i></motion.a>
          <motion.a whileHover={{ y: -3, color: "#2563eb" }} href="#" className="text-dark fs-5"><i className="bi bi-envelope"></i></motion.a>
          <motion.a whileHover={{ y: -3, color: "#1da1f2" }} href="#" className="text-dark fs-5"><i className="bi bi-twitter-x"></i></motion.a>
        </div>
      </div>
    </motion.div>
  </div>
);

const ValueCard = ({ val, idx }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: idx * 0.15, type: "spring", bounce: 0.4 }}
    viewport={{ once: true }}
    whileHover="hover"
    className="col-lg-3 col-md-6"
  >
    <motion.div 
      className="p-5 h-100 rounded-5 text-center border position-relative overflow-hidden" 
      style={{ backgroundColor: "var(--bg-grey)", zIndex: 1, cursor: "pointer" }}
      variants={{
        hover: {
          y: -15,
          scale: 1.03,
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.08)"
        }
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.div 
        className="p-4 rounded-circle d-inline-flex align-items-center justify-content-center mb-4 border"
        style={{ width: "80px", height: "80px", backgroundColor: "#ffffff", color: "#2563eb", transition: "all 0.3s ease" }}
        variants={{
          hover: {
            backgroundColor: "#2563eb",
            color: "#ffffff",
            scale: 1.15,
            rotate: 10,
            borderColor: "#2563eb"
          }
        }}
      >
        <i className={`bi ${val.icon} fs-2`} style={{ color: "inherit" }}></i>
      </motion.div>
      <h4 className="fw-bold mb-3" style={{ color: "#0f172a" }}>{val.title}</h4>
      <p className="text-muted small mb-0 lh-lg">{val.text}</p>
    </motion.div>
  </motion.div>
);

const About = () => {
  const teamSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  const values = [
    { title: "Integrity", text: "Honest guidance in every step of your journey.", icon: "bi-shield-check" },
    { title: "Excellence", text: "Perfection in documentation and coaching.", icon: "bi-award" },
    { title: "Global Reach", text: "Partners in 15+ countries worldwide.", icon: "bi-globe" },
    { title: "Client-Centric", text: "Your dreams are our top priority.", icon: "bi-person-heart" }
  ];

  const team = [
    { name: "Dr. Sarah Johnson", role: "Senior Visa Consultant", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
    { name: "Ahmed Raza", role: "Head of Language Training", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
    { name: "Elena Petrov", role: "International Relations", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" },
    { name: "Marcus Chen", role: "Corporate Strategy", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" },
    { name: "Sofia Garcia", role: "Student Success Manager", image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400" }
  ];

  const milestones = [
    { year: "2023", title: "The Inception", text: "Radix was founded in a small office with a big dream: to make global education accessible to everyone." },
    { year: "2024", title: "Going Global", text: "We expanded our operations to London and Toronto, establishing strong ties with top-tier universities." },
    { year: "2025", title: "Digital Transformation", text: "Amidst global shifts, we launched our state-of-the-art virtual consultancy and training platform." },
    { year: "2026", title: "10,000+ Successes", text: "A major milestone of assisting over 10,000 students and professionals in achieving their international goals." }
  ];

  const partners = [
    University1, University2, University3, University4, University5, University6
  ];

  const partnerSettings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    cssEase: "linear",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } }
    ]
  };

  const pillarVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="about-page overflow-hidden">
      {/* [ENHANCED] Hero Section - Split Layout with Professional Aesthetic */}
      <section className="about-hero position-relative bg-white overflow-hidden" style={{ minHeight: "90vh", display: "flex", alignItems: "center" }}>
        <div className="container py-5 mt-5">
          <div className="row align-items-center">
            {/* Text Content */}
            <div className="col-lg-6 text-start">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
                  }
                }}
              >
                <motion.h6
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: { y: 0, opacity: 1 }
                  }}
                  className="text-primary fw-bold text-uppercase mb-3" style={{ letterSpacing: "5px" }}
                >
                  Radix Legacy
                </motion.h6>
                <motion.h1
                  variants={{
                    hidden: { x: -30, opacity: 0 },
                    visible: { x: 0, opacity: 1 }
                  }}
                  className="display-2 fw-bold text-dark mb-4"
                  style={{ lineHeight: "1.1" }}
                >
                  Building Bridges to <br />
                  <span className="text-primary">Your Global Future</span>
                </motion.h1>
                <motion.p
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 }
                  }}
                  className="lead text-muted mb-5" style={{ maxWidth: "550px", fontSize: "1.25rem" }}
                >
                  Discover the story behind Radix, where we turn international dreams into reality through expert guidance and unwavering commitment to excellence.
                </motion.p>
                <motion.div
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: { y: 0, opacity: 1 }
                  }}
                  className="d-flex gap-3"
                >
                  <a href="#story" className="btn btn-primary btn-lg rounded-pill px-5 py-3 fw-bold shadow-lg" style={{ backgroundColor: "var(--btn-blue)", border: "none" }}>
                    Our Journey
                  </a>
                  <Link to="/contact" className="btn btn-outline-dark btn-lg rounded-pill px-5 py-3 fw-bold">
                    Talk to Experts
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Image Content */}
            <div className="col-lg-6 mt-5 mt-lg-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="position-relative"
              >
                <div className="hero-img-wrapper rounded-4 overflow-hidden shadow-2xl" style={{ border: "10px solid white", boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}>
                  <img
                    src={AboutHeroImg}
                    alt="Professional Consultancy"
                    className="img-fluid"
                    style={{ minHeight: "500px", objectFit: "cover" }}
                  />
                </div>

                {/* Floating Badge */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="position-absolute bottom-0 start-0 bg-white p-4 rounded-4 shadow-lg mb-n4 ms-n4 border"
                  style={{ zIndex: 2 }}
                >
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-primary-subtle p-3 rounded-circle text-primary">
                      <i className="bi bi-award fs-3"></i>
                    </div>
                    <div>
                      <h5 className="fw-bold mb-0">10+ Years</h5>
                      <p className="small text-muted mb-0">Of Trusted Excellence</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Our Core Pillars (Mission/Vision) - REFACTORED & CLEAN REDESIGN */}
      <section className="py-5 overflow-hidden" style={{ backgroundColor: "var(--bg-grey)" }}>
        <div className="container py-5">
          <div className="text-center mb-5 pb-4">
            <motion.h6
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-primary fw-bold text-uppercase mb-3" style={{ letterSpacing: "5px" }}
            >
              Our Philosophy
            </motion.h6>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="display-4 fw-bold text-dark"
            >
              The Pillars of Radix Excellence
            </motion.h2>
          </div>

          <div className="row g-0 rounded-5 overflow-hidden bg-white p-3" style={{ height: "500px", border: "1px solid rgba(0,0,0,0.05)" }}>
            {[
              {
                title: "Our Mission",
                short: "MISSION",
                text: "Empowering global talent to transcend boundaries through elite immigration and education guidance.",
                icon: "bi-rocket-takeoff",
                accent: "#3b82f6"
              },
              {
                title: "Our Vision",
                short: "VISION",
                text: "To be the most trusted global bridge for talent and opportunity by 2030 through innovation.",
                icon: "bi-globe",
                accent: "#1e4ed8"
              },
              {
                title: "Our Purpose",
                short: "PURPOSE",
                text: "Turning international aspirations into concrete success stories with unwavering integrity.",
                icon: "bi-shield-check",
                accent: "#2563eb"
              }
            ].map((pillar, idx) => (
              <PillarPanel key={idx} pillar={pillar} index={idx} />
            ))}
          </div>

          {/* Primary CTA Button below cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center mt-5 pt-3"
          >
            <Link
              to="/contact"
              className="btn btn-primary rounded-pill px-5 py-2 fw-bold shadow-lg transform transition-all hover:scale-105"
              style={{ fontSize: "1.1rem", letterSpacing: "1px" }}
            >
              Start Your Global Journey Now <i className="bi bi-arrow-right ms-2"></i>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Our Story (Timeline Narrative) - HIGH-END REDESIGN */}
      <section id="story" className="py-5 bg-white overflow-hidden">
        <div className="container py-5">
          <div className="row align-items-center">
            {/* Image Column with Glassmorphism Overlay */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              viewport={{ once: true }}
              className="col-lg-6 mb-5 mb-lg-0 position-relative"
            >
              <div className="position-relative rounded-5 overflow-hidden shadow-2xl" style={{ border: "10px solid #f8fafc" }}>
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" alt="Team Work" className="img-fluid transition-all duration-700 hover:scale-105" />

                {/* Floating Satisfaction Badge (Glassmorphism) */}
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="position-absolute bottom-0 end-0 m-4 p-4 rounded-4 shadow-2xl d-flex align-items-center gap-3"
                  style={{
                    background: "rgba(15, 23, 42, 0.85)",
                    backdropFilter: "blur(15px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    width: "260px"
                  }}
                >
                  <div className="bg-primary rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: "50px", height: "50px" }}>
                    <i className="bi bi-person-check-fill text-white fs-4"></i>
                  </div>
                  <div>
                    <h3 className="fw-bold text-white mb-0">98%</h3>
                    <p className="text-white-50 small mb-0" style={{ fontSize: "0.75rem" }}>Client Satisfaction Rate</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Content Column */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="col-lg-6 ps-lg-5"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill mb-4 fw-bold"
              >
                OUR LEGACY
              </motion.div>

              <h2 className="display-4 fw-bold mb-4 text-dark" style={{ lineHeight: "1.2" }}>
                Founded on <span className="text-primary position-relative">Trust
                  <svg className="position-absolute bottom-0 start-0 w-100 h-25 opacity-20" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0 10 Q 50 0 100 10" stroke="currentColor" fill="none" strokeWidth="4" />
                  </svg>
                </span>,<br /> Grown by Excellence
              </h2>

              <p className="text-muted mb-4 fs-5" style={{ lineHeight: "1.8" }}>
                In 2014, Radix started as a small team with a singular focus: bringing
                transparency to the often-opaque world of international immigration.
                We saw the struggles of students and professionals lost in paperwork.
              </p>



              {/* Enhanced Stats Row */}
              <div className="row g-4 text-start">
                {[
                  { value: "10k+", label: "Successful Visas", icon: "bi-check-all" },
                  { value: "50+", label: "Partner Unis", icon: "bi-bank" },
                  { value: "15+", label: "Global Offices", icon: "bi-geo-alt" }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="col-4"
                  >
                    <div className="d-flex flex-column">
                      <div className="text-primary mb-2">
                        <i className={`bi ${stat.icon} fs-4`}></i>
                      </div>
                      <h3 className="fw-bold text-dark mb-1">{stat.value}</h3>
                      <p className="small text-uppercase fw-bold text-muted mb-0" style={{ fontSize: "0.7rem", letterSpacing: "1px" }}>{stat.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Detailed Milestones (The Roadmap) - ULTRA-PREMIUM REDESIGN */}
      <section className="py-5 overflow-hidden" style={{ backgroundColor: "#0b1121", color: "white" }}>
        <div className="container py-5">
          <div className="text-center mb-5">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="badge rounded-pill bg-white text-primary px-4 py-2 mb-3 fw-bold shadow-sm"
              style={{ border: "1px solid rgba(59, 130, 246, 0.2)" }}
            >
              OUR EVOLUTION
            </motion.div>
            <h2 className="display-4 fw-bold mb-3">Defining <span className="text-primary">Moments</span></h2>
            <p className="lead opacity-75 mx-auto" style={{ maxWidth: "700px" }}>A decade of breaking barriers and redefining global mobility for talent across the world.</p>
          </div>

          <div className="position-relative mt-5 pt-4">
            {/* Sequential Growing Path (Desktop) - CONFINED TO CARD CENTERS */}
            <div className="position-absolute top-50 d-none d-lg-block" style={{ left: "12.5%", width: "75%", height: "6px", background: "rgba(255, 255, 255, 0.1)", borderRadius: "10px", zIndex: 0 }}>
              <motion.div 
                animate={{ 
                  width: ["0%", "100%"] 
                }}
                transition={{ 
                  duration: 1, 
                  repeat: Infinity, 
                  repeatDelay: 1,
                  ease: "linear" 
                }}
                className="position-absolute top-0 start-0 h-100 bg-white"
                style={{ borderRadius: "10px", boxShadow: "0 0 20px rgba(255,255,255,0.8)" }}
              />
            </div>

            <div className="row g-4 position-relative z-1">
              {milestones.map((ms, idx) => (
                <MilestoneCard key={idx} milestone={ms} index={idx} />
              ))}
            </div>
          </div>
        </div>

        <style>{`
          .shadow-primary { box-shadow: 0 0 15px #3b82f6; }
          .animate-pulse { animation: pulse-neon 2s infinite; }
          @keyframes pulse-neon {
            0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
            100% { transform: translate(-50%, -50%) scale(3); opacity: 0; }
          }
        `}</style>
      </section>

      {/* [NEW] Section 3.5: The Radix Process (MUI REDESIGN) */}
      <Box component="section" sx={{ py: 12, bgcolor: 'var(--bg-grey)', position: 'relative', overflow: 'hidden' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: 4, display: 'block', mb: 2 }}>OUR WORKFLOW</Typography>
              <Typography variant="h2" sx={{ fontWeight: 900, mb: 3, color: '#0f172a', fontSize: { xs: '2.5rem', md: '3.5rem' } }}>How We Turn <span style={{ color: '#3b82f6' }}>Dreams</span> into Reality</Typography>
              <Typography variant="h6" sx={{ color: '#64748b', maxWidth: 700, mx: 'auto', fontWeight: 400, lineHeight: 1.6 }}>Our meticulous 4-step process is designed to minimize risks and maximize success for every applicant.</Typography>
            </motion.div>
          </Box>
          <Box sx={{ mt: 10, position: 'relative' }}>
            {/* Continuous Connection Path (1 -> 2 -> 3 -> 4) */}
            <svg 
              style={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                width: '100%', 
                height: '100%', 
                zIndex: 0, 
                pointerEvents: 'none',
                overflow: 'visible'
              }}
              viewBox="0 0 100 100" 
              preserveAspectRatio="none"
            >
              <motion.path
                d="M 25,25 L 75,25 L 75,75 L 25,75"
                fill="none"
                stroke="#1e3a8a"
                strokeWidth="0.3"
                strokeDasharray="1,2"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.8 }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
            </svg>

            {/* Row 1 */}
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6, mb: 10 }}>
              <Box sx={{ flex: 1, zIndex: 1 }}>
                <ProcessStep index={0} step="01" title="Profile Analysis" text="We conduct a deep-dive assessment of your academic and professional background." icon={PsychologyIcon} />
              </Box>
              <Box sx={{ flex: 1, zIndex: 1 }}>
                <ProcessStep index={1} step="02" title="Strategy Design" text="Creating a customized roadmap targeting the best countries and universities for you." icon={AccountTreeIcon} />
              </Box>
            </Box>

            {/* Row 2: Swapped 3 and 4 positions for Snake Flow */}
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6 }}>
              <Box sx={{ flex: 1, zIndex: 1 }}>
                <ProcessStep index={3} step="04" title="Success & Beyond" text="Post-visa support including pre-departure briefings and accommodation assistance." icon={RocketLaunchIcon} />
              </Box>
              <Box sx={{ flex: 1, zIndex: 1 }}>
                <ProcessStep index={2} step="03" title="Precision Filing" text="Our documentation experts handle your application with surgical precision." icon={DescriptionIcon} />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>


      {/* [NEW] Section 4: Commitment to Quality (The Documentation Hub) */}
      <section className="py-5" style={{ backgroundColor: "#ffffff" }}>
        <div className="container py-5">
          <div className="row align-items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="col-lg-6 pe-lg-5"
            >
              <h6 className="text-primary fw-bold text-uppercase mb-3" style={{ letterSpacing: "3px" }}>Quality First</h6>
              <h2 className="display-4 fw-bold mb-4">Meticulous Attention <br /> to Every <span className="text-primary">Detail</span></h2>
              <p className="lead text-muted mb-4">The secret to our 95% success rate lies in our rigorous Quality Control (QC) process. Every document is checked thrice by different senior consultants before submission.</p>

              <ul className="list-unstyled">
                {[
                  "Three-tier document verification system",
                  "Expert SOP & CV editing by native speakers",
                  "Real-time embassy update tracking",
                  "Comprehensive mock interview bootcamps"
                ].map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="d-flex align-items-center gap-3 mb-3 fs-5 text-dark"
                  >
                    <i className="bi bi-check-circle-fill text-primary"></i>
                    {point}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="col-lg-6 mt-5 mt-lg-0"
            >
              <div className="p-5 rounded-5 shadow-2xl border" style={{ backgroundColor: "var(--bg-grey)", boxShadow: "0 20px 50px rgba(0,0,0,0.05)" }}>
                <div className="d-flex align-items-center gap-4 mb-5">
                  <div className="bg-primary text-white p-4 rounded-4 shadow-lg">
                    <i className="bi bi-shield-lock fs-1"></i>
                  </div>
                  <div>
                    <h4 className="fw-bold mb-1">Guaranteed Security</h4>
                    <p className="text-muted mb-0 small">Your data privacy and success are our priorities.</p>
                  </div>
                </div>

                <div className="row g-4 text-center">
                  <div className="col-6">
                    <div className="p-4 bg-white rounded-4 shadow-sm">
                      <h2 className="fw-bold text-primary mb-0">5k+</h2>
                      <p className="small mb-0 text-muted">Documents Verified</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-4 bg-white rounded-4 shadow-sm">
                      <h2 className="fw-bold text-primary mb-0">0%</h2>
                      <p className="small mb-0 text-muted">Privacy Breaches</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* [NEW] Section 4.5: Global Network (University Partners) */}
      <section className="py-5" style={{ backgroundColor: "var(--bg-grey)" }}>
        <div className="container py-5 text-center">
          <h6 className="text-primary fw-bold text-uppercase mb-3" style={{ letterSpacing: "3px" }}>Our Partners</h6>
          <h2 className="display-4 fw-bold mb-5">A Global Network of Excellence</h2>
          <Slider {...partnerSettings} className="partner-slider">
            {partners.map((logo, idx) => (
              <PartnerCard key={idx} logo={logo} />
            ))}
          </Slider>
          <div className="mt-5">
            <p className="text-muted">Directly partnered with over 50+ world-class institutions across 15+ countries.</p>
          </div>
        </div>
      </section>

      {/* Section 4: What Sets Us Apart (Why Choose Us) */}
      <section className="py-5 bg-white">
        <div className="container py-5">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6">
              <h6 className="text-primary fw-bold text-uppercase mb-3" style={{ letterSpacing: "3px" }}>The Radix Edge</h6>
              <h2 className="display-4 fw-bold">Why Industry Leaders <span className="text-primary">Choose Us</span></h2>
            </div>
            <div className="col-lg-6">
              <p className="text-muted lead mb-0">We combine decades of experience with a proprietary data-driven approach to ensure every application has the highest possible chance of success.</p>
            </div>
          </div>

          <div className="row g-4">
            {[
              { title: "Direct University Ties", text: "Direct partnerships with 50+ world-class universities across Canada, UK, and Europe.", icon: "bi-bank" },
              { title: "Certified Consultants", text: "Every member of our team is a certified immigration expert with specialized training.", icon: "bi-patch-check" },
              { title: "24/7 Support Eco-system", text: "Our digital portal provides real-time updates and support through every step of your journey.", icon: "bi-headset" },
              { title: "Mock Interview Prep", text: "Rigorous mock sessions that prepare you for the toughest embassy interviews.", icon: "bi-chat-quote" }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15, type: "spring", bounce: 0.4 }}
                viewport={{ once: true }}
                whileHover="hover"
                className="col-lg-3 col-md-6"
              >
                <motion.div 
                  className="p-5 h-100 rounded-5 text-center border position-relative overflow-hidden" 
                  style={{ backgroundColor: "var(--bg-grey)", zIndex: 1, cursor: "pointer" }}
                  variants={{
                    hover: {
                      y: -15,
                      scale: 1.03,
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.08)"
                    }
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div 
                    className="p-4 rounded-circle d-inline-flex align-items-center justify-content-center mb-4 border"
                    style={{ width: "80px", height: "80px", backgroundColor: "#ffffff", color: "#2563eb", transition: "all 0.3s ease" }}
                    variants={{
                      hover: {
                        backgroundColor: "#2563eb",
                        color: "#ffffff",
                        scale: 1.15,
                        rotate: 10,
                        borderColor: "#2563eb"
                      }
                    }}
                  >
                    <i className={`bi ${feature.icon} fs-2`} style={{ color: "inherit" }}></i>
                  </motion.div>
                  <h5 className="fw-bold mb-3" style={{ color: "#0f172a" }}>{feature.title}</h5>
                  <p className="text-muted small mb-0 lh-lg">{feature.text}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Our Team (The Minds Behind Radix) */}
      <section className="py-5" style={{ backgroundColor: "var(--bg-grey)" }}>
        <div className="container py-5">
          <div className="text-center mb-5">
            <h6 className="text-primary fw-bold text-uppercase mb-3" style={{ letterSpacing: "3px" }}>Our Leadership</h6>
            <h2 className="display-4 fw-bold mb-2">Meet the Experts</h2>
            <p className="text-muted lead">The dedicated professionals turning your global dreams into reality.</p>
          </div>
          <Slider {...teamSettings} className="team-slider px-3">
            {team.map((member, idx) => (
              <TeamCard key={idx} member={member} />
            ))}
          </Slider>
        </div>
      </section>

      {/* Section 6: Values That Drive Us */}
      <section className="py-5 bg-white">
        <div className="container py-5 text-center">
          <h6 className="text-primary fw-bold text-uppercase mb-3" style={{ letterSpacing: "3px" }}>Our Values</h6>
          <h2 className="display-4 fw-bold mb-5">The Core of Our Operations</h2>
          <div className="row g-4">
            {values.map((val, idx) => (
              <ValueCard key={idx} val={val} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Final CTA Banner (Radix Premium Style) */}
      <section className="py-5 my-5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-5 p-lg-5 text-center position-relative overflow-hidden shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
              color: "white",
              borderRadius: "50px"
            }}
          >
            {/* Background Decorative Rings */}
            <div className="position-absolute top-0 start-0 translate-middle bg-primary opacity-10 rounded-circle" style={{ width: "400px", height: "400px" }}></div>
            <div className="position-absolute bottom-0 end-0 translate-middle-x bg-primary opacity-10 rounded-circle" style={{ width: "300px", height: "300px" }}></div>

            <div className="position-relative z-1 py-4">
              <h2 className="display-3 fw-bold mb-4">Ready to Start Your <br /> <span className="text-primary">Global Journey?</span></h2>
              <p className="lead text-white mb-5 mx-auto" style={{ maxWidth: "750px" }}>Join 10,000+ successful candidates who turned their dreams into reality with Radix. Your consultation is just one click away.</p>
              <div className="d-flex flex-wrap justify-content-center gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/contact" className="btn btn-primary btn-lg rounded-pill px-5 py-3 fw-bold shadow-lg" style={{ backgroundColor: "var(--btn-blue)", border: "none" }}>Book Free Consultation</Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/services" className="btn btn-outline-light btn-lg rounded-pill px-5 py-3 fw-bold">Explore Our Services</Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Spacer */}
      <div className="py-4"></div>
    </div>
  );
};

export default About;
