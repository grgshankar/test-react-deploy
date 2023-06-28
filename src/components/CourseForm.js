import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Rating from "./Rating";

const CourseForm = () => {
  const getCourse = useRef();
  const getAuthor = useRef();
  const getMessage = useRef();
  const [rating, setRating] = useState(0);
  const [ratingHover, setRatingHover] = useState(0);
  const initialData = localStorage.getItem("courseList");
  const finalData = initialData ? JSON.parse(initialData) : [];
  const navigate = useNavigate();

  const courseHandlers = (e) => {
    e.preventDefault();
    const course = getCourse.current.value;
    const author = getAuthor.current.value;
    const message = getMessage.current.value;
    const dataStore = {
      id: Math.random(),
      course,
      author,
      message,
      rating,
    };
    navigate("/");
    const addedData = [dataStore, ...finalData];
    localStorage.setItem("courseList", JSON.stringify(addedData));
  };
  return (
    <>
      <div className="formWrapper">
        <div className="container">
          <h1>Please add your course here!!!</h1>
          <div className="rating_wrapper">
            <Rating
              rating={rating}
              setRating={setRating}
              ratingHover={ratingHover}
              setRatingHover={setRatingHover}
            />
          </div>
          <form>
            <input type="text" placeholder="Course Name" ref={getCourse} />
            <input type="text" placeholder="Author" ref={getAuthor} />
            <textarea
              type="text"
              placeholder="Message"
              ref={getMessage}
            ></textarea>
          </form>
          <button className="btn_ btn_submit" onClick={courseHandlers}>
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default CourseForm;
