import React from "react";
import { useLoaderData } from "react-router-dom";

const Courses = () => {
  const data = useLoaderData();
  // console.log(data);
  return (
    <div className="my-5">
      <h3>There have total {data.length} course</h3>
    </div>
  );
};

export default Courses;
