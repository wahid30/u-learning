import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Blogs from "../Pages/Blogs/Blogs";
import Courses from "../Pages/Courses/Courses";
import Home from "../Pages/Home/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
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
