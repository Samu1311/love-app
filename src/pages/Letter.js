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
          Espero que te esté gustando este pequeño viajecito por las estrellas,
          y que te esté haciendo ilusión todo lo que has visto hasta ahora.
          Esta fue la forma que encontré para decirte lo mucho que te amo y de alguna
          forma dejar un pedacito de mi y lo que me gusta en esta propuesta y "regalo".
        </p>
        <p>
          Quiero que quede más que claro lo mucho que te amo y lo feliz que me has
          hecho hasta hoy. No sabes la emoción que tengo de poder seguir agregando
          días, fotos, canciones, lugares y momentos contigo a este gran archivo que
          será nustra relación.
        </p>
        <p>
          Podría extenderme por horas y escribir 5 párrafos más (igual lo haré
          en futuros regalos y cositas, no te libras). Pero supongo que para este
          punto en el recorrido por Orión ya me tendrás al lado tuyo muerto de las
          ganas de que visites "Alnilam" para una preguntita que te tengo preparada.
          Así que no me extiendo más. Eres y seguirás siendo la cosita mas increíble
          que me ha pasado y una de las decisiones y logros que más me llenan de orgullo.
        </p>
        <p>
          Te adora, <br />
          tu electroncito.
        </p>
        <button className="home-button" onClick={goToHomePage}>
          Volver al Inicio
        </button>
      </div>
    </div>
  );
};

export default Letter;