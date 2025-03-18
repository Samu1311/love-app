import React, { useState } from "react";
import "../styles/Quiz.css";
import QuizQuestion from "../components/QuizQuestion";

const questions = [
  {
    id: 1,
    question: "What’s my favorite food?",
    options: ["Pizza", "Sushi", "Pasta", "Burgers"],
    answer: "Sushi",
  },
  {
    id: 2,
    question: "Where did we first meet?",
    options: ["Café", "Beach", "Library", "Park"],
    answer: "Café",
  },
  {
    id: 3,
    question: "Which song reminds us of each other?",
    options: ["Yellow - Coldplay", "Lover - Taylor Swift", "Perfect - Ed Sheeran", "Shallow - Lady Gaga"],
    answer: "Perfect - Ed Sheeran",
  },
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerClick = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore((prevScore) => prevScore + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  return (
    <div className="quiz-container">
      <h1>How Well Do You Know Me? 🤔</h1>
      {!quizCompleted ? (
        <QuizQuestion question={questions[currentQuestion]} onAnswerClick={handleAnswerClick} />
      ) : (
        <div className="quiz-results">
          <h2>Quiz Completed!</h2>
          <p>You scored {score} out of {questions.length} 🎉</p>
        </div>
      )}
    </div>
  );
}

export default Quiz;