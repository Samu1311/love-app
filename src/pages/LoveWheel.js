import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoveWheel.css";

const prizes = [
  "Un beso en tu carita 🤗",
  "Cena romántica 🍽️",
  "Noche de pelis 🎬",
  "Un regalo sorpresa 🎁",
  "Una carta de amor 💌",
  "Una escapada de fin de semana 🏖️",
  "Desayuno en la cama 🍳",
  "Un día libre de tareas 🧹",
];

const LoveWheel = () => {
  const [currentPrize, setCurrentPrize] = useState("");
  const [spinning, setSpinning] = useState(false);
  const [selectedPrize, setSelectedPrize] = useState(null);
  const navigate = useNavigate();
  const intervalId = useRef(null); // Use useRef for interval ID

  const startSpinning = () => {
    setSpinning(true);
    setSelectedPrize(null);
    intervalId.current = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * prizes.length);
      setCurrentPrize(prizes[randomIndex]);
    }, 100); // Change prize every 100ms
  };

  const stopSpinning = () => {
    clearInterval(intervalId.current);
    setSpinning(false);
    const randomIndex = Math.floor(Math.random() * prizes.length);
    setSelectedPrize(prizes[randomIndex]);
  };

  const goToHomePage = () => {
    navigate("/");
  };

  useEffect(() => {
    return () => clearInterval(intervalId.current); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="love-wheel-container">
      <h1>Premios para la niña más bonita ❤️</h1>
      <div className="prize-display">
        {spinning ? (
          <p className="current-prize">{currentPrize}</p>
        ) : selectedPrize ? (
          <p className="selected-prize">Felicidades! Ganaste: {selectedPrize}</p>
        ) : (
          <p className="placeholder">Presiona "Iniciar" para comenzar</p>
        )}
      </div>
      <div className="controls">
        {!spinning ? (
          <button className="start-button" onClick={startSpinning}>
            Iniciar
          </button>
        ) : (
          <button className="stop-button" onClick={stopSpinning}>
            Detener
          </button>
        )}
      </div>
      <button className="home-button" onClick={goToHomePage}>
        <i className="fas fa-home"></i> Home
      </button>
    </div>
  );
};

export default LoveWheel;