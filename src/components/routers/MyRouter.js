import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Course from "../Course";
import Home from "../Home";
import NotFound from "../NotFound";

const MyRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MyRouter;
