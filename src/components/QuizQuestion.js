import React from "react";

const QuizQuestion = ({ question, onAnswerClick }) => {
  return (
    <div className="quiz-card">
      <h3>{question.question}</h3>
      <div className="quiz-options">
        {question.options.map((option) => (
          <button key={option} onClick={() => onAnswerClick(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;
