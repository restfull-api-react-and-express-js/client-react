import React from "react";
import { Route } from "react-router-dom";
import Home from "../pages/Home";
import Siswa from "../pages/Siswa";
import SiswaCreate from "../pages/Siswa/Create";

const ContainerRoutes = () => {
  return (
    <div className="container">
      <Route path="/" exact component={Home} />
      <Route path="/siswa" exact component={Siswa} />
      <Route path="/siswa/create" exact component={SiswaCreate} />
    </div>
  );
};

export default ContainerRoutes;
