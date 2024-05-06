import React from "react";
import "./Header.scss";

const Header = () => {
  const handleScroll = () => {
    window.scrollBy({ top: 700, behavior: "smooth" });
  };

  return (
    <div className="header">
      <div className="content">
        <h1>
          <span className="gradient">&lt; AI</span>
          nterviu
          <span className="gradient">/&gt;</span>
        </h1>

        {/* <h2>Exersează pentru următorul tău interviu tehnic! 👨‍💻</h2> */}
        <h2>Platforma care te antreneaza pentru urmatorul tau interviu in IT! 👨‍💻</h2>

        <button className="main-btn">
          <span onClick={handleScroll}>Să începem!</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
