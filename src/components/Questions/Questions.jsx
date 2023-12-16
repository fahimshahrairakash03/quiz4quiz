import React from "react";
import Options from "../Options/Options";

const Questions = ({ ques }) => {
  console.log(ques);
  const { correctAnswer, id, options, question } = ques;

  return (
    <div className="pt-5">
      <h4 className="text-center p-5">{question}</h4>
      <div className="d-flex flex-column align-items-center w-100">
        {options.map((option) => (
          <Options option={option}></Options>
        ))}
      </div>
    </div>
  );
};

export default Questions;
