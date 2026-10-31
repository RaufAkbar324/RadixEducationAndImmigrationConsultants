import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ─────────────────────────────────────────────
   ANIMATION VARIANTS (shared across components)
───────────────────────────────────────────── */
const fadeInUp = {
  initial: { y: 40, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const slideInLeft = {
  initial: { x: -60, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: 'easeOut' },
};

const slideInRight = {
  initial: { x: 60, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: 'easeOut' },
};

/* ─────────────────────────────────────────────
   SUB-COMPONENT: FormField (text/email/tel inputs)
───────────────────────────────────────────── */
const FormField = ({ col, label, type, icon, placeholder, delay, name, value, onChange, required }) => (
  <motion.div
    className={col}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
  >
    <label
      className="form-label fw-bold small text-uppercase mb-2"
      style={{ letterSpacing: '1.5px', color: '#6b7280', fontSize: '0.72rem' }}
    >
      {label} {required && <span className="text-danger">*</span>}
    </label>
    <motion.div
      className="d-flex align-items-center rounded-4 px-3 gap-2"
      style={{ backgroundColor: '#f8fafc', border: '1.5px solid #e2e8f0' }}
      whileHover={{ boxShadow: '0 4px 16px rgba(37,99,235,0.12)', borderColor: '#93c5fd' }}
      transition={{ duration: 0.2 }}
    >
      <i className={`bi ${icon}`} style={{ color: '#2563eb', fontSize: '0.95rem', flexShrink: 0 }} />
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="form-control border-0 bg-transparent shadow-none py-3"
        placeholder={placeholder}
        style={{ fontSize: '0.95rem' }}
      />
    </motion.div>
  </motion.div>
);

/* ─────────────────────────────────────────────
   SUB-COMPONENT: VisaCategorySelect (custom dropdown)
───────────────────────────────────────────── */
const visaOptions = ['Student Visa', 'Work Permit', 'Visit Visa', 'Language Course'];

const VisaCategorySelect = ({ selected, onChange }) => {
  const [open, setOpen] = useState(false);

  const choose = (opt) => {
    onChange(opt);
    setOpen(false);
  };

  return (
    <motion.div
      className="col-md-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.25, duration: 0.5 }}
    >
      <label
        className="form-label fw-bold small text-uppercase mb-2"
        style={{ letterSpacing: '1.5px', color: '#6b7280', fontSize: '0.72rem' }}
      >
        Visa Category <span className="text-danger">*</span>
      </label>

      {/* Trigger button */}
      <motion.div
        className="d-flex align-items-center justify-content-between rounded-4 px-3 gap-2 position-relative"
        style={{
          backgroundColor: '#f8fafc',
          border: '1.5px solid #e2e8f0',
          cursor: 'pointer',
          minHeight: '52px',
          userSelect: 'none',
        }}
        whileHover={{ boxShadow: '0 4px 16px rgba(37,99,235,0.12)', borderColor: '#93c5fd' }}
        onClick={() => setOpen((v) => !v)}
        transition={{ duration: 0.2 }}
      >
        <div className="d-flex align-items-center gap-2 py-2">
          <i className="bi bi-passport-fill" style={{ color: '#2563eb', fontSize: '0.95rem' }} />
          <span style={{ fontSize: '0.95rem', color: '#374151' }}>{selected}</span>
        </div>
        <motion.i
          className="bi bi-chevron-down"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          style={{ color: '#6b7280', fontSize: '0.85rem', flexShrink: 0 }}
        />

        {/* Dropdown Panel */}
        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, y: -8, scaleY: 0.95 }}
              animate={{ opacity: 1, y: 0, scaleY: 1 }}
              exit={{ opacity: 0, y: -8, scaleY: 0.95 }}
              transition={{ duration: 0.2 }}
              style={{
                position: 'absolute',
                top: 'calc(100% + 6px)',
                left: 0,
                right: 0,
                backgroundColor: '#ffffff',
                border: '1.5px solid #e2e8f0',
                borderRadius: '16px',
                boxShadow: '0 12px 40px rgba(37,99,235,0.12)',
                zIndex: 999,
                listStyle: 'none',
                margin: 0,
                padding: '6px',
                transformOrigin: 'top',
              }}
            >
              {visaOptions.map((opt) => (
                <motion.div
                  key={opt}
                  onClick={(e) => { e.stopPropagation(); choose(opt); }}
                  initial={{ backgroundColor: '#ffffff' }}
                  whileHover={{ backgroundColor: '#eff6ff' }}
                  whileTap={{ backgroundColor: '#dbeafe' }}
                  transition={{ duration: 0.15 }}
                  style={{
                    padding: '10px 14px',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    fontSize: '0.93rem',
                    color: selected === opt ? '#2563eb' : '#374151',
                    fontWeight: selected === opt ? '700' : '400',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    outline: 'none',
                    WebkitTapHighlightColor: 'transparent',
                    userSelect: 'none',
                  }}
                >
                  {selected === opt && (
                    <i className="bi bi-check2" style={{ color: '#2563eb', fontSize: '0.85rem' }} />
                  )}
                  {opt}
                </motion.div>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

/* ─────────────────────────────────────────────
   SUB-COMPONENT: ContactInfoItem
───────────────────────────────────────────── */
const ContactInfoItem = ({ icon, title, text }) => (
  <motion.div whileHover={{ x: 5 }} className="d-flex mb-4" transition={{ duration: 0.2 }}>
    <div
      className="rounded-circle bg-primary bg-opacity-10 p-3 me-3 text-primary shadow-sm flex-shrink-0"
      style={{ width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <i className={`${icon} fs-4`} />
    </div>
    <div>
      <h5 className="fw-bold mb-1" style={{ fontSize: '1rem' }}>{title}</h5>
      <p className="text-muted small mb-0" style={{ lineHeight: '1.6' }}>{text}</p>
    </div>
  </motion.div>
);

/* ─────────────────────────────────────────────
   SUB-COMPONENT: SocialButton
───────────────────────────────────────────── */
const SocialButton = ({ icon, url }) => (
  <motion.a
    whileHover={{ y: -5, scale: 1.1, backgroundColor: '#2563eb', color: 'white' }}
    whileTap={{ scale: 0.9 }}
    href={url || "#"}
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-outline-primary rounded-circle p-0 d-flex align-items-center justify-content-center"
    style={{ width: '45px', height: '45px' }}
    transition={{ duration: 0.2 }}
  >
    <i className={`bi bi-${icon}`} />
  </motion.a>
);

/* ─────────────────────────────────────────────
   SUB-COMPONENT: CountryBadge
───────────────────────────────────────────── */
const CountryBadge = ({ name, idx }) => (
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ delay: idx * 0.1 }}
    whileHover={{ y: -5, color: '#2563eb' }}
    viewport={{ once: true }}
    className="col-md-2 col-6"
  >
    <div className="bg-white p-3 rounded-4 shadow-sm border small fw-bold text-center">{name}</div>
  </motion.div>
);

/* ─────────────────────────────────────────────
   MAIN: Contact Page
───────────────────────────────────────────── */
const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    visaCategory: 'Student Visa',
    message: ''
  });

  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleVisaChange = (val) => {
    setFormData({ ...formData, visaCategory: val });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ loading: false, success: true, error: null });
        setFormData({
          fullName: '',
          email: '',
          phoneNumber: '',
          visaCategory: 'Student Visa',
          message: ''
        });
        setTimeout(() => setStatus(s => ({ ...s, success: false })), 5000);
      } else {
        setStatus({ loading: false, success: false, error: data.error || 'Something went wrong' });
      }
    } catch (error) {
      setStatus({ loading: false, success: false, error: 'Cannot connect to server' });
    }
  };

  const contactInfoItems = [
    { icon: 'bi-geo-alt-fill', title: 'Our Location', text: 'Malikabad Plaza, 4th Floor, Office S4 Rawalpindi, Pakistan' },
    { icon: 'bi-telephone-fill', title: 'Phone & WhatsApp', text: '+92 300 1234567 | +92 321 7654321' },
    { icon: 'bi-envelope-fill', title: 'Email Us', text: 'info@radixconsultants.com | support@radixconsultants.com' },
  ];

  const countries = ['United Kingdom', 'Canada', 'Germany', 'Australia', 'USA', 'Italy'];
  const socials = [
    { icon: 'facebook', url: 'https://www.facebook.com/profile.php?id=61566409911216' },
    { icon: 'instagram', url: 'https://www.instagram.com/radixedu.consultants/' },
    { icon: 'linkedin', url: '#' },
    { icon: 'twitter-x', url: '#' }
  ];

  return (
    <div className="contact-page overflow-hidden">

      {/* ── HERO SECTION ── */}
      <section className="hero-section position-relative overflow-hidden">
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: 'easeOut' }}
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920"
          className="d-block w-100 h-100 object-fit-cover position-absolute top-0 start-0"
          alt="Contact Radix"
          style={{ zIndex: 0 }}
        />

        <div
          className="hero-overlay"
          style={{ zIndex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}
        >
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="fw-bold text-uppercase mb-3"
            style={{ color: '#2563eb', letterSpacing: '5px', fontSize: '0.85rem' }}
          >
            Contact Radix
          </motion.p>

          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="hero-title"
          >
            Connect With Our <br />
            <span className="text-primary">Global Expert Team</span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="hero-subtitle"
            style={{ maxWidth: '680px' }}
          >
            Have questions about your global future? Our team is here to provide the expert
            answers you need to turn your international dreams into reality.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="d-flex flex-wrap gap-3"
          >
            <motion.a
              href="#contact-form"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="btn btn-lg rounded-pill fw-bold d-flex align-items-center gap-2 position-relative overflow-hidden"
              style={{ backgroundColor: '#2563eb', border: 'none', color: '#fff', padding: '14px 40px' }}
            >
              <i className="bi bi-chat-dots-fill" />
              Send Message
            </motion.a>

            <motion.a
              href="tel:+923001234567"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="btn btn-outline-light btn-lg rounded-pill fw-bold d-flex align-items-center gap-2"
              style={{ padding: '14px 40px' }}
            >
              <i className="bi bi-telephone-fill" />
              Call Us Now
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT CONTENT ── */}
      <section className="py-5 bg-white">
        <div className="container py-5">
          <div className="row g-5">

            {/* ── Contact Form Card ── */}
            <motion.div
              id="contact-form"
              {...slideInLeft}
              className="col-lg-7"
            >
              <div
                className="rounded-5 overflow-hidden"
                style={{ boxShadow: '0 25px 60px rgba(0,0,0,0.1)', border: '1px solid rgba(0,0,0,0.06)' }}
              >
                <div
                  className="px-5 py-4 d-flex align-items-center gap-3"
                  style={{ backgroundColor: '#2563eb' }}
                >
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{ width: '48px', height: '48px', backgroundColor: 'rgba(255,255,255,0.18)' }}
                  >
                    <i className="bi bi-envelope-fill text-white fs-5" />
                  </div>
                  <div>
                    <div className="text-white fw-black" style={{ fontSize: '1.25rem', letterSpacing: '-0.5px' }}>
                      Send Us a Message
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem' }}>
                      We'll get back to you within 24 hours
                    </div>
                  </div>
                </div>

                <div className="bg-white px-5 py-5">
                  <form className="row g-4" onSubmit={handleSubmit}>
                    
                    <FormField 
                      col="col-md-6" 
                      label="Full Name" 
                      type="text" 
                      icon="bi-person-fill" 
                      placeholder="John Doe" 
                      delay={0.1}
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />

                    <FormField 
                      col="col-md-6" 
                      label="Email Address" 
                      type="email" 
                      icon="bi-envelope-fill" 
                      placeholder="john@example.com" 
                      delay={0.15}
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />

                    <FormField 
                      col="col-md-12" 
                      label="Phone Number" 
                      type="tel" 
                      icon="bi-telephone-fill" 
                      placeholder="+92 300 1234567" 
                      delay={0.2}
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                    />

                    <VisaCategorySelect 
                      selected={formData.visaCategory}
                      onChange={handleVisaChange}
                    />

                    {/* Message Textarea */}
                    <motion.div
                      className="col-md-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <label
                        className="form-label fw-bold small text-uppercase mb-2"
                        style={{ letterSpacing: '1.5px', color: '#6b7280', fontSize: '0.72rem' }}
                      >
                        Your Message <span className="text-danger">*</span>
                      </label>
                      <motion.div
                        className="rounded-4 px-3 pt-3 pb-1"
                        style={{ backgroundColor: '#f8fafc', border: '1.5px solid #e2e8f0' }}
                        whileHover={{ boxShadow: '0 4px 16px rgba(37,99,235,0.12)', borderColor: '#93c5fd' }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="d-flex gap-2">
                          <i className="bi bi-chat-left-text-fill mt-1" style={{ color: '#2563eb', fontSize: '0.95rem', flexShrink: 0 }} />
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="form-control border-0 bg-transparent shadow-none p-0"
                            rows="4"
                            placeholder="Tell us about your goals..."
                            style={{ fontSize: '0.95rem', resize: 'none' }}
                          />
                        </div>
                      </motion.div>
                    </motion.div>

                    {/* Status Messages */}
                    <AnimatePresence>
                      {status.success && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="col-12"
                        >
                          <div className="alert alert-success rounded-4 d-flex align-items-center gap-2 border-0 shadow-sm" style={{ backgroundColor: '#ecfdf5', color: '#065f46' }}>
                            <i className="bi bi-check-circle-fill" />
                            Message sent successfully! We will contact you soon.
                          </div>
                        </motion.div>
                      )}
                      {status.error && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="col-12"
                        >
                          <div className="alert alert-danger rounded-4 d-flex align-items-center gap-2 border-0 shadow-sm" style={{ backgroundColor: '#fef2f2', color: '#991b1b' }}>
                            <i className="bi bi-exclamation-triangle-fill" />
                            {status.error}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Submit Button */}
                    <motion.div
                      className="col-12 mt-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.38, duration: 0.5 }}
                    >
                      <motion.button
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={status.loading}
                        type="submit"
                        className="btn btn-lg rounded-pill fw-bold w-100 position-relative overflow-hidden d-flex align-items-center justify-content-center gap-2"
                        style={{
                          backgroundColor: '#2563eb',
                          border: 'none',
                          color: '#fff',
                          padding: '15px 0',
                          fontSize: '1rem',
                          opacity: status.loading ? 0.7 : 1
                        }}
                      >
                        {status.loading ? (
                          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        ) : (
                          <>
                            <i className="bi bi-send-fill" />
                            Send Message Now
                          </>
                        )}
                      </motion.button>
                    </motion.div>

                  </form>
                </div>
              </div>
            </motion.div>

            {/* ── Contact Info + Map ── */}
            <motion.div
              {...slideInRight}
              className="col-lg-5 ps-lg-5"
            >
              <motion.div {...fadeInUp} className="mb-5">
                <h3 className="fw-bold mb-4">Contact Information</h3>
                {contactInfoItems.map((item, i) => (
                  <ContactInfoItem key={i} {...item} />
                ))}
              </motion.div>

              <motion.div
                {...fadeInUp}
                whileHover={{ scale: 1.01 }}
                className="rounded-4 overflow-hidden shadow-sm border"
                style={{ height: '300px' }}
                transition={{ duration: 0.3 }}
              >
                <iframe
                  title="Radix Location"
                  src="https://maps.google.com/maps?q=33.6583566,73.0852146&z=16&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>

              <motion.div {...fadeInUp} className="mt-5 pt-2">
                <h5 className="fw-bold mb-3">Connect With Us Online</h5>
                <div className="d-flex gap-3">
                  {socials.map((s, i) => <SocialButton key={i} icon={s.icon} url={s.url} />)}
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Global Destination Reach ── */}
      <section className="py-5" style={{ backgroundColor: 'var(--bg-grey)' }}>
        <div className="container py-5 text-center">
          <motion.h2 {...fadeInUp} className="fw-bold mb-5">
            Our Global Destination Reach
          </motion.h2>
          <div className="row g-4 mt-2 justify-content-center">
            {countries.map((c, idx) => (
              <CountryBadge key={idx} name={c} idx={idx} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
