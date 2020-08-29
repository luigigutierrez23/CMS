import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import jwtDecode from "jwt-decode";

//Componente Login
import Login from "./components/login/Login";

//Componentes fijos
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";

//Componentes Dinamicos
import Administrators from "./components/contents/administrators/Administrators";
import Slide from "./components/contents/slide/Slide";
import Gallery from "./components/contents/gallery/Gallery";
import Users from "./components/contents/users/Users";
import Articles from "./components/contents/articles/Articles";
import Error404 from "./components/contents/error404/Error404";

export default function App() {
  const auth = getAccesToken();

  if (!auth) {
    return <Login></Login>;
  }
  return (
    <div className="sidebar-mini">
      <div className="wrapper">
        <Header />

        <Sidebar />

        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Administrators} />
            <Route exact path="/slide" component={Slide} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/articles" component={Articles} />
            <Route component={Error404} />
          </Switch>
        </BrowserRouter>

        <Footer />
      </div>
    </div>
  );
}

/*------------------------------------
Obtener acceso al CMS validando el token
--------------------------------------*/

const getAccesToken = () => {
  const accessToken = localStorage.getItem("acces_token");
  const id = localStorage.getItem("id");
  const user = localStorage.getItem("user");

  if (
    (!accessToken || accessToken === null) &&
    (!id || id === null) &&
    (!user || user === null)
  ) {
    return false;
  }

  const metaToken = jwtDecode(accessToken);

  if (!metaToken.data) {
    return false;
  }

  if (
    tokenExpire(accessToken, metaToken) ||
    metaToken.data._id !== id ||
    metaToken.data.usuario !== user
  ) {
    return false;
  } else {
    return true;
  }
};

/*------------------------------------
Verificar fecha de expiración token
--------------------------------------*/

const tokenExpire = (accessToken, metaToken) => {
  const seconds = 60;

  const { exp } = metaToken;
  const now = (Date.now() + seconds) / 1000;

  return exp < now;
};
