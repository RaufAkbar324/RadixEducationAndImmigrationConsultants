import React from "react";
import { Link } from "react-router-dom";
import InfoCard from "../components/InfoCard";
import TestimonialCard from "../components/TestimonialCard";
import CardItem from "../components/CardItem";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Home.css";
import { useInView } from "framer-motion";

import { useEffect, useRef, useState } from "react";


import StudyAbroad from "../assets/StudyAbroad.jpg";

import University1 from "../assets/University1.png";
import University2 from "../assets/University2.png";
import University3 from "../assets/University3.png";
import University4 from "../assets/University4.png";
import University5 from "../assets/University5.png";
import University6 from "../assets/University6.png";
import University7 from "../assets/University7.png";
import University8 from "../assets/University8.png";
import University9 from "../assets/University9.jpg";
import University10 from "../assets/University10.jpeg";




const Counter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: true });

  // Extract number and suffix (e.g., "95" and "%")
  const target = parseInt(value.replace(/[^0-9]/g, ''));
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = target;
      if (start === end) return;

      let totalMiliseconds = duration * 1000;
      let incrementTime = (totalMiliseconds / end);

      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, target, duration]);

  return <span ref={countRef}>{count}{suffix}</span>;
};

function Home() {
  const services = [
    {
      title: "Visa Consultancy",
      description: "Expert guidance for student, visit, and business visa applications with high success rates.",
      link: "#",
      text: "Learn More",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Study Abroad Guide",
      description: "End-to-end support for university selection, admission, and scholarship applications.",
      link: "#",
      text: "Learn More",
      image: StudyAbroad,
    },


    {
      title: "Immigration Services",
      description: "Comprehensive guidance for permanent residency, citizenship, and other immigration pathways.",
      link: "#",
      text: "Learn More",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800",
    },

    {
      title: "IELTS Preparation",
      description: "Result-oriented training for IELTS, TOEFL, and other language proficiency tests.",
      link: "#",
      text: "Learn More",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Language Courses",
      description: "Master German, French, or Chinese with our native-speaking instructors.",
      link: "#",
      text: "Learn More",
      image: "https://images.unsplash.com/photo-1543165796-5426273eaab3?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "E-Commerce Training",
      description: "Launch your online business with our comprehensive Amazon and Shopify courses.",
      link: "#",
      text: "Learn More",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Software Development",
      description: "Learn web and mobile development with hands-on projects and industry mentorship.",
      link: "#",
      text: "Learn More",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    },
  ];

  const whyChooseUs = [
    {
      title: "High Success Rate",
      text: "Our meticulous approach ensures a 95% visa success rate for our clients through expert planning.",
      icon: "bi-shield-check",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Expert Consultants",
      text: "Our team consists of certified immigration experts with decades of combined global experience.",
      icon: "bi-people",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "15+ Destinations",
      text: "Wide network of opportunities across Canada, UK, USA, Australia, Germany and many more countries.",
      icon: "bi-globe",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const visaSpecializations = [
    { title: "Student Visa", text: "Comprehensive support for securing study permits in top destinations.", icon: "bi-book-half" },
    { title: "Tourist/Visit Visa", text: "Hassle-free application process for exploring your dream destinations.", icon: "bi-airplane-engines" },
    { title: "Business/Work Visa", text: "Professional guidance for skilled worker permits and business visas.", icon: "bi-briefcase" },
    { title: "Family/Spouse Visa", text: "Expert assistance in reuniting families through visa applications.", icon: "bi-people-fill" }
  ];

  const destinations = [
    { name: "Canada", image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&q=80&w=800" },
    { name: "United Kingdom", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800" },
    { name: "Australia", image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=800" },
    { name: "Germany", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=800" },
    { name: "USA", image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&q=80&w=800" }
  ];

  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "Student, University of London",
      text: "Radix helped me secure my student visa in record time. Their guidance on documentation was invaluable.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Ahmed Raza",
      role: "Amazon FBA Seller",
      text: "The e-commerce course changed my life. I'm now running a successful store with consistent monthly revenue.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Maria Gonzalez",
      role: "Full Stack Developer",
      text: "Practical training at its best. The development course gave me the skills I needed to land my first tech job.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
    }
  ];

  const partners = [
    University1,
    University2,
    University3,
    University4,
    University5,
    University6,
    University7,
    University8,
    University9,
    University10
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
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

  const destSliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  const partnerSettings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: false,
    arrows: false,
    cssEase: "linear",
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 5 } },
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } }
    ]
  };



  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.2
      }
    },
    viewport: { once: true }
  };

  return (
    <div className="home-container overflow-hidden">
      {/* Dynamic Hero Section */}
      <section className="hero-section">
        <div className="carousel slide carousel-fade h-100" data-bs-ride="carousel">
          <div className="carousel-inner h-100">
            <div className="carousel-item active h-100">
              <motion.img
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1920"
                className="d-block w-100 h-100 object-fit-cover"
                alt="Global Education"
              />
              <div className="hero-overlay">
                <motion.h1
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="hero-title"
                >
                  Unlock Your Global Potential with Radix
                </motion.h1>
                <motion.p
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="hero-subtitle"
                >
                  Expert visa consultancy, world-class language training, and professional development courses tailored for your success.
                </motion.p>
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  <a href="#contact" className="btn btn-primary btn-lg rounded-pill px-5 py-3 fw-bold me-3" style={{ backgroundColor: "var(--btn-blue)", border: "none" }}>Get Started</a>
                  <a href="#services" className="btn btn-outline-light btn-lg rounded-pill px-5 py-3 fw-bold">Our Services</a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Numbers Section */}
      <section className="stats-section text-center">
        <div className="container">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="row"
          >
            {[
              { val: "95%", label: "Visa Success Rate" },
              { val: "1200+", label: "Students Placed" },
              { val: "10+", label: "Years of Excellence" },
              { val: "50+", label: "Partner Universities" }
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeInUp} className="col-md-3 stat-item">
                <h2 className="fw-bold">
                  <Counter value={stat.val} />
                </h2>
                <p className="opacity-75">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* [NEW] Visa Specializations Section */}
      <section className="py-5" style={{ backgroundColor: "var(--bg-grey)" }}>
        <div className="container py-5">
          <motion.div {...fadeInUp} className="text-center mb-5">
            <span className="text-primary fw-bold text-uppercase" style={{ letterSpacing: "2px" }}>Our Expertise</span>
            <h2 className="display-5 fw-bold mt-2">Visa Categories We Handle</h2>
            <div className="bg-primary mx-auto mt-3" style={{ width: "60px", height: "4px", borderRadius: "2px" }}></div>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="row g-4 mt-4"
          >
            {visaSpecializations.map((visa, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="col-lg-3 col-md-6">
                <motion.div
                  whileHover="hover"
                  initial="initial"
                  className="p-4 h-100 border-0 rounded-4 shadow-sm transition position-relative overflow-hidden"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <motion.div
                    variants={{ hover: { y: -5 } }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="mb-4 d-flex align-items-center justify-content-center">
                      <div className="position-relative d-flex align-items-center justify-content-center" style={{ width: "32px", height: "32px" }}>
                        <motion.div
                          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                          className="position-absolute rounded-circle"
                          style={{ width: "100%", height: "100%", backgroundColor: "var(--btn-blue)" }}
                        ></motion.div>
                        <div className="rounded-circle position-relative shadow-lg" style={{ width: "12px", height: "12px", backgroundColor: "var(--btn-blue)", border: "2px solid white" }}></div>
                      </div>
                    </div>
                    <h5 className="fw-bold mb-3">{visa.title}</h5>
                    <p className="text-muted small mb-0" style={{ lineHeight: "1.6" }}>{visa.text}</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Global Impact Section */}
      <section className="py-5 overflow-hidden" style={{ backgroundColor: "#0f172a", color: "white" }}>
        <div className="container py-5">
          <div className="row align-items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="col-lg-6 mb-5 mb-lg-0"
            >
              <h2 className="display-5 fw-bold mb-4">Making an Impact on a Global Scale</h2>
              <p className="lead opacity-75 mb-5">We are more than just consultants; we are architects of your international future. Our reach extends across continents, helping thousands realize their dreams.</p>
              <div className="row g-4">
                <div className="col-sm-6">
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
                    <div>
                      <h5 className="fw-bold mb-0">15+ Countries</h5>
                      <p className="small mb-0 opacity-75">Global presence and network</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
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
                    <div>
                      <h5 className="fw-bold mb-0">500+ Programs</h5>
                      <p className="small mb-0 opacity-75">Diverse academic options</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/contact" className="btn btn-primary rounded-pill px-5 py-3 fw-bold" style={{ backgroundColor: "var(--btn-blue)", border: "none" }}>Get Your Profile Evaluated</Link>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="col-lg-6"
            >
              <img src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=800" alt="Global Reach" className="img-fluid rounded-4 shadow-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Destination Spotlight */}
      <section className="py-5 overflow-hidden position-relative" style={{ backgroundColor: "var(--bg-grey)", transition: "0.5s ease" }}>
        <div className="container py-5">
          <div className="row align-items-end mb-5">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="col-md-9"
            >
              <h6 className="text-primary fw-bold text-uppercase mb-2" style={{ letterSpacing: "3px", fontSize: "0.85rem" }}>Our Global Reach</h6>
              <h2 className="display-5 fw-bold mb-3">Top Destinations for Our Clients</h2>
              <p className="text-muted lead" style={{ maxWidth: "800px", fontSize: "1.05rem", lineHeight: "1.8" }}>
                Embark on your journey to the world's most prestigious academic hubs. We provide an expert roadmap to destinations where our clients consistently achieve exceptional success, from the UK and USA to Canada and Germany.
              </p>
            </motion.div>
            <div className="col-md-3 text-md-end mb-4 d-none d-md-block">
              <Link to="/services" className="btn btn-outline-primary rounded-pill px-4 fw-bold">Explore All</Link>
            </div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="row"
          >
            <Slider {...destSliderSettings}>
              {destinations.map((dest, idx) => (
                <div key={idx} className="px-3 pb-4">
                  <motion.div
                    variants={fadeInUp}
                    whileHover="hover"
                    className="position-relative rounded-4 overflow-hidden shadow-none cursor-pointer"
                    style={{
                      height: "400px",
                      backgroundColor: "var(--bg-grey)",
                      border: "1px solid rgba(0,0,0,0.08)"
                    }}
                  >
                    <motion.img
                      variants={{
                        hover: { scale: 1.1, filter: "brightness(0.7)" }
                      }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      src={dest.image}
                      alt={dest.name}
                      className="w-100 h-100 object-fit-cover"
                    />
                    <motion.div
                      className="position-absolute bottom-0 start-0 w-100 p-4 pt-5 text-white d-flex align-items-end"
                      style={{ background: "linear-gradient(transparent, rgba(0,0,0,0.7))", height: "60%" }}
                    >
                      <div>
                        <motion.h3
                          variants={{
                            hover: { y: -5 }
                          }}
                          className="fw-bold mb-2 h4"
                        >{dest.name}</motion.h3>
                        <motion.div
                          variants={{
                            initial: { width: 0, opacity: 0 },
                            hover: { width: "50px", opacity: 1 }
                          }}
                          style={{ height: "4px", backgroundColor: "var(--btn-blue)", borderRadius: "10px" }}
                        ></motion.div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              ))}
            </Slider>
          </motion.div>
        </div>
      </section>

      {/* [ENHANCED] Why Choose Radix with Images */}
      <section className="py-5 bg-white">
        <div className="container py-5 text-center">
          <motion.h2 {...fadeInUp} className="section-title">Why Choose Radix for Visa?</motion.h2>
          <motion.p {...fadeInUp} className="section-subtitle">We combine industry expertise with a success-driven approach.</motion.p>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="row mt-5 g-4"
          >
            {whyChooseUs.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="col-lg-4 col-md-6"
                whileHover={{ y: -10 }}
              >
                <InfoCard {...item} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* [NEW] University Partners Section */}
      <section className="py-5" style={{ backgroundColor: "var(--bg-grey)", borderTop: "1px solid rgba(0,0,0,0.05)", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
        <div className="container py-4 text-center">
          <motion.div {...fadeInUp} className="mb-5">
            <h6 className="text-primary fw-bold text-uppercase mb-2" style={{ letterSpacing: "3px", fontSize: "0.85rem" }}>Our Prestigious Network</h6>
            <h2 className="fw-bold text-dark">Global University Partners</h2>
          </motion.div>
          <motion.div {...fadeInUp}>
            <Slider {...partnerSettings}>
              {partners.map((url, idx) => (
                <div key={idx} className="px-3" style={{ outline: "none" }}>
                  <div className="partner-card bg-white rounded-4 p-4 shadow-sm d-flex align-items-center justify-content-center" style={{ height: "130px", border: "1px solid #f1f5f9" }}>
                    <img src={url} alt="University Partner" className="img-fluid" style={{ maxHeight: "80px", width: "auto" }} />
                  </div>
                </div>
              ))}
            </Slider>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section text-center">
        <div className="container">
          <motion.h2 {...fadeInUp} className="section-title">Professional Training & Guides</motion.h2>
          <motion.p {...fadeInUp} className="section-subtitle">Beyond visa consultancy, we equip you with the skills needed for global excellence.</motion.p>
          <motion.div {...fadeInUp} className="row mt-5">
            <Slider {...sliderSettings}>
              {services.map((service, idx) => (
                <div key={idx} className="px-3 pb-5">
                  <CardItem {...service} />
                </div>
              ))}
            </Slider>
          </motion.div>
        </div>
      </section>

      {/* Experience Advantage Section */}
      <section className="py-5 bg-white">
        <div className="container py-5">
          <motion.div {...fadeInUp} className="row align-items-center mb-5">
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold">Experience the Radix Advantage</h2>
              <p className="text-muted mt-3">Why settle for standard when you can have exceptional? Our approach is built on three core pillars of success.</p>
            </div>
            <div className="col-lg-6 text-lg-end">
              <motion.button whileHover={{ scale: 1.05 }} className="btn btn-outline-primary rounded-pill px-4 fw-bold">View Our Full Portfolio</motion.button>
            </div>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="row g-4"
          >
            {[
              { icon: "bi-gem", title: "Premium Service", text: "Every client receives personalized attention and a tailored strategy for maximum success." },
              { icon: "bi-lightning-charge", title: "Fast Processing", text: "Our efficient internal workflows ensure your application moves faster than the standard." },
              { icon: "bi-headset", title: "24/7 Support", text: "Our dedicated support experts are available around the clock to guide you through every step." }
            ].map((adv, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="col-md-4">
                <motion.div
                  whileHover={{
                    y: -15,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.12)"
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="card border-0 p-5 h-100 position-relative"
                  style={{
                    backgroundColor: "var(--bg-grey)",
                    borderRadius: "30px",
                    boxShadow: "0 4px 20px -10px rgba(0,0,0,0.05)",
                    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    cursor: "pointer"
                  }}
                >
                  <div className="d-flex align-items-center mb-4">
                    {/* Signature Pulsing Dot */}
                    <div className="position-relative me-3 d-flex align-items-center justify-content-center" style={{ width: "24px", height: "24px" }}>
                      <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="position-absolute rounded-circle"
                        style={{ width: "100%", height: "100%", backgroundColor: "var(--btn-blue)" }}
                      ></motion.div>
                      <div className="rounded-circle position-relative shadow-lg" style={{ width: "10px", height: "10px", backgroundColor: "var(--btn-blue)", border: "2px solid white" }}></div>
                    </div>
                    <h4 className="fw-bold mb-0" style={{ color: "#0f172a" }}>{adv.title}</h4>
                  </div>

                  <p className="text-muted mb-4" style={{ lineHeight: "1.7", fontSize: "0.95rem" }}>{adv.text}</p>
                  <motion.a
                    whileHover="btnHover"
                    whileTap={{ scale: 0.95 }}
                    href="/contact"
                    className="btn btn-primary rounded-pill d-flex align-items-center mt-auto shadow-sm"
                    style={{
                      backgroundColor: "var(--btn-blue)",
                      color: "white",
                      border: "none",
                      fontSize: "0.9rem",
                      fontWeight: "bold",
                      padding: "10px 25px",
                      width: "fit-content",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center"
                    }}
                  >
                    <span>Learn More</span>
                    <motion.i
                      variants={{
                        btnHover: { x: 5 }
                      }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="bi bi-arrow-right ms-2"
                    ></motion.i>
                  </motion.a>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Us Split Layout */}
      <section className="about-section overflow-hidden py-5" style={{ background: "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)", color: "#ffffff" }}>
        <div className="container py-5">
          <div className="row align-items-center">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="col-lg-6 mb-5 mb-lg-0"
            >
              <motion.h6 variants={fadeInUp} className="text-primary fw-bold text-uppercase mb-3" style={{ letterSpacing: "3px", fontSize: "0.85rem" }}>Who We Are</motion.h6>
              <motion.h2 variants={fadeInUp} className="display-4 fw-bold mb-4" style={{ lineHeight: "1.2" }}>Empowering Global <span className="text-primary">Leaders</span></motion.h2>
              <motion.p variants={fadeInUp} className="lead mb-5 opacity-75" style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                Radix is a premier consultancy dedicated to bridging the gap between talent and global opportunities. We don't just provide services; we build futures.
              </motion.p>

              <div className="row g-4 mb-5">
                <motion.div variants={fadeInUp} className="col-sm-6">
                  <div className="p-4 h-100" style={{ backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(10px)" }}>
                    <div className="d-flex align-items-center mb-3">
                      {/* Signature Pulsing Dot */}
                      <div className="position-relative me-3 d-flex align-items-center justify-content-center" style={{ width: "24px", height: "24px" }}>
                        <motion.div
                          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                          className="position-absolute rounded-circle"
                          style={{ width: "100%", height: "100%", backgroundColor: "var(--btn-blue)" }}
                        ></motion.div>
                        <div className="rounded-circle position-relative shadow-lg" style={{ width: "10px", height: "10px", backgroundColor: "var(--btn-blue)", border: "2px solid white" }}></div>
                      </div>
                      <h4 className="fw-bold mb-0" style={{ fontSize: "1.2rem" }}>Mission</h4>
                    </div>
                    <p className="small mb-0 opacity-70">Professional guidance for global success through strategic planning.</p>
                  </div>
                </motion.div>
                <motion.div variants={fadeInUp} className="col-sm-6">
                  <div className="p-4 h-100" style={{ backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(10px)" }}>
                    <div className="d-flex align-items-center mb-3">
                      {/* Signature Pulsing Dot */}
                      <div className="position-relative me-3 d-flex align-items-center justify-content-center" style={{ width: "24px", height: "24px" }}>
                        <motion.div
                          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                          className="position-absolute rounded-circle"
                          style={{ width: "100%", height: "100%", backgroundColor: "var(--btn-blue)" }}
                        ></motion.div>
                        <div className="rounded-circle position-relative shadow-lg" style={{ width: "10px", height: "10px", backgroundColor: "var(--btn-blue)", border: "2px solid white" }}></div>
                      </div>
                      <h4 className="fw-bold mb-0" style={{ fontSize: "1.2rem" }}>Vision</h4>
                    </div>
                    <p className="small mb-0 opacity-70">The most trusted name in international education and career development.</p>
                  </div>
                </motion.div>
              </div>

              <motion.div variants={fadeInUp}>
                <Link to="/about" className="btn btn-primary rounded-pill px-5 py-3 fw-bold shadow-lg" style={{ backgroundColor: "var(--btn-blue)", border: "none", letterSpacing: "1px" }}>
                  Discover Our Story
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 60, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 1.2,
                delay: 0.2
              }}
              viewport={{ once: true }}
              className="col-lg-6 position-relative ps-lg-5"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="rounded-5 overflow-hidden shadow-2xl"
                style={{ border: "10px solid rgba(255,255,255,0.05)" }}
              >
                <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1920" alt="About Radix" className="img-fluid w-100 h-100 object-fit-cover" style={{ minHeight: "500px" }} />
              </motion.div>

              {/* Floating Achievement Card */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="position-absolute bottom-0 start-0 m-4 p-4 d-none d-md-block"
                style={{ backgroundColor: "#ffffff", borderRadius: "20px", color: "#0f172a", boxShadow: "0 20px 40px rgba(0,0,0,0.3)", width: "200px" }}
              >
                <h2 className="fw-bold text-primary mb-0">10k+</h2>
                <p className="small fw-bold mb-0">Success Stories</p>
                <div className="mt-2 h-1 w-50 bg-primary rounded"></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Expert Visa Process */}
      <section className="process-section">
        <div className="container">
          <motion.div {...fadeInUp} className="text-center mb-5">
            <h2 className="section-title">Our Expert Visa Process</h2>
            <p className="section-subtitle">A meticulously planned journey to ensure your application is flawless.</p>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="row g-4 mt-4"
          >
            {[
              { num: "1", title: "Assessment", text: "We analyze your profile for the best category." },
              { num: "2", title: "Preparation", text: "Meticulous gathering of all required documents." },
              { num: "3", title: "Coaching", text: "Comprehensive mock sessions for interviews." },
              { num: "4", title: "Submission", text: "Final review and submission with high accuracy." }
            ].map((step, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="col-md-3">
                <motion.div whileHover={{ y: -5 }} className="step-card">
                  <div className="step-number">{step.num}</div>
                  <h5 className="fw-bold mb-3 mt-2">{step.title}</h5>
                  <p className="text-muted small">{step.text}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* [ENHANCED] Success Stories with Photos */}
      <section className="testimonials-section py-5 position-relative overflow-hidden" style={{ background: "#0f172a", minHeight: "80vh", display: "flex", alignItems: "center" }}>
        {/* Decorative Background Elements */}
        <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden" style={{ zIndex: 0 }}>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
              x: [0, 50, 0],
              y: [0, 30, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="position-absolute rounded-circle"
            style={{ width: "600px", height: "600px", background: "radial-gradient(circle, var(--btn-blue) 0%, transparent 70%)", top: "-200px", left: "-200px", filter: "blur(80px)" }}
          ></motion.div>
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.05, 0.15, 0.05],
              x: [0, -40, 0],
              y: [0, -50, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="position-absolute rounded-circle"
            style={{ width: "500px", height: "500px", background: "radial-gradient(circle, #4f46e5 0%, transparent 70%)", bottom: "-100px", right: "-100px", filter: "blur(80px)" }}
          ></motion.div>
        </div>

        <div className="container position-relative" style={{ zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-5"
          >
            <h6 className="text-primary fw-bold text-uppercase mb-3" style={{ letterSpacing: "3px", fontSize: "0.85rem" }}>Testimonials</h6>
            <h2 className="display-4 fw-bold text-white mb-3">Student <span className="text-primary">Success Stories</span></h2>
            <div className="mx-auto bg-primary rounded-pill mb-4" style={{ width: "80px", height: "4px" }}></div>
            <p className="opacity-75 text-white lead mx-auto" style={{ maxWidth: "600px" }}>Real stories from students who achieved their dreams with Radix consultancy.</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="row g-4 mt-2"
          >
            {testimonials.map((t, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="col-md-4">
                <TestimonialCard {...t} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* [ENHANCED] FAQ Section */}
      <section className="faq-section py-5 bg-white">
        <div className="container py-5">
          <motion.div {...fadeInUp} className="text-center mb-5">
            <h6 className="text-primary fw-bold text-uppercase mb-2" style={{ letterSpacing: "3px" }}>Got Questions?</h6>
            <h2 className="display-5 fw-bold text-dark">Frequently Asked Questions</h2>
          </motion.div>
          <div className="row justify-content-center mt-5">
            <div className="col-lg-9">
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="accordion accordion-flush custom-faq"
                id="faqAccordion"
              >
                {[
                  { id: "1", q: "How long does the student visa process typically take?", a: "Typically between 4 to 12 weeks depending on the country.", icon: "bi-airplane-engines" },
                  { id: "2", q: "What is the success rate for visa applications with Radix?", a: "We maintain an industry-leading 95% visa success rate.", icon: "bi-shield-check" },
                  { id: "3", q: "How can I improve my IELTS score in a short period?", a: "Our intensive mock tests help students see a band increase in 4-6 weeks.", icon: "bi-journal-text" },
                  { id: "4", q: "Which foreign languages are currently most in demand?", a: "German and French are in high demand for European universities.", icon: "bi-translate" }
                ].map((faq, idx) => (
                  <motion.div key={idx} variants={fadeInUp} className="accordion-item mb-4 border-0 shadow rounded-4 overflow-hidden">
                    <h2 className="accordion-header">
                      <button className={`accordion-button fw-bold py-4 px-4 fs-5 ${idx !== 0 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target={`#faq${faq.id}`}>
                        <i className={`bi ${faq.icon} text-primary me-3`}></i>
                        {faq.q}
                      </button>
                    </h2>
                    <div id={`faq${faq.id}`} className={`accordion-collapse collapse ${idx === 0 ? 'show' : ''}`} data-bs-parent="#faqAccordion">
                      <div className="accordion-body text-muted px-4 pb-4">
                        {faq.a}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section id="contact" className="cta-banner">
        <div className="container">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="cta-title">Start Your Success Story Today</h2>
            <p className="cta-subtitle">Our first consultation is always free. Let's build your future together.</p>
            <motion.div
              whileHover={{
                scale: 1.05,
                y: -8,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              style={{ width: "fit-content", margin: "0 auto", borderRadius: "50px" }}
            >
              <Link
                to="/contact"
                className="btn rounded-pill px-5 py-3 fw-bold"
                style={{
                  backgroundColor: "#ffffff",
                  color: "var(--btn-blue)",
                  fontSize: "1.2rem",
                  border: "none",
                  display: "inline-block",
                  boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
                  transition: "all 0.3s ease"
                }}
              >
                Book Your Appointment Now
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;
