import React from "react";

const Questions = ({ ques }) => {
  console.log(ques);
  const { correctAnswer, id, options, question } = ques;

  return (
    <div className="pt-5">
      <h4 className="text-center p-5">{question}</h4>
      <div>
        {options.map((option) => (
          <p>asdasd</p>
        ))}
      </div>
    </div>
  );
};

export default Questions;
