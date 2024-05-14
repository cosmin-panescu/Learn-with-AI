import React from "react";
import Header from "../../components/header/Header";
import Services from "../../components/services/Services";
import Resume from "../../components/resume/Resume";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="delimiter"></div>
      <Services />
      <div className="delimiter"></div>
      <Resume />
    </div>
  );
};

export default Home;
