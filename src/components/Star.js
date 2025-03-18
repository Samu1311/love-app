import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Star = ({ id, x, y, link, locked }) => {
  return (
    <motion.div
      className={`star ${locked ? "locked" : ""}`}
      initial={{ opacity: 0.3 }}
      animate={{ opacity: [0.3, 1, 0.3] }}
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      style={{ top: y, left: x }}
    >
      {!locked ? (
        <Link to={link} className="star-link"></Link> // ✅ Clickable whole star without extra ★
      ) : (
        <span className="locked-star"></span> // ✅ Locked star remains unclickable
      )}
    </motion.div>
  );
};

export default Star;
