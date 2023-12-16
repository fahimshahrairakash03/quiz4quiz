import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Options = ({ option }) => {
  console.log(option);
  return (
    <div className="w-25 ">
      <Card className="p-1 m-2 " body>
        <p className="text-center"> {option}</p>
      </Card>
    </div>
  );
};

export default Options;
