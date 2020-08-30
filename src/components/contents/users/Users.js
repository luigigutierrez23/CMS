import React from "react";
import $ from "jquery";
import "datatables.net";
import "datatables.net-bs4";
import "datatables.net-responsive";

export default function Users() {
  /*------------------------------------
  Ejecutamos Data table
  --------------------------------------*/
  $(document).ready(function () {
    $(".table").DataTable();
  });

  return (
    <div className="content-wrapper" style={{ minHeight: "494px" }}>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">User</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="card card-primary card-outline">
                <div className="card-header"></div>
                <div className="card-body">
                  <table
                    className="table table-striped dt-responsive"
                    style={{ width: "100%" }}
                  >
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Usuario</th>
                        <th>Email</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>admin</td>
                        <td>admin@lala.com</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
