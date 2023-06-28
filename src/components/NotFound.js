import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";

const NotFound = () => {
  return (
    <div className="page_not_found">
      <Header />
      <div className="no_data_container">
        <div className="inner_content">
          <p>Page not found</p>
          <button className="btn_ btn_back">
            <Link to="/">Back</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
