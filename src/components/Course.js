import React from "react";
import Header from "../Header";
import SingleCourse from "./SingleCourse";

const Course = () => {
  const allData = [
    {
      course: "React JS",
      author: "Jordan Walke",
    },
    {
      course: "Javascript",
      author: "Brendan Eich",
    },
    {
      course: "Node JS",
      author: "Brendan Eich",
    },
    {
      course: "Angular JS",
      author: "Misko Hevery",
    },
  ];
  return (
    <>
      <Header />
      <div className="courseListWrapper">
        <div className="container">
          <h1>Courses</h1>
          <div className="listRow">
            {allData.map((data) => (
              <SingleCourse key={Math.random()} data={data} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
