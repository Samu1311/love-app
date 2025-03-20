import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Quiz.css";
import QuizQuestion from "../components/QuizQuestion";

const questions = [
  {
    id: 1,
    question: "Cuál es mi color favorito?",
    options: ["Amarillo", "Azul", "Verde", "Negro"],
    answer: "Azul",
  },
  {
    id: 2,
    question: "Dónde empezó nuestro amor?",
    options: ["Campamento", "Oslo", "Nørregade 22B", "VIA"],
    answer: "Campamento",
  },
  {
    id: 3,
    question: "Quién es lo más bonito y chiquito del mundo?",
    options: ["Ana", "Samuele", "Todas las anteriores", "Ninguna de las anteriores"],
    answer: "Todas las anteriores",
  },
  {
    id: 4,
    question: "En qué playa de Margarita aprendí a hacer kitesurf?",
    options: ["El Yaque", "Playa el Agua", "Parguito", "La Restinga"],
    answer: "El Yaque",
  },
  {
    id: 5,
    question: "Quién ha dado más primeros pasos en la relación?",
    options: ["Samuele", "Ana"],
    answer: "Samuele",
  },
  {
    id: 6,
    question: "Cómo se va a llamar nuestra primera hija?",
    options: ["Sofía", "Daniela", "Andrea", "Eliza"],
    answer: "Eliza",
  },
  {
    id: 7,
    question: "Cómo se llama el bar en el que nos dijimos TE AMO?",
    options: ["MOJO", "JOJO", "MOMO", "MONO"],
    answer: "JOJO",
  },
  {
    id: 8,
    question: "Frente a qué tienda nos dimos nuestro beso de año nuevo?",
    options: ["McDonalds", "Espresso House", "Netto", "Føtex"],
    answer: "Føtex",
  },
  {
    id: 9,
    question: "Qué decía el mensaje del día que me tentaste por whatsapp antes de estar juntos?",
    options: ["Ven y dímelo", "Dilo pues", "Quiero que lo digas", "Quiero escucharlo"],
    answer: "Quiero que lo digas",
  },
  {
    id: 10,
    question: "De qué lata es la chapita del amor que llevo en mi collar desde Oslo?",
    options: ["Red Bull", "Coca-Cola", "Faxe Kondi", "Monster"],
    answer: "Red Bull",
  },
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Track the selected answer
  const navigate = useNavigate();

  const handleAnswerClick = (option) => {
    setSelectedAnswer(option); // Set the selected answer
    if (option === questions[currentQuestion].answer) {
      setScore((prevScore) => prevScore + 1);
    }
    // Delay moving to the next question to show feedback
    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion((prevQuestion) => prevQuestion + 1);
        setSelectedAnswer(null); // Reset the selected answer for the next question
      } else {
        setQuizCompleted(true);
      }
    }, 1500); // 1.5-second delay
  };

  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <div className="quiz-container">
      <h1>¿Qué tanto sabes de nosotros? 🤔</h1>
      {!quizCompleted ? (
        <QuizQuestion
          question={questions[currentQuestion]}
          selectedAnswer={selectedAnswer}
          onAnswerClick={handleAnswerClick}
        />
      ) : (
        <div className="quiz-results">
          <h2>Quiz Completado!</h2>
          <p>Tuviste {score} respuestas correctas de {questions.length} 🎉</p>
        </div>
      )}
      <button className="home-button" onClick={goToHomePage}>
        <i className="fas fa-home"></i> Home
      </button>
    </div>
  );
}

export default Quiz;