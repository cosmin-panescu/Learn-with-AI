import React from "react";
import Home from "./pages/Home/Home";
import Quiz from "./pages/Quiz/Quiz";
import { Route, Routes, HashRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/test/:tehnologie" element={<Quiz />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
