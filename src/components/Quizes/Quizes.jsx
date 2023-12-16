import React from "react";
import "./Quizes.css";
import { useLoaderData } from "react-router-dom";
import Questions from "../Questions/Questions";

const Quizes = () => {
  const quizes = useLoaderData();
  const { name, questions, total } = quizes.data;
  return (
    <div>
      <h1 className="text-center pt-3 ">Welcome to {name} qiuizes </h1>
      <h4 className="text-center pt-3">
        {" "}
        You have to Attend Total {total} Quizes
      </h4>
      <div>
        {questions.map((ques) => (
          <Questions key={ques.id} ques={ques}></Questions>
        ))}
      </div>
    </div>
  );
};

export default Quizes;
