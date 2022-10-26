import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Blogs from "../Pages/Blogs/Blogs";
import Course from "../Pages/Course/Course";
import Courses from "../Pages/Courses/Courses";
import Home from "../Pages/Home/Home";
import HomePage from "../Pages/HomePage/HomePage";
import Login from "../Pages/LoggedIn/Login/Login";
import Register from "../Pages/LoggedIn/Register/Register";
import Platform from "../Pages/Platform/Platform";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";

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
        element: (
          <PrivateRoute>
            <Course></Course>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/course/${params.id}`);
        },
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
