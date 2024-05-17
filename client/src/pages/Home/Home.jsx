import React from "react";
import Header from "../../components/header/Header";
import Services from "../../components/services/Services";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="delimiter"></div>
      <Services />
    </div>
  );
};

export default Home;
