import React from "react";
import "../styles/Quiz.css";

const QuizQuestion = ({ question, selectedAnswer, onAnswerClick }) => {
  return (
    <div className="quiz-card">
      <h3 className="quiz-question">{question.question}</h3>
      <div className="options-list">
        {question.options.map((option) => {
          let buttonClass = "option-button";
          if (selectedAnswer) {
            if (option === question.answer) {
              buttonClass += " correct"; // Highlight correct answer in green
            } else if (option === selectedAnswer) {
              buttonClass += " incorrect"; // Highlight incorrect answer in red
            }
          }
          return (
            <button
              key={option}
              className={buttonClass}
              onClick={() => onAnswerClick(option)}
              disabled={!!selectedAnswer} // Disable buttons after an answer is selected
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuizQuestion;