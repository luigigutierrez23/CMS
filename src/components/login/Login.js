import React, { useState } from "react";
import { urlAPI } from "../../config/Config.js";

export default function Login() {
  /*---------------------------------------
    Hooks para iniciar sesion
    --------------------------------------*/

  const [admin, logIn] = useState({
    usuario: "",
    password: "",
  });

  /*---------------------------------------
  Capturamos cambios del formulario 
  para ejecutar la función del Hook
  --------------------------------------*/
  const changeForm = (e) => {
    logIn({
      ...admin,
      [e.target.name]: e.target.value,
    });
  };

  /*---------------------------------------
    Ejecutamos el submit
    --------------------------------------*/

  const login = async (e) => {
    e.preventDefault();
    const result = await loginAPI(admin);

    if (result.status !== 200) {
    } else {
      localStorage.setItem("acces_token", result.token);
      localStorage.setItem("id", result.data._id);
      localStorage.setItem("user", result.data.usuario);

      window.location.href = "/";
    }
  };
  /*---------------------------------------
    Retornamos la vista
    --------------------------------------*/
  return (
    <div className="login-page" style={{ minHeight: "512.391px" }}>
      <div className="login-box">
        <div className="login-logo">
          <b>CMS</b>
        </div>

        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Complete fields for Sing up</p>

            <form onChange={changeForm} onSubmit={login}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="User"
                  name="usuario"
                />

                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user"></span>
                  </div>
                </div>
              </div>

              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                />

                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

/*------------------------------------
POST REQUEST FOR LOGIN
--------------------------------------*/
const loginAPI = (data) => {
  const url = `${urlAPI}/login`;

  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
};
