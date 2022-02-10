import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";
import { useForm } from "../../hooks/useForm";

export const LoginScreen = () => {
  const { dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const [{ userName }, handleInputChange] = useForm({
    userName: "",
  });

  const handleLogin = () => {
    const action = {
      type: types.login,
      payload: { name: userName },
    };

    dispatch(action);

    const lastPath = localStorage.getItem("lastpath" || "/");

    navigate(lastPath, {
      replace: true,
    });
  };

  return (
    <div className="container mt-5 text-center">
      <h1>Login screen</h1>
      <hr />

      <div className="row justify-content-center">
        <div className="col-5">
          <div>
            <input
              type="text"
              placeholder="Write your name..."
              className="form-control"
              name="userName"
              autoComplete="off"
              value={userName}
              onChange={handleInputChange}
            />
          </div>

          <button className="btn btn-primary btn-lg mt-4" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
