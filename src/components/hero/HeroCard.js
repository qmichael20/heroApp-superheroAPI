import React from "react";
import { useNavigate } from "react-router-dom";

export const HeroCard = ({ id, image, name }) => {
  const navigate = useNavigate();

  const { url } = image;

  const handleClick = (id) => {
    navigate(`hero/${id}`);
  };

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card mt-2">
        <div className="row no-gutters justify-content-center">
          <div className="col-12">
            <h5 className="card-title mt-2 text-center">{name}</h5>
            <img
              src={url}
              className="card-img-top btn img-fluid border border-2 border-dark"
              alt="Not Found"
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src =
                  "https://m.media-amazon.com/images/I/61FQCSP7ZIL._SS500_.jpg";
              }}
              onClick={() => handleClick(id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
