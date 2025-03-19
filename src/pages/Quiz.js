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
    question: "Quién ha dado mas primeros pasos en la relación?",
    options: ["Samuele", "Ana"],
    answer: "Samuele",
  },
  {
    id: 6,
    question: "Cómo se va a llamar nuestra primera hija?",
    options: ["Sofía", "Samuele", "Andrea", "Eliza"],
    answer: "Eliza",
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