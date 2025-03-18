import React from "react";
import "../styles/Home.css";
import OrionConstellation from "../components/OrionConstellation";

function Home() {
  console.log("✅ Home.js is rendering!");
  return (
    <div className="home-container">
      <div className="header-overlay">
        <h1 className="modern-header">✨ Bienvenida ATPesita ✨</h1>
      </div>
      <OrionConstellation />
    </div>
  );
}

export default Home;