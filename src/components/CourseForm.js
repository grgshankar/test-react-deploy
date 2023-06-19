import React, { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";

const CourseForm = () => {
  //   console.log("props=", props);
  const getCourse = useRef();
  const getAuthor = useRef();
  useEffect(() => {
    const initialData = JSON.parse(localStorage.getItem("courseList"));
    console.log(initialData);
  }, []);
  //   const [course, setCourse] = useState(initialData ? initialData : []);
  //   const navigate = useNavigate();

  const courseHandlers = (e) => {
    e.preventDefault();
    const course = getCourse.current.value;
    const author = getAuthor.current.value;
    const dataStore = {
      course,
      author,
    };
    console.log("data", dataStore);
    // addedLatestData(dataStore);
    // navigate("/course");
    localStorage.setItem("courseList", JSON.stringify(dataStore));
  };
  return (
    <>
      <div className="formWrapper">
        <div className="container">
          <h1>Please add your course here!!!</h1>
          <form onSubmit={courseHandlers}>
            <input type="text" placeholder="Course Name" ref={getCourse} />
            <input type="text" placeholder="Author" ref={getAuthor} />
            <button>Add</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CourseForm;
