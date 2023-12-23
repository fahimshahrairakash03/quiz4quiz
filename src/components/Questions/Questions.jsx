import React from "react";
import Options from "../Options/Options";

const Questions = ({ ques }) => {
  console.log(ques);
  const { correctAnswer, id, options, question } = ques;
  console.log(correctAnswer);
  const handleAnswer = (op) => {
    if (op === correctAnswer) {
      console.log("correct Answer");
    } else {
      console.log("Incorrect Answer");
    }
  };

  return (
    <div className="pt-5">
      <h4 className="text-center p-5">{question}</h4>
      <div className="d-flex flex-column align-items-center w-100">
        {options.map((option) => (
          <Options
            key={id}
            option={option}
            handleAnswer={handleAnswer}
          ></Options>
        ))}
      </div>
    </div>
  );
};

export default Questions;
