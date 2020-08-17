import React from "react";
import Logo from "./img/AdminLTELogo.png";
import UserPhoto from "./img/user2.jpg";

export default function Sidebar() {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <a href="#/" className="brand-link">
        <img
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: 0.8 }}
          src={Logo}
        />

        <span className="brand-text font-weight-light">CMS</span>
      </a>

      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              className="img-circle elevation-2"
              alt="user"
              src={UserPhoto}
            ></img>
          </div>
          <div className="info">
            <a href="#/" className="d-block">
              Administrator
            </a>
          </div>
        </div>

        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item">
              <a href="/" className="nav-link">
                <i className="nav-icon fas fa-user-lock"></i>
                <p>Administrator</p>
              </a>
            </li>

            <li className="nav-item">
              <a href="/slide" className="nav-link">
                <i className="nav-icon fas fa-sliders-h"></i>
                <p>Slides</p>
              </a>
            </li>

            <li className="nav-item">
              <a href="/gallery" className="nav-link">
                <i className="nav-icon fas fa-images"></i>
                <p>Gallerys</p>
              </a>
            </li>

            <li className="nav-item">
              <a href="/articles" className="nav-link">
                <i className="nav-icon far fa-file"></i>
                <p>Articles</p>
              </a>
            </li>

            <li className="nav-item">
              <a href="/users" className="nav-link">
                <i className="nav-icon fas fa-users"></i>
                <p>Users</p>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
