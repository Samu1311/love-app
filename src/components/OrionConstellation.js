import React from "react";
import Star from "./Star";
import "../styles/OrionConstellation.css";

const stars = [
  { id: "betelgeuse", x: "80%", y: "15%", link: "/love-map" }, 
  { id: "bellatrix", x: "20%", y: "25%", link: "/scrapbook" }, 
  { id: "alnitak", x: "50%", y: "58%", link: "/quiz" }, 
  { id: "alnilam", x: "60%", y: "55%", locked: true }, // FINAL STAR (locked)
  { id: "mintaka", x: "70%", y: "52%", link: "/music-box" }, 
  { id: "saiph", x: "20%", y: "92%", link: "/some-section" }, 
  { id: "rigel", x: "80%", y: "92%", link: "/some-section" },
];

const OrionConstellation = () => {
  return (
    <div className="constellation-container">
      {stars.map((star) => (
        <Star key={star.id} {...star} />
      ))}
    </div>
  );
};

export default OrionConstellation;
