import React from "react";
import { motion } from "framer-motion";

function CardItem({ title, description, link, text, image }) {
  return (
    <motion.div 
      whileHover={{ 
        y: -15, 
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="card h-100 border-0 shadow-sm" 
      style={{
        width: "100%", 
        maxWidth: "380px",
        backgroundColor: "#ffffff", 
        borderRadius: "30px",
        overflow: "hidden",
        margin: "0 auto",
        cursor: "pointer",
        isolation: "isolate"
      }}
    >
      <div className="position-relative overflow-hidden" style={{ height: "220px", borderTopLeftRadius: "30px", borderTopRightRadius: "30px" }}>
        <motion.img 
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src={image} 
            className="w-100 h-100 object-fit-cover" 
            style={{ borderTopLeftRadius: "30px", borderTopRightRadius: "30px" }}
            alt={title} 
        />
        {/* Removed Dot Indicator */}
      </div>
      <div className="card-body d-flex flex-column p-4 text-center">
        <h4 className="card-title fw-bold mb-3" style={{ color: "#0f172a", fontSize: "1.35rem" }}>{title}</h4>
        <p className="card-text flex-grow-1 mb-4" style={{ color: "#64748b", fontSize: "0.95rem", lineHeight: "1.7" }}>{description}</p>
        <motion.a 
          whileHover="btnHover"
          whileTap={{ scale: 0.95 }}
          href={link} 
          className="btn btn-primary rounded-pill py-2 px-4 fw-bold shadow-sm mx-auto d-flex align-items-center" 
          style={{
            backgroundColor: "var(--btn-blue)",
            border: "none",
            fontSize: "0.9rem",
            width: "fit-content"
          }}
        >
          <span>{text}</span>
          <motion.i 
            variants={{
                btnHover: { x: 5 }
            }}
            transition={{ type: "spring", stiffness: 400 }}
            className="bi bi-arrow-right ms-2"
          ></motion.i>
        </motion.a>
      </div>
    </motion.div>
  );
}

export default CardItem;
