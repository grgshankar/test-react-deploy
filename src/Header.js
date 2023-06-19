import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navWrapper">
      <div className="container">
        <div className="menu_wrapper">
          <div className="leftSide">
            <h3>Logo</h3>
          </div>
          <div className="RightSide">
            <Link to="/">Home</Link>
            <Link to="/course">Course</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
