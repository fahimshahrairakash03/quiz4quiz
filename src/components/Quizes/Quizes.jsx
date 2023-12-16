import React from "react";
import "./Quizes.css";
import { useLoaderData } from "react-router-dom";

const Quizes = () => {
  const quizes = useLoaderData();
  console.log(quizes.data);
  return (
    <div>
      <h1>Hello {quizes.data.total} qiuizes </h1>
    </div>
  );
};

export default Quizes;
