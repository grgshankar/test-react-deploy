import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import CourseComponent from "./CourseComponent";

const Course = () => {
  const [finalData, setFinalData] = useState(() => {
    const initialData = localStorage.getItem("courseList");
    return initialData ? JSON.parse(initialData) : [];
  });

  const removeDataHandler = (id) => {
    //
    // console.log("id", id);
    const updatedData = finalData.filter((item) => item.id !== id);
    setFinalData(updatedData);
    localStorage.setItem("courseList", JSON.stringify(updatedData));
  };

  return (
    <>
      <Header />
      {finalData.length > 0 ? (
        <>
          <div className="courseListWrapper">
            <div className="container">
              <h1>Courses</h1>
              <button className="btn_ btn_back">
                <Link to="/addCourse">Back</Link>
              </button>
              <div className="listRow">
                {finalData.map((data) => (
                  <CourseComponent
                    key={Math.random()}
                    data={data}
                    removeData={removeDataHandler}
                  />
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="container">
            <div className="no_data_container">
              <div className="inner_content">
                <p>
                  There is no any other data!!! <br></br>Please go back to add
                  some data !!!
                </p>
                <button className="btn_ btn_back">
                  <Link to="/addCourse">Back</Link>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Course;
