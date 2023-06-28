import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Course from "../Course";
import AddCourse from "../AddCourse";
import NotFound from "../NotFound";
import SingleCourse from "../SingleCourse";

const MyRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Course />} />
          <Route path="/addCourse" element={<AddCourse />} />
          <Route path="/views/:id" element={<SingleCourse />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MyRouter;
