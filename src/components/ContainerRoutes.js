import React from "react";
import { Route } from "react-router-dom";
import Login from "../pages/Login";
import LogOut from "../pages/LogOut";
import Home from "../pages/Home";
import Siswa from "../pages/Siswa";
import SiswaCreate from "../pages/Siswa/Create";
import SiswaEdit from "../pages/Siswa/Edit";

const ContainerRoutes = () => {
  return (
    <div className="container">
      <Route path="/login" exact component={Login} />
      <Route path="/logout" exact component={LogOut} />
      <Route path="/" exact component={Home} />
      <Route path="/siswa" exact component={Siswa} />
      <Route path="/siswa/create" exact component={SiswaCreate} />
      <Route path="/siswa/edit/:id" exact component={SiswaEdit} />
    </div>
  );
};

export default ContainerRoutes;
