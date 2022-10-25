import React from "react";
import { useLoaderData } from "react-router-dom";
import CoursePages from "../CoursePages/CoursePages";
import CourseSummaryCard from "../CourseSummaryCard/CourseSummaryCard";

const Courses = () => {
  const courses = useLoaderData();
  // console.log(courses);
  return (
    <div className="my-5">
      <h2>This is category has course: {courses.length}</h2>
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
