import React from 'react';
import { motion } from 'framer-motion';

export const AdminCard = ({ children, title, subtitle, icon, className = "" }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`card border-0 shadow-2xl rounded-5 overflow-hidden ${className}`}
      style={{ 
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.3)'
      }}
    >
      {(title || icon) && (
        <div className="bg-primary p-4 text-center text-white position-relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10" 
               style={{ background: 'radial-gradient(circle at 20% 20%, #ffffff 0%, transparent 50%)' }}></div>
          
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring' }}
            className="position-relative z-1"
          >
            {icon && <i className={`${icon} fs-1 mb-2 d-block`}></i>}
            {title && <h3 className="fw-bold m-0 text-uppercase ls-widest">{title}</h3>}
            {subtitle && <p className="small opacity-75 m-0 mt-1">{subtitle}</p>}
          </motion.div>
        </div>
      )}
      <div className="card-body p-4 p-md-5">
        {children}
      </div>
    </motion.div>
  );
};

export const AdminInput = ({ label, icon, type = "text", name, value, onChange, required = false, placeholder }) => {
  return (
    <div className="mb-4">
      {label && <label className="form-label small fw-black text-uppercase text-muted ls-widest mb-2">{label}</label>}
      <div className="input-group input-group-lg shadow-sm rounded-4 overflow-hidden border">
        <span className="input-group-text bg-white border-0 text-primary">
          <i className={icon}></i>
        </span>
        <input 
          type={type} 
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="form-control bg-white border-0 shadow-none ps-0" 
          required={required}
          style={{ fontSize: '1rem' }}
        />
      </div>
    </div>
  );
};

export const AdminButton = ({ children, loading, type = "submit", onClick, icon, className = "btn-primary" }) => {
  return (
    <motion.button 
      whileHover={{ scale: 1.02, translateY: -2 }}
      whileTap={{ scale: 0.98 }}
      type={type} 
      onClick={onClick}
      disabled={loading}
      className={`btn ${className} w-100 py-3 fw-bold rounded-4 shadow-lg d-flex align-items-center justify-content-center gap-2 border-0`}
      style={{ 
        background: className.includes('btn-primary') ? 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)' : undefined,
        transition: 'all 0.3s ease'
      }}
    >
      {loading ? (
        <span className="spinner-border spinner-border-sm"></span>
      ) : (
        <>
          {icon && <i className={icon}></i>}
          <span>{children}</span>
        </>
      )}
    </motion.button>
  );
};

export const DashboardMetric = ({ title, value, icon, color = "primary", delay = 0 }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay }}
      className="col-md-4"
    >
      <div className="card border-0 shadow-sm rounded-4 h-100">
        <div className="card-body p-4 d-flex align-items-center">
          <div className={`bg-${color} bg-opacity-10 text-${color} p-3 rounded-4 me-3`}>
            <i className={`${icon} fs-3`}></i>
          </div>
          <div>
            <h6 className="text-muted small fw-bold text-uppercase m-0">{title}</h6>
            <h3 className="fw-bold m-0">{value}</h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
