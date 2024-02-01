import { useState } from "react";

import QUESTIONS from "../questions";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const handleSelectAnswer = (selectedAnswer) => {
    setUserAnswers((prev) => [...prev, selectedAnswer]);
  };

  const activeQuestionIndex = userAnswers.length;
  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {QUESTIONS[activeQuestionIndex].answers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
