import React, { useState } from "react";
import $ from "jquery";
import { urlAPI } from "../../../config/Config";

export default function EditAdmin() {
  /*------------------------------------
  Hook para capturar datos 
  --------------------------------------*/
  const [admin, editAdmin] = useState({
    user: "",
    password: "",
    id: "",
  });

  /*------------------------------------
    OnChange
  --------------------------------------*/

  const changeFormPost = (e) => {
    editAdmin({
      ...admin,
      [e.target.name]: e.target.value,
    });
  };

  /*------------------------------------
  OnSubmit
  --------------------------------------*/
  const submitPost = async (e) => {
    $(".alert").remove();
    e.preventDefault();
    console.log(admin);
    const { user, password } = admin;

    /*------------------------------------
        Validar user
        --------------------------------------*/
    if (user === "") {
      $(".invalid-user").show();
      $(".invalid-user").html("Completa este campo");
      return;
    }

    /*------------------------------------
        Validar password
        --------------------------------------*/
    if (password === "") {
      $(".invalid-password").show();
      $(".invalid-password").html("Completa este campo");
      return;
    }

    /*------------------------------------
        Validar Expresion en User
        --------------------------------------*/
    const expUser = /^(?=.*[A-Za-z]).{2,6}$/;
    if (!expUser.test(user)) {
      $(".invalid-user").show();
      $(".invalid-user").html(
        "Utiliza un formato que coincida con el solicitado"
      );
      return;
    } else {
      $(".invalid-user").hide();
    }

    /*------------------------------------
        Validar Expresion en Password
        --------------------------------------*/
    if (password != "") {
      const expPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
      if (!expPassword.test(password)) {
        $(".invalid-password").show();
        $(".invalid-password").html(
          "Utiliza un formato que coincida con el solicitado"
        );
        return;
      } else {
        $(".invalid-password").hide();
      }
    }

    const result = await putData(admin);

    if (result.status === 400) {
      $(".modal-footer").before(
        `<div class="alert alert-danger">${result.mensaje}</div>`
      );
    }
    if (result.status === 200) {
      $(".modal-footer").before(
        `<div class="alert alert-success">${result.mensaje}</div>`
      );
      $('button[type="submit"]').remove();
      setTimeout(() => {
        window.location.href = "/";
      }, 3000);
    }
  };

  /*------------------------------------
  Capturar datos para editar
  --------------------------------------*/

  $(document).on("click", ".editInputs", function (e) {
    e.preventDefault();
    let data = $(this).attr("data").split(",");
    // console.log(data[1]);
    $("#userEdit").val(data[1]);
    // console.log(data[1]);
    editAdmin({
      user: $("#userEdit").val(),
      password: $("#passwordEdit").val(),
      id: data[0],
    });
  });

  /*------------------------------------
  Capturar datos para borrar
  --------------------------------------*/

  $(document).on("click", ".deleteInput", function (e) {
    e.preventDefault();
    let data = $(this).attr("data").split(",")[0];
    // console.log(data[1]);
    $("#userEdit").val(data[1]);

    const deleteAdmin = async () => {
      const result = await deleteData(data);

      if (result.status === 400) {
        alert(result.mensaje);
      }
      if (result.status === 200) {
        alert(result.mensaje);
      }
    };

    deleteAdmin();
  });

  /*------------------------------------
    Vista del Componente
  --------------------------------------*/
  return (
    <div className="modal" id="editAdmin">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Editar administrador</h4>
            <button type="button" className="close" data-dismiss="modal">
              &times;
            </button>
          </div>

          <form onChange={changeFormPost} onSubmit={submitPost}>
            <div className="modal-body">
              <div className="form-group">
                <label className="small text-secondary" htmlFor="userEdit">
                  *Minimo 2 caracteres, maximo 6, sin numeros
                </label>
                <div className="input-group mb-3">
                  <div className="input-group-append input-group-text">
                    <i className="fas fa-user"></i>
                  </div>
                  <input
                    id="userEdit"
                    type="text"
                    className="form-control text-lowercase"
                    name="user"
                    placeholder="Ingrese el usuario"
                    minLength="2"
                    maxLength="6"
                    pattern="(?=.*[A-Za-z]).{2,6}"
                  />
                  <div className="invalid-feedback invalid-user"></div>
                </div>
              </div>

              <div className="form-group">
                <label className="small text-secondary" htmlFor="passwordEdit">
                  *Minimo 8 caracteres, letras en mayúscula, minúscula y números
                </label>
                <div className="input-group mb-3">
                  <div className="input-group-append input-group-text">
                    <i className="fas fa-key"></i>
                  </div>
                  <input
                    id="passwordEdit"
                    type="password"
                    className="form-control text-lowercase"
                    name="password"
                    placeholder="Ingrese la contraseña"
                    minLength="8"
                    pattern="(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}"
                  />
                  <div className="invalid-feedback invalid-password"></div>
                </div>
              </div>
            </div>

            <div className="modal-footer d-flex justify-content-between">
              <div>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Cerrar
                </button>
              </div>

              <div>
                <button type="submit" className="btn btn-primary">
                  Enviar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

/*------------------------------------
PUT REQUEST 
--------------------------------------*/
const putData = (data) => {
  const url = `${urlAPI}/editar-administradores/${data.id}`;
  const token = localStorage.getItem("acces_token");
  const params = {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  };

  return fetch(url, params)
    .then((res) => {
      return res.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
};

const deleteData = (data) => {
  const url = `${urlAPI}/eliminar-administradores/${data}`;
  const token = localStorage.getItem("acces_token");
  const params = {
    method: "DELETE",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  };

  return fetch(url, params)
    .then((res) => {
      return res.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
};
