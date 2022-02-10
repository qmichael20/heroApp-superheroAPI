import { useParams, useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

export const HeroScreen = () => {
  const { heroeId } = useParams();
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate(-1);
  };

  const { data } = useFetch(`${heroeId}`);

  const { name } = data ? data : "";

  const { url } = data ? data.image : "";
  const { gender, race } = data ? data.appearance : "";
  const {
    "full-name": realName,
    "alter-egos": alterEgos,
    publisher,
    alignment,
    "first-appearance": first_appearance,
  } = data ? data.biography : "";

  return (
    <div className="row m-5">
      <div className="col-4">
        <img
          key={url}
          className="img-thumbnail animate__animated animate__fadeInLeft border border-2 border-dark"
          src={url}
          alt="Not found"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = "/assets/NotFound.jpg";
          }}
        />
      </div>

      <div className="col-8 animate__animated animate__fadeInRight">
        <h3 className="text-center">{name}</h3>
        <ul className="list-group">
          <li className="list-group-item">
            <b>Real name:</b> {realName}
          </li>
          <li className="list-group-item">
            <b>Gender:</b> {gender}
          </li>
          <li className="list-group-item">
            <b>Race:</b> {race}
          </li>
          <li className="list-group-item">
            <b>Alignment:</b> {alignment}
          </li>
          <li className="list-group-item">
            <b>Alter egos:</b> {alterEgos}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b> {publisher}
          </li>
          <li className="list-group-item">
            <b>First Appearance:</b> {first_appearance}
          </li>
        </ul>

        <div className="text-center mt-4">
          <button
            className="btn btn-lg btn-outline-info"
            onClick={handleReturn}
          >
            Return
          </button>
        </div>
      </div>
    </div>
  );
};
