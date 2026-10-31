import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { DashboardMetric, AdminButton } from '../components/AdminComponents';

const AdminDashboard = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      if (data.success) {
        setMessages(data.data);
      } else {
        setError(data.error || 'Failed to fetch messages');
        if (response.status === 401) navigate('/admin');
      }
    } catch (err) {
      setError('Cannot connect to server');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin');
  };

  return (
    <div className="bg-light min-vh-100 py-5 mt-5">
      <div className="container">
        {/* Header Section */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-5 gap-4">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="fw-black text-uppercase ls-widest m-0"
            >
              Inquiry <span className="text-primary">Dashboard</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted m-0"
            >
              Manage and respond to client messages in real-time
            </motion.p>
          </div>
          <div style={{ width: '150px' }}>
            <AdminButton 
              onClick={handleLogout} 
              className="btn-outline-danger" 
              icon="bi bi-box-arrow-right"
            >
              Logout
            </AdminButton>
          </div>
        </div>

        {/* Metrics Section */}
        {!loading && !error && (
          <div className="row g-4 mb-5">
            <DashboardMetric 
              title="Total Inquiries" 
              value={messages.length} 
              icon="bi bi-envelope-paper" 
              color="primary"
              delay={0.2}
            />
            <DashboardMetric 
              title="Recent Today" 
              value={messages.filter(m => new Date(m.createdAt).toDateString() === new Date().toDateString()).length} 
              icon="bi bi-clock-history" 
              color="success"
              delay={0.3}
            />
            <DashboardMetric 
              title="Average Per Week" 
              value={(messages.length / 4).toFixed(1)} 
              icon="bi bi-graph-up-arrow" 
              color="info"
              delay={0.4}
            />
          </div>
        )}

        {/* Messages Section */}
        {loading ? (
          <div className="text-center py-5">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="spinner-border text-primary" 
              role="status"
            ></motion.div>
            <p className="mt-3 text-muted fw-bold text-uppercase ls-widest small">Synchronizing Messages...</p>
          </div>
        ) : error ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="alert alert-danger shadow-sm rounded-4 border-0 p-4"
          >
            <i className="bi bi-exclamation-triangle-fill me-2"></i> {error}
          </motion.div>
        ) : messages.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-5 bg-white rounded-5 shadow-sm"
          >
            <i className="bi bi-inbox fs-1 text-muted opacity-25"></i>
            <p className="mt-3 text-muted fw-bold">NO MESSAGES FOUND</p>
          </motion.div>
        ) : (
          <div className="row g-4">
            <AnimatePresence>
              {messages.map((msg, idx) => (
                <motion.div 
                  key={msg._id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: idx * 0.05 }}
                  className="col-12"
                >
                  <div className="card border-0 shadow-sm rounded-5 overflow-hidden message-card h-100">
                    <div className="card-body p-4">
                      <div className="row align-items-center g-3">
                        <div className="col-md-3">
                          <div className="d-flex align-items-center">
                            <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '45px', height: '45px', fontSize: '1.2rem' }}>
                              {msg.fullName.charAt(0).toUpperCase()}
                            </div>
                            <div>
                              <h6 className="fw-bold m-0">{msg.fullName}</h6>
                              <p className="small text-muted m-0">{msg.email}</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <span className="badge rounded-pill bg-primary bg-opacity-10 text-primary px-3 py-2 border border-primary border-opacity-10 w-100">
                            <i className="bi bi-tag-fill me-1 small"></i> {msg.visaCategory}
                          </span>
                        </div>
                        <div className="col-md-5">
                          <div className="bg-light p-3 rounded-4">
                            <p className="mb-0 text-dark small" style={{ lineHeight: '1.5' }}>
                              <i className="bi bi-quote text-primary opacity-25 me-1"></i>
                              {msg.message}
                            </p>
                          </div>
                        </div>
                        <div className="col-md-2 text-md-end text-center">
                          <p className="small text-muted fw-bold mb-1">
                            <i className="bi bi-calendar3 me-2"></i>
                            {new Date(msg.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                          </p>
                          <p className="small text-primary m-0">
                            <i className="bi bi-telephone-fill me-2"></i>
                            {msg.phoneNumber}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
      
      <style jsx>{`
        .message-card {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
          border: 1px solid transparent !important;
        }
        .message-card:hover {
          transform: translateY(-5px) scale(1.01);
          box-shadow: 0 15px 30px rgba(0,0,0,0.08) !important;
          border-color: rgba(37, 99, 235, 0.1) !important;
        }
        .fw-black { font-weight: 900; }
        .ls-widest { letter-spacing: 0.1em; }
      `}</style>
    </div>
  );
};

export default AdminDashboard;
