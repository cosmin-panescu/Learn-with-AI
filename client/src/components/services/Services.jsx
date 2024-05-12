import React from "react";
import "./Services.scss";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="services" id="services">
      <div className="description">
        <h2>Alege modul de exersare cel mai potrivit pentru tine. 😄 </h2>
        <p>
          Nu iti face griji! Fie ca raspunzi{" "}
          <span className="correct">corect</span> sau{" "}
          <span className="wrong">nu</span>, vei primi si explicatia conceptului
          respectiv, astfel incat sa si inveti in procesul de exersare.
        </p>
      </div>

      <div className="content">
        <div className="left">
          <h3>Întrebări cu răspuns multiplu</h3>
          <Link className="link-btn" to="/test/1">
            HTML
          </Link>
          <Link className="link-btn" to="/test/2">
            CSS
          </Link>
          <Link className="link-btn" to="/test/3">
            JavaScript
          </Link>
        </div>

        <div className="right">
          <h3>Simulare AI interviu tehnic</h3>
          <Link className="link-btn" to="/simulare-AI">
            simulare AI
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
