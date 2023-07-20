import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import ListOfComments from "./ListOfComments";

const Home = () => {
  const [finalData, setFinalData] = useState(() => {
    const initialData = localStorage.getItem("commentList");
    return initialData ? JSON.parse(initialData) : [];
  });

  const removeDataHandler = (id) => {
    //
    const updatedData = finalData.filter((item) => item.id !== id);
    setFinalData(updatedData);
    localStorage.setItem("commentList", JSON.stringify(updatedData));
  };

  return (
    <>
      <Header />
      {finalData.length > 0 ? (
        <>
          <div className="commentListWrapper">
            <div className="container">
              <h1>Courses</h1>
              <button className="btn_ btn_back">
                <Link to="/addComment">Back</Link>
              </button>
              <div className="listRow">
                {finalData.map((data) => (
                  <ListOfComments
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
                  There is no any testimonials!!! <br></br>
                </p>
                <button className="btn_ btn_back">
                  <Link to="/addComment">Add Testimonials</Link>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
