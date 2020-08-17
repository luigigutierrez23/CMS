import React, { useState } from "react";

export default function Login() {
  /*---------------------------------------
    Hooks para iniciar sesion
    --------------------------------------*/

  const [admin, logIn] = useState({
    user: "",
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

  const login = (e) => {
    e.preventDefault();
    console.log("logIn -> admin", admin);
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
                  name="user"
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
