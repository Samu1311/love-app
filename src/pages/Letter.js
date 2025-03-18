import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Letter.css";

const Letter = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <div className="letter-container">
      <div className="letter-content">
        <h1>Para mi atpesita ❤️</h1>
        <p>Hola bonita,</p>
        <p>
          Desde el momento en que te conocí, supe que había algo especial en ti.
          Cada día contigo ha sido un regalo, lleno de risas, aventuras y amor.
          Eres mi compañera, mi mejor amiga y la razón por la que sonrío cada día.
        </p>
        <p>
          Quiero que sepas cuánto significas para mí. No hay palabras suficientes
          para expresar lo agradecido que estoy por tenerte en mi vida. Eres mi
          todo, y no puedo imaginar un futuro sin ti.
        </p>
        <p>
          Con todo mi amor, <br />
          Tuyo para siempre.
        </p>
        <button className="home-button" onClick={goToHomePage}>
          Volver al Inicio
        </button>
      </div>
    </div>
  );
};

export default Letter;