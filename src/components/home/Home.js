import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/search");
  };
  return (
    <div className="mt-5">
      <h1
        className="text-center animate__animated animate__flipInX pe-4"
        style={{ fontFamily: "fantasy" }}
      >
        In this page you can find information about your favorite heroes from
      </h1>

      <div className="row mt-5">
        <div className="col-7">
          <img
            className="border border-2 border-dark animate__animated animate__flipInX"
            alt="Not found"
            src="https://www.cinemascomics.com/wp-content/uploads/2021/04/Segun-Google-Cual-es-mas-popular-Marvel-o-DC-Comics.jpg"
            style={{ maxHeight: "1000px", maxWidth: "600px" }}
            onClick={handleClick}
          />
        </div>

        <div className="col-5 text-center">
          <div className="m-5">
            <h2
              className="m-5 animate__animated animate__flipInX"
              style={{ fontFamily: "fantasy" }}
            >
              Come on, find your hero
            </h2>
          </div>

          <button
            className="mt-3 btn btn-outline-success btn-lg animate__animated animate__flipInX"
            onClick={handleClick}
          >
            Let's go
          </button>
        </div>
      </div>
    </div>
  );
};
