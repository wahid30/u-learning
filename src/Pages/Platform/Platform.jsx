import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PlatformCourses from "../PlatformCourses/PlatformCourses";
import "./Platform.css";
const Platform = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/platform")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="my-5">
      <h4>There have total {categories.length} platform</h4>
      <div className="custom-grid">
        {categories.map((category) => (
          <PlatformCourses
            key={category.id}
            category={category}
          ></PlatformCourses>
        ))}
      </div>
    </div>
  );
};

export default Platform;
