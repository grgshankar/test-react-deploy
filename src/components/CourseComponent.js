import React from "react";
import { Link } from "react-router-dom";

const CourseComponent = (props) => {
  //retreiving rating
  const ratingHtml = (ratingNumber) => {
    const ratingWrapperHtml = [];
    for (let i = 1; i <= ratingNumber; i++) {
      ratingWrapperHtml.push(
        <button className="star active">
          <span>&#9733;</span>
        </button>
      );
    }
    return ratingWrapperHtml;
  };

  // function for trimming the description
  const maxLength = 100; //maximum length for the trimmed message
  const trimMessage = (message) => {
    if (message.length > maxLength) {
      return message.slice(0, maxLength) + "..."; // trim the message
    }
    return message; // return the original message if it's already within the maximum length
  };
  return (
    <>
      <div className="listCourse">
        <div className="title_wrapper">
          <strong>{props.data.course}</strong>
          <div className="rating_wrapper">{ratingHtml(props.data.rating)}</div>
        </div>
        <span className="name_">{props.data.author}</span>
        <div className="content_wrap">
          <p>{trimMessage(props.data.message)}</p>
        </div>
        <button className="btn_ view_">
          <Link to={`/views/${props.data.id}`}>View More</Link>
        </button>
        <button
          className="btn_ delete_"
          onClick={() => props.removeData(props.data.id)}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default CourseComponent;
