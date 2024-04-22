import React from "react";
import Home from "./pages/Home/Home";
import Quiz from "./pages/Quiz/Quiz";
import AISimulator from "./pages/AISimulator/AISimulator";
import { Route, Routes, HashRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/test/:tehnologie" element={<Quiz />} />
          <Route path="/simulare-AI" element={<AISimulator />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
