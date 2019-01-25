import React from "react";
import { Route } from "react-router-dom";
import Home from "../pages/Home";
import Siswa from "../pages/Siswa";

const ContainerRoutes = () => {
  return (
    <div className="container">
      <Route path="/" exact component={Home} />
      <Route path="/siswa" exact component={Siswa} />
    </div>
  );
};

export default ContainerRoutes;
