import React from "react";
import { motion } from "framer-motion";

function InfoCard({ title, text, icon = "bi-check2-circle", image }) {
  return (
    <motion.div 
      whileHover="hover"
      initial="initial"
      className="h-100 position-relative"
    >
      <motion.div 
        variants={{
          hover: { y: -15 }
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="h-100 overflow-hidden shadow-sm" 
        style={{
          backgroundColor: "#e2e8f0", // Explicitly setting the grey
          borderRadius: "30px",
          border: "none", // Removed border to fix white ends
          cursor: "pointer"
        }}
      >
        {image && (
          <div style={{ height: "240px", overflow: "hidden" }}>
            <motion.img 
              variants={{
                hover: { scale: 1.15 }
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              src={image} 
              alt={title} 
              className="w-100 h-100 object-fit-cover" 
            />
          </div>
        )}
        <div className="text-start p-4 pt-4 d-flex flex-column h-100">
          <div className="d-flex align-items-center mb-3">
            <div className="position-relative me-3 d-flex align-items-center justify-content-center" style={{ width: "24px", height: "24px" }}>
                <motion.div 
                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="position-absolute rounded-circle" 
                    style={{ width: "100%", height: "100%", backgroundColor: "var(--btn-blue)" }}
                ></motion.div>
                <div className="rounded-circle position-relative shadow-lg" style={{ width: "10px", height: "10px", backgroundColor: "var(--btn-blue)", border: "2px solid white" }}></div>
            </div>
            <h4 className="fw-bold mb-0" style={{ color: "var(--text-dark)", fontSize: "1.25rem" }}>{title}</h4>
          </div>
          
          <p className="text-muted mb-4" style={{ fontSize: "0.95rem", lineHeight: "1.7", minHeight: "80px" }}>{text}</p>
          
          <div className="mt-auto pb-2">
            <motion.div 
                className="d-flex align-items-center text-primary fw-bold"
                style={{ fontSize: "0.9rem" }}
            >
                <span className="me-2">Learn More</span>
                <motion.i 
                    variants={{
                        initial: { x: 0 },
                        hover: { x: 5 }
                    }}
                    className="bi bi-arrow-right"
                ></motion.i>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default InfoCard;
