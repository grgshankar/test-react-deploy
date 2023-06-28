import React from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../Header";

const SingleCourse = () => {
  const { id } = useParams();
  const getId = Number(id);
  const initialData = localStorage.getItem("courseList");
  const storedDataObject = initialData ? JSON.parse(initialData) : [];
  const finalData = storedDataObject.filter((item) => item.id === getId);

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
  return (
    <>
      <Header />
      <div className="container single_page">
        <button className="btn_ btn_back">
          <Link to="/">Back</Link>
        </button>
        <div className="content_wrap">
          <h2>{finalData[0].course}</h2>
          <span className="name_">{finalData[0].author}</span>
          <div className="rating_wrapper">
            {ratingHtml(finalData[0].rating)}
          </div>
          <p>{finalData[0].message}</p>
        </div>
      </div>
    </>
  );
};

export default SingleCourse;
