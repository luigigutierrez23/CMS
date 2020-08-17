import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

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
  const auth = false;

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
