import React from "react";
import Home from "./pages/Home/Home";
import { Route, Routes, HashRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
