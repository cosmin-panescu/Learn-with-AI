import React from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Quiz from "./pages/Quiz/Quiz";
import AISimulator from "./pages/AISimulator/AISimulator";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/test/:tehnologie" element={<Quiz />} />
          <Route path="/simulare-AI" element={<AISimulator />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
