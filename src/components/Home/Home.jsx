import React from "react";
import "./Home.css";
import { useLoaderData } from "react-router-dom";
import Topics from "../Topics/Topics";

const Home = () => {
  const data = useLoaderData();
  const topics = data.data;

  return (
    <div>
      <div className="d-flex">
        <div className="home-details w-50">
          <h4 className="text-center pt-5">Show Real</h4>
          <h1 className="text-center pt-3 fw-bold">Power Of Your Mind</h1>
        </div>
        <div className="home-pic w-50"></div>
      </div>
      <div className="p-3 d-flex justify-content-between">
        {topics.map((topic) => (
          <Topics key={topic.id} topic={topic}></Topics>
        ))}
      </div>
    </div>
  );
};

export default Home;
