import React from "react";
import { useNavigate } from "react-router-dom";
import HTMLFlipBook from "react-pageflip"; // 📖 Flipbook library
import "../styles/Scrapbook.css";

// Import images
import firstDateImage from "../assets/images/first-date.jpg";
import beachTripImage from "../assets/images/beach-trip.jpg";
import movieNightImage from "../assets/images/movie-night.jpg";

const entries = [
  { id: 1, title: "First Date", image: firstDateImage, text: "The night we first met, and everything changed!" },
  { id: 2, title: "Beach Trip", image: beachTripImage, text: "Our unforgettable weekend by the ocean!" },
  { id: 3, title: "Movie Night", image: movieNightImage, text: "Popcorn, laughter, and our favorite films." },
];

function Scrapbook() {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <div className="scrapbook-container">
      <HTMLFlipBook width={380} height={840} className="scrapbook-flipbook">
        {/* 🏆 Cover Page (Includes Header) */}
        <div className="scrapbook-page cover-page">
          <div className="label">
            <h1>Nuestras Memorias</h1>
            <p>Un repaso a nuestros mejores momentos</p>
            <button className="home-button" onClick={goToHomePage}>Home</button>
            <div className="tape top-left"></div>
            <div className="tape top-right"></div>
            <div className="tape bottom-left"></div>
            <div className="tape bottom-right"></div>
          </div>
        </div>

        {/* 📖 Dynamic Pages */}
        {entries.map((entry) => (
          <div className="scrapbook-page" key={entry.id}>
            <div className="scrapbook-pages-content">
              <div className="scrapbook-page-images">
                <div className="tape top-left"></div>
                <div className="tape top-right"></div>
                <img src={entry.image} alt={entry.title} className="entry-image" />
                <h3>{entry.title}</h3>
                <p>{entry.text}</p>
                <div className="tape bottom-left"></div>
                <div className="tape bottom-right"></div>
              </div>
            </div>
          </div>
        ))}

        {/* 📖 Closing Page */}
        <div className="scrapbook-page closing-page">
          <div className="label">
            <h1>Gracias por todos los momentos</h1>
            <p>Prometo agregar más páginas a este librito a medida que creemos muchos más juntos</p>
            <button className="home-button" onClick={goToHomePage}>Home</button>
            <div className="tape top-left"></div>
            <div className="tape top-right"></div>
            <div className="tape bottom-left"></div>
            <div className="tape bottom-right"></div>
          </div>
        </div>
      </HTMLFlipBook>
    </div>
  );
}

export default Scrapbook;