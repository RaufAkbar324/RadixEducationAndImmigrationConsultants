import React from "react";
import { motion } from "framer-motion";

function TestimonialCard({ name, text, role, image }) {
  return (
    <motion.div 
      whileHover={{ 
        y: -15, 
        backgroundColor: "rgba(255, 255, 255, 0.06)",
        boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.5)",
        borderColor: "rgba(255, 255, 255, 0.2)"
      }}
      className="card h-100 border" 
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.03)",
        backdropFilter: "blur(12px)",
        borderRadius: "30px",
        padding: "40px",
        color: "#ffffff",
        borderColor: "rgba(255, 255, 255, 0.1)",
        position: "relative",
        cursor: "pointer",
        transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
      }}
    >
      <div className="card-body p-0">
        <div className="mb-4 d-flex justify-content-between align-items-start">
            <div className="d-flex" style={{ color: "#fbbf24" }}>
                {[...Array(5)].map((_, i) => <i key={i} className="bi bi-star-fill me-1" style={{ fontSize: "0.85rem" }}></i>)}
            </div>
        </div>

        <p className="card-text mb-5" style={{ color: "rgba(255, 255, 255, 0.85)", fontSize: "1.05rem", lineHeight: "1.8", fontWeight: "400" }}>
          {text}
        </p>

        <div className="d-flex align-items-center mt-auto">
            <div className="position-relative me-3">
                <div className="position-absolute top-0 start-0 w-100 h-100 rounded-circle bg-primary opacity-20 blur-sm"></div>
                <img 
                    src={image} 
                    alt={name} 
                    className="rounded-circle position-relative border border-2 border-primary" 
                    style={{ width: "60px", height: "60px", objectFit: "cover" }} 
                />
            </div>
            <div>
                <h5 className="card-title fw-bold mb-0" style={{ fontSize: "1.1rem" }}>{name}</h5>
                <small className="text-primary fw-bold text-uppercase" style={{ fontSize: "0.7rem", letterSpacing: "1.5px" }}>{role}</small>
            </div>
        </div>
      </div>
    </motion.div>
  );
}

export default TestimonialCard;
