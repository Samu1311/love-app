import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Star = ({ id, x, y, link, special }) => {
  return (
    <motion.div
      className={`star ${special ? "special-star" : ""}`}
      initial={{ opacity: 0.3 }}
      animate={{ opacity: [0.3, 1, 0.3] }}
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      style={{ top: y, left: x }}
    >
      <Link to={link} className="star-link"></Link> {/* Clickable star */}
    </motion.div>
  );
};

export default Star;