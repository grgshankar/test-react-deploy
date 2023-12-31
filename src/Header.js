import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navWrapper">
      <div className="container">
        <div className="menu_wrapper">
          <div className="leftSide">
            <Link to="/">
              <h3>Logo</h3>
            </Link>
          </div>
          <div className="RightSide">
            <Link to="/">Testimonials</Link>
            <Link to="/addComment">Add Comments</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
