import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Rating from "./Rating";

const CommentForm = () => {
  const getName = useRef();
  const getDesignations = useRef();
  const getMessage = useRef();
  const [rating, setRating] = useState(0);
  const [ratingHover, setRatingHover] = useState(0);
  const initialData = localStorage.getItem("commentList");
  const finalData = initialData ? JSON.parse(initialData) : [];
  const navigate = useNavigate();

  const commentsHandlers = (e) => {
    e.preventDefault();
    const name = getName.current.value;
    const designation = getDesignations.current.value;
    const message = getMessage.current.value;
    const dataStore = {
      id: Math.random(),
      name,
      designation,
      message,
      rating,
    };
    navigate("/");
    const addedData = [dataStore, ...finalData];
    localStorage.setItem("commentList", JSON.stringify(addedData));
  };
  return (
    <>
      <div className="formWrapper">
        <div className="container">
          <h1>Please add your comments here!!!</h1>
          <div className="rating_wrapper">
            <Rating
              rating={rating}
              setRating={setRating}
              ratingHover={ratingHover}
              setRatingHover={setRatingHover}
            />
          </div>
          <form>
            <input type="text" placeholder="Name" ref={getName} />
            <input
              type="text"
              placeholder="Designation"
              ref={getDesignations}
            />
            <textarea
              type="text"
              placeholder="Message"
              ref={getMessage}
            ></textarea>
          </form>
          <button className="btn_ btn_submit" onClick={commentsHandlers}>
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default CommentForm;
