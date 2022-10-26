import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
import "./HomePage.css";
const HomePage = () => {
  return (
    <div className="my-5">
      <TypeWriterEffect
        textStyle={{
          fontFamily: "Red Hat Display",
          color: "#3F3D56",
          fontWeight: 700,
          fontSize: "100px",
        }}
        startDelay={500}
        cursorColor="#3F3D56"
        multiText={[
          "Welcome to our sites",
          "in this era, you will learn technologies...",
          "You can build your career with this platform",
          "Your hard work can give you the achievement.",
          "Remember time and tide waits for none.",
        ]}
        multiTextDelay={1000}
        typeSpeed={100}
      />
    </div>
  );
};

export default HomePage;
