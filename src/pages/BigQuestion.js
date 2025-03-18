import React, { useState } from "react";
import "../styles/BigQuestion.css";

const BigQuestion = () => {
  const [showQuestion, setShowQuestion] = useState(false);
  const [response, setResponse] = useState(null);

  const handleYes = () => {
    setResponse("yes");
  };

  const handleNo = () => {
    setResponse("no");
  };

  const resetQuestion = () => {
    setResponse(null);
    setShowQuestion(true);
  };

  return (
    <div className="big-question-container">
      {!showQuestion && (
        <button className="reveal-button" onClick={() => setShowQuestion(true)}>
          Presioname
        </button>
      )}

      {showQuestion && !response && (
        <div className="question">
          <h1>¿Quieres ser mi novia? 💖</h1>
          <div className="response-buttons">
            <button className="yes-button" onClick={handleYes}>
              Sí
            </button>
            <button className="no-button" onClick={handleNo}>
              No
            </button>
          </div>
        </div>
      )}

      {response === "yes" && (
        <div className="celebration">
          <h1 className="celebration-label">¡Síííííí! 🎉💖</h1>
          <div className="hearts-rain"></div>
        </div>
      )}

      {response === "no" && (
        <div className="error-message">
          <p>Te equivocaste de botón, prueba otra vez bobita 😜</p>
          <button className="retry-button" onClick={resetQuestion}>
            Volver a intentar
          </button>
        </div>
      )}
    </div>
  );
};

export default BigQuestion;