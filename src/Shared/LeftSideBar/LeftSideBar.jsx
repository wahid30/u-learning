import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const LeftSideBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://ulearling-server-site.vercel.app/course-category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="my-5">
      <div>
        {categories.map((category) => (
          <p key={category.id}>
            <Link to={`/category/${category.id}`}>
              <Button className="text-black" variant="outline-info">
                {category.name}
              </Button>
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};
export default LeftSideBar;
