import React from "react";
import { urlAPI } from "../../../config/Config";
import $ from "jquery";
import "datatables.net";
import "datatables.net-bs4";
import "datatables.net-responsive";

export default function Articles() {
  const wallpaper1 = `${urlAPI}/mostrar-img-articulo/lorem-ipsum-1+3576.jpg`;
  /*------------------------------------
  Creación de Data Set
  --------------------------------------*/
  const dataSet = [
    [
      1,
      wallpaper1,
      "lorem-ipsum-1",
      "Lorem Ipsum 1.",
      "lalalal",
      '<h2>Lorem ipsum 1</h2><img src="http://localhost:4000/mostrar-img/3576.jpg" className="py-3 img-fluid"alt=""/><div className="text-muted">Lorem ipsum, dolor sit amet consectetur adipisicingelit. Libero quod hic culpa commodi. Repudiandaedebitis nisi ab! Numquam accusantium, dolores rerumnatus officia, repellendus dolorem nesciuntcorporis, dolore debitis esse.Illum modi deseruntfugit quidem saepe dolorum nam cum ipsam sequipariatur explicabo tempora, quis sint debitisreprehenderit delectus quos, possimus natus nisi aliquam id. Assumenda reiciendis soluta sequicorrupti.</div><br /><div className="text-muted">Voluptate ut, cum beatae natus eos quidem blanditiisnon temporibus est. Illum numquam rerum eummolestias quae, necessitatibus quis, illo, vitaeblanditiis consectetur veniam libero perspiciatisperferendis laborum qui asperiores.</div><br /> <div className="text-muted">Nulla, unde at hic distinctio quia id! Corporisaspernatur placeat recusandae, dicta in doloresdignissimos tempora explicabo dolore suscipit aquis, iusto nesciunt unde ab animi architecto aliasveniam modi.Vero nisi libero corporis quis voluptatequibusdam est sint! Molestias asperiores, verovoluptas illum ducimus repudiandae porro eos oditdolorum culpa at ex quod optio non iure, sint iste?Modi.</div>',
      "dsa5d4ad4ada5dsa",
    ],
  ];
  /*------------------------------------
  Ejecutamos Data table
  --------------------------------------*/
  $(document).ready(function () {
    $(".table").DataTable({
      data: dataSet,
      columns: [
        { title: "#" },
        {
          title: "Portada",
          render: function (data) {
            return `<img style="width:320px" src="${data}">`;
          },
        },
        { title: "url" },
        { title: "Titulo" },
        { title: "Intro" },
        { title: "Contenido" },
        {
          title: "Acciones",
          render: function (data) {
            return `

              <a href="#">
              
              <svg style="color:black; background:orange; border-radius: 100%; width:35px; line-height:35px; text-align: center; padding:10px;"
              aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pencil-alt" class="svg-inline--fa fa-pencil-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"></path></svg>

              </a>

              <a href="#">

              <svg style="color:white; background:#c00; border-radius: 100%; width:35px; line-height:35px; text-align: center; padding:10px;"
              aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" class="svg-inline--fa fa-trash-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path></svg>

              </a>     
              `;
          },
        },
      ],
    });
  });

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
                    className="table table-striped dt-responsive"
                    style={{ width: "100%" }}
                  ></table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
