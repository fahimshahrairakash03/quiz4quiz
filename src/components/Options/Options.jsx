import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Options = ({ option, handleAnswer }) => {
  return (
    <div className="w-25 ">
      <Card onClick={() => handleAnswer({ option })} className="p-1 m-2 " body>
        <p className="text-center"> {option}</p>
      </Card>
    </div>
  );
};

export default Options;
