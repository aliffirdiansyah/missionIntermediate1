import React, { useEffect } from 'react';
import hero from "/img/hero.svg";
import '../styles/hero.css';
import { typeEffect } from '../js/hero.js';

const Hero = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      typeEffect();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="d-flex align-items-center justify-content-center min-vh-100 px-4 mt-5 bg-white">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-md-6">
            <h1 className="display-4 fw-bold text-dark lh-sm">
              <span className="text-gradient">VideoBelajar</span> <br /> IS HERE TO BE 
              YOUR KEY TO GROWTH
            </h1>
            <a
              href="#"
              className="btn btn-success btn-lg px-5 py-3 mt-4 rounded-pill shadow-sm"
            >
              Temukan Video Course!
            </a>
          </div>
          <div className="col-md-6 text-center">
            <img
              src={hero}
              alt="Hero"
              className="img-fluid rounded shadow-lg"
              style={{ maxWidth: "500px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
