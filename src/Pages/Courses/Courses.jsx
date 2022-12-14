import React from "react";
import { useLoaderData } from "react-router-dom";
import CoursePages from "../CoursePages/CoursePages";
import CourseSummaryCard from "../CourseSummaryCard/CourseSummaryCard";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div className="my-5">
      <h2>There have total {courses.length} Courses</h2>
      <div className="custom-grid">
        {courses?.map((course) => (
          <CourseSummaryCard
            key={course._id}
            course={course}
          ></CourseSummaryCard>
        ))}
      </div>
    </div>
  );
};

export default Courses;
