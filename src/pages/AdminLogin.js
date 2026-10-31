import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

/* ─── Reusable sub-components ─────────────────────────────────────────────── */

const FloatingOrb = ({ style, duration, delay = 0 }) => (
  <motion.div
    aria-hidden="true"
    style={{ position: 'absolute', borderRadius: '50%', filter: 'blur(80px)', ...style }}
    animate={{ scale: [1, 1.25, 1], opacity: [0.55, 0.8, 0.55] }}
    transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
  />
);

const InputField = ({ label, icon, type = 'text', name, value, onChange, placeholder }) => (
  <motion.div
    variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
    style={{ marginBottom: '1.25rem' }}
  >
    <label style={{
      display: 'block',
      fontSize: '0.7rem',
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.55)',
      marginBottom: '0.5rem',
    }}>
      {label}
    </label>
    <div style={{ position: 'relative' }}>
      <span style={{
        position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)',
        color: 'rgba(255,255,255,0.4)', fontSize: '1rem', zIndex: 1,
      }}>
        <i className={icon} />
      </span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        style={{
          width: '100%',
          padding: '0.85rem 1rem 0.85rem 2.8rem',
          background: 'rgba(255,255,255,0.07)',
          border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: '12px',
          color: '#fff',
          fontSize: '0.95rem',
          outline: 'none',
          transition: 'border-color 0.25s, background 0.25s',
          boxSizing: 'border-box',
        }}
        onFocus={e => {
          e.target.style.borderColor = 'rgba(99,179,237,0.7)';
          e.target.style.background = 'rgba(255,255,255,0.12)';
        }}
        onBlur={e => {
          e.target.style.borderColor = 'rgba(255,255,255,0.12)';
          e.target.style.background = 'rgba(255,255,255,0.07)';
        }}
      />
    </div>
  </motion.div>
);

/* ─── Main Component ───────────────────────────────────────────────────────── */

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const AdminLogin = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('http://localhost:5000/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem('adminToken', data.token);
        navigate('/admin/dashboard');
      } else {
        setError(data.error || 'Invalid credentials. Please try again.');
      }
    } catch {
      setError('Cannot connect to server. Check your connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #0a0f1e 0%, #0f172a 50%, #0d1b3e 100%)',
      fontFamily: "'Inter', 'Segoe UI', sans-serif",
    }}>

      {/* ── Animated background orbs ── */}
      <FloatingOrb duration={8}  style={{ width: 420, height: 420, top: '-12%',  left: '-8%',  background: 'radial-gradient(circle, #2563eb 0%, transparent 70%)' }} />
      <FloatingOrb duration={11} delay={2} style={{ width: 350, height: 350, bottom: '-10%', right: '-6%',  background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }} />
      <FloatingOrb duration={9}  delay={4} style={{ width: 260, height: 260, top: '55%',     left: '60%',  background: 'radial-gradient(circle, #1d4ed8 0%, transparent 70%)' }} />

      {/* ── Subtle grid overlay ── */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '44px 44px',
        pointerEvents: 'none',
      }} />

      {/* ── Glass card ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.88, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: 460,
          margin: '0 1rem',
          background: 'rgba(255,255,255,0.06)',
          backdropFilter: 'blur(28px)',
          WebkitBackdropFilter: 'blur(28px)',
          border: '1px solid rgba(255,255,255,0.13)',
          borderRadius: '28px',
          padding: '2.8rem 2.5rem 2.2rem',
          boxShadow: '0 30px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.15)',
        }}
      >
        {/* ── Card inner accent line ── */}
        <div style={{
          position: 'absolute', top: 0, left: '15%', right: '15%', height: '2px',
          background: 'linear-gradient(90deg, transparent, #3b82f6, transparent)',
          borderRadius: '100px',
        }} />

        {/* ── Header ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ textAlign: 'center', marginBottom: '2rem' }}
        >
          <motion.div variants={itemVariants}>
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 68, height: 68,
                borderRadius: '20px',
                background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
                boxShadow: '0 8px 32px rgba(37,99,235,0.5)',
                marginBottom: '1.2rem',
                fontSize: '1.8rem',
                color: '#fff',
              }}
            >
              <i className="bi bi-shield-lock-fill" />
            </motion.div>
          </motion.div>

          <motion.h1 variants={itemVariants} style={{
            fontSize: '1.6rem', fontWeight: 800, color: '#fff',
            letterSpacing: '0.04em', margin: '0 0 0.3rem',
          }}>
            Admin Portal
          </motion.h1>
          <motion.p variants={itemVariants} style={{
            fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)',
            margin: 0, letterSpacing: '0.02em',
          }}>
            Secure · Authorized Access Only
          </motion.p>
        </motion.div>

        {/* ── Divider ── */}
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', marginBottom: '1.8rem' }} />

        {/* ── Form ── */}
        <motion.form
          onSubmit={handleSubmit}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <InputField
            label="Username"
            icon="bi bi-person"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter admin username"
          />
          <InputField
            label="Password"
            icon="bi bi-key"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter secure password"
          />

          {/* Error message */}
          <AnimatePresence>
            {error && (
              <motion.div
                key="error"
                initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                animate={{ opacity: 1, height: 'auto', marginBottom: '1rem' }}
                exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: 'rgba(239,68,68,0.15)',
                  border: '1px solid rgba(239,68,68,0.35)',
                  borderRadius: '10px',
                  padding: '0.7rem 1rem',
                  fontSize: '0.83rem',
                  color: '#fca5a5',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <i className="bi bi-exclamation-circle-fill" />
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Submit button */}
          <motion.div variants={itemVariants}>
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={!loading ? { scale: 1.02, translateY: -2 } : {}}
              whileTap={!loading ? { scale: 0.97 } : {}}
              style={{
                width: '100%',
                padding: '0.9rem',
                marginTop: '0.4rem',
                border: 'none',
                borderRadius: '14px',
                background: loading
                  ? 'rgba(37,99,235,0.5)'
                  : 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
                color: '#fff',
                fontSize: '0.95rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                cursor: loading ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.6rem',
                boxShadow: loading ? 'none' : '0 8px 24px rgba(37,99,235,0.45)',
                transition: 'background 0.3s, box-shadow 0.3s',
              }}
            >
              {loading ? (
                <>
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                    style={{ display: 'inline-block', width: 18, height: 18,
                      border: '2px solid rgba(255,255,255,0.3)',
                      borderTopColor: '#fff', borderRadius: '50%' }}
                  />
                  Authenticating…
                </>
              ) : (
                <>
                  <i className="bi bi-box-arrow-in-right" />
                  Sign In to Dashboard
                </>
              )}
            </motion.button>
          </motion.div>
        </motion.form>

        {/* ── Footer note ── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          style={{
            textAlign: 'center', marginTop: '1.6rem', marginBottom: 0,
            fontSize: '0.75rem', color: 'rgba(255,255,255,0.25)',
            lineHeight: 1.7,
          }}
        >
          🔒 All login attempts are monitored and logged
        </motion.p>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
