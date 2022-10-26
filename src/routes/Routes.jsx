import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Blogs from "../Pages/Blogs/Blogs";
import Course from "../Pages/Course/Course";
import Courses from "../Pages/Courses/Courses";
import Home from "../Pages/Home/Home";
import HomePage from "../Pages/HomePage/HomePage";
import Platform from "../Pages/Platform/Platform";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/home",
        element: <Home></Home>,
        loader: async () => {
          return fetch("http://localhost:5000/course");
        },
      },
      {
        path: "/courses",
        element: <Platform></Platform>,
      },
      {
        path: "/category/:id",
        element: <Courses></Courses>,
        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/category/${params.id}`);
        },
      },
      {
        path: "/course/:id",
        element: <Course></Course>,
        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/course/${params.id}`);
        },
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
  {
    path: "*",
    element: <h2>this is error</h2>,
  },
]);
