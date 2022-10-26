import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseSummaryCard from "../CourseSummaryCard/CourseSummaryCard";

const Home = () => {
  const allCourses = useLoaderData();
  // console.log(allCourses);
  return (
    <div className="mt-5">
      {allCourses?.map((course) => (
        <CourseSummaryCard key={course._id} course={course}></CourseSummaryCard>
      ))}
    </div>
  );
};

export default Home;
