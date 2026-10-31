import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// ─── Data ───────────────────────────────────────────────────────────────────

const PROGRAMS = [
  {
    category: 'Visa & Immigration',
    icon: 'bi-passport',
    color: '#2563eb',
    items: [
      {
        title: 'Student Visa Program',
        duration: '4 – 6 Weeks',
        level: 'All Levels',
        icon: 'bi-mortarboard',
        desc: 'End-to-end guidance for securing study permits in top destinations like UK, Canada, Australia, and Germany.',
        features: ['Profile Evaluation', 'Document Preparation', 'Interview Coaching', 'Embassy Filing'],
      },
      {
        title: 'Work Permit Program',
        duration: '3 – 5 Weeks',
        level: 'Professional',
        icon: 'bi-briefcase',
        desc: 'Expert assistance for skilled-worker permits, employer-sponsored visas, and global job-seeker pathways.',
        features: ['Skill Assessment', 'Job Market Analysis', 'Permit Application', 'Relocation Support'],
      },
      {
        title: 'Visit & Tourist Visa',
        duration: '1 – 2 Weeks',
        level: 'Beginner',
        icon: 'bi-airplane-engines',
        desc: 'Hassle-free processing for short-stay and multiple-entry tourist visas with a 98 % success track record.',
        features: ['Itinerary Planning', 'Financial Proof Review', 'Appointment Booking', 'Embassy Liaison'],
      },
    ],
  },
  {
    category: 'Language Training',
    icon: 'bi-translate',
    color: '#7c3aed',
    items: [
      {
        title: 'IELTS Preparation',
        duration: '8 Weeks',
        level: 'Intermediate – Advanced',
        icon: 'bi-headphones',
        desc: 'Intensive coaching across all four modules — Listening, Reading, Writing, and Speaking — targeting Band 7+.',
        features: ['Mock Tests', 'Expert Feedback', 'Band Prediction', 'Exam Registration'],
      },
      {
        title: 'German Language (A1 – B2)',
        duration: '12 Weeks',
        level: 'Beginner – Upper-Intermediate',
        icon: 'bi-globe-europe-africa',
        desc: 'Structured German courses aligned with CEFR, essential for work and study opportunities across Europe.',
        features: ['Native Instructors', 'Grammar Mastery', 'Speaking Practice', 'GOETHE Prep'],
      },
      {
        title: 'French / Spanish / Korean',
        duration: '10 – 16 Weeks',
        level: 'All Levels',
        icon: 'bi-chat-text',
        desc: 'Multilingual programmes covering French (DELF), Spanish, Italian, and Korean (TOPIK) with cultural immersion.',
        features: ['Flexible Scheduling', 'Group & 1-on-1', 'Certification Prep', 'Cultural Modules'],
      },
    ],
  },
  {
    category: 'E-Commerce & Digital',
    icon: 'bi-shop',
    color: '#059669',
    items: [
      {
        title: 'Amazon FBA Mastery',
        duration: '6 Weeks',
        level: 'Beginner – Pro',
        icon: 'bi-box-seam',
        desc: 'Build a profitable Amazon business from scratch — product hunting, supplier sourcing, and PPC management.',
        features: ['Product Research', 'Supplier Sourcing', 'Listing Optimization', 'PPC Campaigns'],
      },
      {
        title: 'Shopify Dropshipping',
        duration: '5 Weeks',
        level: 'Intermediate',
        icon: 'bi-cart-check',
        desc: 'Create high-converting Shopify stores and drive targeted traffic through Facebook & TikTok Ads strategies.',
        features: ['Store Design', 'Winning Products', 'FB / TikTok Ads', 'Scaling Blueprint'],
      },
      {
        title: 'Digital Marketing Pro',
        duration: '8 Weeks',
        level: 'Advanced',
        icon: 'bi-graph-up-arrow',
        desc: 'Become a full-stack digital marketer — SEO, Social Media, Email Marketing, and Google Analytics 4.',
        features: ['Advanced SEO', 'Content Strategy', 'Email Funnels', 'Analytics & Reporting'],
      },
    ],
  },
];

const STATS = [
  { value: '5,000+', label: 'Graduates', icon: 'bi-people-fill' },
  { value: '98%', label: 'Success Rate', icon: 'bi-shield-check' },
  { value: '20+', label: 'Programs', icon: 'bi-journal-bookmark-fill' },
  { value: '15+', label: 'Countries', icon: 'bi-globe2' },
];

// ─── Animation Variants ──────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

// ─── Sub-components ──────────────────────────────────────────────────────────

const ProgramCard = ({ prog, accent }) => (
  <motion.div
    variants={fadeUp}
    whileHover={{ y: -10, boxShadow: `0 30px 60px ${accent}25` }}
    className="col-lg-4 col-md-6"
  >
    <div
      className="h-100 rounded-5 overflow-hidden position-relative"
      style={{
        background: '#ffffff',
        border: `1px solid ${accent}20`,
        boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
        cursor: 'pointer',
        transition: 'all 0.4s ease',
      }}
    >
      {/* Top accent bar */}
      <div style={{ height: '5px', background: accent }} />

      <div className="p-5">
        {/* Icon + badge */}
        <div className="d-flex justify-content-between align-items-start mb-4">
          <div
            className="rounded-4 d-inline-flex align-items-center justify-content-center shadow-sm"
            style={{ width: 68, height: 68, backgroundColor: `${accent}15`, color: accent }}
          >
            <i className={`bi ${prog.icon} fs-2`} />
          </div>
          <span
            className="badge rounded-pill px-3 py-2 small fw-bold text-uppercase"
            style={{ backgroundColor: `${accent}12`, color: accent, border: `1px solid ${accent}30`, letterSpacing: '0.8px' }}
          >
            {prog.level}
          </span>
        </div>

        <h4 className="fw-black text-dark mb-2" style={{ fontSize: '1.4rem', lineHeight: 1.25 }}>
          {prog.title}
        </h4>
        <div className="d-flex align-items-center gap-2 mb-3">
          <i className="bi bi-clock text-muted small" />
          <span className="text-muted small fw-bold">{prog.duration}</span>
        </div>
        <p className="text-muted mb-4 lh-lg" style={{ fontSize: '0.95rem' }}>
          {prog.desc}
        </p>

        {/* Feature list */}
        <div className="d-flex flex-column gap-2 mb-5">
          {prog.features.map((f, i) => (
            <div key={i} className="d-flex align-items-center gap-3">
              <div
                className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                style={{ width: 24, height: 24, backgroundColor: `${accent}18` }}
              >
                <i className="bi bi-check-lg" style={{ color: accent, fontSize: '0.85rem' }} />
              </div>
              <span className="text-dark fw-semibold" style={{ fontSize: '0.9rem' }}>{f}</span>
            </div>
          ))}
        </div>

        <Link
          to="/contact"
          className="d-flex align-items-center gap-2 fw-black text-decoration-none"
          style={{ color: accent, fontSize: '0.95rem' }}
        >
          Enroll Now <i className="bi bi-arrow-right fs-5" />
        </Link>
      </div>
    </div>
  </motion.div>
);

const CategorySection = ({ cat, index }) => (
  <section
    className="py-5"
    style={{ backgroundColor: index % 2 === 0 ? '#f8fafc' : '#ffffff' }}
  >
    <div className="container py-5">
      {/* Section header */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-5 pb-2"
      >
        <motion.div variants={fadeUp}>
          <div
            className="d-inline-flex align-items-center gap-2 px-4 py-2 rounded-pill mb-4 fw-bold small text-uppercase"
            style={{ backgroundColor: `${cat.color}15`, color: cat.color, border: `1px solid ${cat.color}30`, letterSpacing: '1.5px' }}
          >
            <i className={`bi ${cat.icon}`} /> {cat.category}
          </div>
          <h2 className="display-5 fw-black text-dark mb-3">{cat.category} Programs</h2>
          <p className="text-muted lead mx-auto" style={{ maxWidth: 600 }}>
            Explore our curated {cat.category.toLowerCase()} programmes designed to deliver
            measurable results and unlock global opportunities.
          </p>
        </motion.div>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="row g-4"
      >
        {cat.items.map((prog, i) => (
          <ProgramCard key={i} prog={prog} accent={cat.color} />
        ))}
      </motion.div>
    </div>
  </section>
);

// ─── Programs Hero with Sliding Images ──────────────────────────────────────

const HERO_SLIDES = [
  'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1920',
];

const ProgramsHero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="position-relative overflow-hidden"
      style={{ height: '100vh', minHeight: '700px' }}
    >
      {/* Sliding background images */}
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark">
        {HERO_SLIDES.map((src, idx) => (
          <motion.img
            key={idx}
            src={src}
            alt={`Programs Banner ${idx + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: idx === current ? 1 : 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{ objectFit: 'cover' }}
          />
        ))}
        {/* Dark gradient overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.75) 60%, rgba(0,0,0,0.88) 100%)',
            zIndex: 1,
          }}
        />
      </div>

      {/* Slide indicator dots */}
      <div
        className="position-absolute d-flex gap-2"
        style={{ bottom: '100px', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}
      >
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            style={{
              width: idx === current ? '32px' : '10px',
              height: '10px',
              borderRadius: '5px',
              backgroundColor: idx === current ? '#2563eb' : 'rgba(255,255,255,0.5)',
              border: 'none',
              padding: 0,
              transition: 'all 0.4s ease',
              cursor: 'pointer',
            }}
          />
        ))}
      </div>

      {/* Text content — centered over the images */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center text-center"
        style={{ zIndex: 2, pointerEvents: 'none' }}
      >
        <div className="container mt-5" style={{ pointerEvents: 'auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <span
              className="d-inline-block px-4 py-2 rounded-pill mb-4 fw-bold small text-uppercase"
              style={{
                background: 'rgba(37,99,235,0.25)',
                color: '#93c5fd',
                border: '1px solid rgba(37,99,235,0.45)',
                letterSpacing: '2px',
                backdropFilter: 'blur(6px)',
              }}
            >
              ✦ &nbsp;Our Programs
            </span>

            <h1
              className="display-1 fw-black text-white mb-4"
              style={{ lineHeight: 1.08, textShadow: '0 4px 40px rgba(0,0,0,0.6)' }}
            >
              Programs Designed <br />
              <span
                style={{
                  background: 'linear-gradient(90deg, #60a5fa, #a78bfa)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                for Global Success
              </span>
            </h1>

            <p
              className="lead text-white-50 mx-auto mb-5"
              style={{ maxWidth: 620, fontSize: '1.2rem', lineHeight: 1.8 }}
            >
              From visa consultancy to language training and e-commerce courses — choose a
              programme that transforms your ambitions into achievements.
            </p>

            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <Link
                to="/contact"
                className="btn btn-primary btn-lg rounded-pill px-5 py-3 fw-bold shadow-lg"
                style={{ backgroundColor: '#2563eb', border: 'none' }}
              >
                Get Free Consultation <i className="bi bi-arrow-right ms-2" />
              </Link>
              <a
                href="#programs-list"
                className="btn btn-outline-light btn-lg rounded-pill px-5 py-3 fw-bold"
              >
                Explore Programs
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="position-absolute bottom-0 start-0 w-100" style={{ lineHeight: 0, zIndex: 3 }}>
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#f8fafc" />
        </svg>
      </div>
    </section>
  );
};

// ─── Main Component ──────────────────────────────────────────────────────────

const Programs = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', ...PROGRAMS.map((p) => p.category)];

  const filtered =
    activeFilter === 'All'
      ? PROGRAMS
      : PROGRAMS.filter((p) => p.category === activeFilter);

  return (
    <div className="programs-page overflow-hidden">

      {/* ── Hero ── */}
      <ProgramsHero />

      {/* ── Stats ── */}
      <section className="py-5" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container py-4">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="row g-4 text-center"
          >
            {STATS.map((s, i) => (
              <motion.div key={i} variants={fadeUp} className="col-6 col-md-3">
                <motion.div
                  whileHover={{ y: -6 }}
                  className="p-4 rounded-4 bg-white shadow-sm"
                  style={{ border: '1px solid #e2e8f0', cursor: 'pointer' }}
                >
                  <i className={`bi ${s.icon} fs-2 text-primary mb-3 d-block`} />
                  <h3 className="fw-black text-dark mb-1" style={{ fontSize: '2rem' }}>{s.value}</h3>
                  <p className="text-muted mb-0 fw-semibold small text-uppercase" style={{ letterSpacing: '1px' }}>{s.label}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Filter Tabs ── */}
      <section id="programs-list" className="py-4" style={{ backgroundColor: '#ffffff' }}>
        <div className="container text-center">
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className="btn rounded-pill px-4 py-2 fw-bold"
                style={{
                  backgroundColor: activeFilter === cat ? '#2563eb' : 'transparent',
                  color: activeFilter === cat ? '#fff' : '#64748b',
                  border: `2px solid ${activeFilter === cat ? '#2563eb' : '#e2e8f0'}`,
                  transition: 'all 0.25s ease',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Program Sections ── */}
      {filtered.map((cat, i) => (
        <CategorySection key={cat.category} cat={cat} index={i} />
      ))}

      {/* ── CTA Banner ── */}
      <section
        className="py-5 text-center text-white position-relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1e40af 0%, #7c3aed 100%)', paddingTop: '100px', paddingBottom: '100px' }}
      >
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="position-absolute rounded-circle"
          style={{ width: 600, height: 600, background: 'rgba(255,255,255,0.1)', top: '-200px', left: '-150px', pointerEvents: 'none' }}
        />
        <div className="container position-relative" style={{ zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="display-4 fw-black mb-4">Ready to Transform Your Future?</h2>
            <p className="lead text-white-50 mx-auto mb-5" style={{ maxWidth: 550 }}>
              Book a free consultation with our experts and find the programme that's right for you.
            </p>
            <Link
              to="/contact"
              className="btn btn-light btn-lg rounded-pill px-5 py-3 fw-black shadow-lg"
              style={{ color: '#1e40af' }}
            >
              Book a Free Consultation <i className="bi bi-calendar-check ms-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
