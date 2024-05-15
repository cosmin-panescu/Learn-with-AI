import React from "react";
import "./Services.scss";
import { Link } from "react-router-dom";
import { links } from "../../utils/data";

const Services = () => {
  return (
    <div className="services" id="services">
      <div className="description">
        <h2>Alege modul de exersare cel mai potrivit pentru tine. 😄 </h2>
        <p className="description-text">
          Nu iti face griji! Fie ca raspunzi{" "}
          <span className="correct">corect</span> sau{" "}
          <span className="wrong">nu</span>, vei primi si explicatia conceptului
          respectiv, astfel incat sa inveti in procesul de exersare.
        </p>
      </div>

      <div className="content">
        <div className="left">
          <h3>Întrebări cu răspuns multiplu</h3>
          <p className="service-description">
            • 150+ intrebari
            <br />• explicatie pentru fiecare intrebare
          </p>
          <div className="links">
            {links.map((link, index) => (
              <Link id={index} className="link-btn second-btn" to={link.link}>
                <span className="button-top">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="right">
          <h3>Simulare AI interviu tehnic</h3>
          <p className="service-description">
            • GPT-3.5-Turbo
            <br />• simulare interviu real
          </p>
          <div className="links">
            <Link className="link-btn second-btn" to="/simulare-AI">
              <span className="button-top">Simulare AI</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
