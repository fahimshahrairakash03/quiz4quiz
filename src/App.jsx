import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layout/Main";
import Blog from "./components/Blog/Blog";
import Home from "./components/Home/Home";
import Quizes from "./components/Quizes/Quizes";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "",
          element: <Home></Home>,
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
        },
        {
          path: "blog",
          element: <Blog></Blog>,
        },
        {
          path: "topics/:topicId",
          loader: ({ params }) =>
            fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.topicId}`
            ),
          element: <Quizes></Quizes>,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
