import React from "react";
import { urlAPI } from "../../../config/Config";

export default function Articles() {
  const wallpaper1 = `${urlAPI}/mostrar-img-articulo/lorem-ipsum-1+3576.jpg`;

  return (
    <div className="content-wrapper" style={{ minHeight: "494px" }}>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">Articles</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="card card-primary card-outline">
                <div className="card-header">
                  <h5 className="m-0">
                    <button className="btn btn-primary">Crear nuevo</button>
                  </h5>
                </div>
                <div className="card-body">
                  <table
                    className="table table-striped"
                    style={{ width: "100%" }}
                  >
                    <thead>
                      <tr>
                        <th>#</th>
                        <th width="320px">Portada</th>
                        <th>Titulo</th>
                        <th>Intro</th>
                        <th>Url</th>
                        <th>Contenido</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <img src={wallpaper1} className="img-fluid" />
                        </td>
                        <td>Titulo</td>
                        <td>Intro</td>
                        <td>Url</td>
                        <td>
                          <h2>Lorem ipsum 1</h2>
                          <img
                            src="http://localhost:4000/mostrar-img/1219.jpg"
                            class="py-3 img-fluid"
                          />
                          <div class="text-muted">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Libero quod hic culpa commodi. Repudiandae
                            debitis nisi ab! Numquam accusantium, dolores rerum
                            natus officia, repellendus dolorem nesciunt
                            corporis, dolore debitis esse.Illum modi deserunt
                            fugit quidem saepe dolorum nam cum ipsam sequi
                            pariatur explicabo tempora, quis sint debitis
                            reprehenderit delectus quos, possimus natus nisi
                            aliquam id. Assumenda reiciendis soluta sequi
                            corrupti.
                          </div>
                          <br />
                          <div className="text-muted">
                            Voluptate ut, cum beatae natus eos quidem blanditiis
                            non temporibus est. Illum numquam rerum eum
                            molestias quae, necessitatibus quis, illo, vitae
                            blanditiis consectetur veniam libero perspiciatis
                            perferendis laborum qui asperiores.
                          </div>
                          <br />
                          <div className="text-muted">
                            Nulla, unde at hic distinctio quia id! Corporis
                            aspernatur placeat recusandae, dicta in dolores
                            dignissimos tempora explicabo dolore suscipit a
                            quis, iusto nesciunt unde ab animi architecto alias
                            veniam modi.Vero nisi libero corporis quis voluptate
                            quibusdam est sint! Molestias asperiores, vero
                            voluptas illum ducimus repudiandae porro eos odit
                            dolorum culpa at ex quod optio non iure, sint iste?
                            Modi.
                          </div>
                        </td>
                        <td>
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-warning rounded-circle mr-2"
                            >
                              <i className="nav-icon fas fa-pencil-alt"></i>
                            </button>

                            <button
                              type="button"
                              className="btn btn-danger rounded-circle"
                            >
                              <i className="nav-icon fas fa-trash"></i>
                            </button>
                          </div>
                        </td>
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
