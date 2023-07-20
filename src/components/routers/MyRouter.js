import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home";
import AddComment from "../AddComment";
import NotFound from "../NotFound";
import SingleCourse from "../SingleCourse";

const MyRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addComment" element={<AddComment />} />
          <Route path="/views/:id" element={<SingleCourse />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MyRouter;
