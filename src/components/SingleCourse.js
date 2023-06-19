import React from "react";

const SingleCourse = (props) => {
  // console.log({ course, author });
  return (
    <>
      <div className="listCourse">
        <strong>{props.data.course}</strong>
        <span>{props.data.author}</span>
        <button>Delete</button>
      </div>
    </>
  );
};

export default SingleCourse;
