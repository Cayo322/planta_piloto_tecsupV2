/*!
=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import EquipoChancado from "views/EquipoChancado";
import OpCircuito from "views/OpCircuito";
import ChancadoraQuijada from "./views/equipos/ChancadoraQuijada";
import ZarandaVibratoria from "views/equipos/ZarandaVibratoria";
import ChancadoraRodillos from "views/equipos/ChancadoraRodillos";
import FajaTransportadora from "views/equipos/FajaTransportadora";


import TolvaFinos from "views/equipos/TolvaFinos";
import MolinoBolas from "views/equipos/MolinoBolas";
import BombaLodos from "views/equipos/BombaLodos";
import Hidrociclon from "views/equipos/Hidrociclon";


import TanqueAcondicionador from "views/equipos/TanqueAcondicionador";
import CeldasRougher from "views/equipos/CeldasRougher";
import CeldasScavenger from "views/equipos/CeldasScavenger";
import BombaColas from "views/equipos/BombaColas";
import CeldasCleaner from "views/equipos/CeldasCleaner";

import EspesadorRelave from "views/equipos/EspesadorRelave";
import FiltroTambor from "views/equipos/FiltroTambor";

import AdminLayout from "layouts/Admin.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route path="/EquipoChancado" component={EquipoChancado} />
      <Route path="/OpCircuito" component={OpCircuito} />
      <Route path="/equipo/chancadora-quijada" component={ChancadoraQuijada} />
      <Route path="/equipo/zaranda-vibratoria" component={ZarandaVibratoria} />
      <Route path="/equipo/chancadora-rodillos" component={ChancadoraRodillos} />
      <Route path="/equipo/faja-transportadora" component={FajaTransportadora} />
      
      <Route path="/equipo/tolva-finos" component={TolvaFinos} />
      <Route path="/equipo/molino-bolas" component={MolinoBolas} />
      <Route path="/equipo/bomba-lodos" component={BombaLodos} />
      <Route path="/equipo/hidrociclon" component={Hidrociclon} />

      <Route path="/equipo/tanque-acondicionador" component={TanqueAcondicionador} />
      <Route path="/equipo/celdas-rougher" component={CeldasRougher} />
      <Route path="/equipo/celdas-scavenger" component={CeldasScavenger} />
      <Route path="/equipo/celdas-cleaner" component={CeldasCleaner} />
      <Route path="/equipo/bomba-colas" component={BombaColas} />

      <Route path="/equipo/espesador-relave" component={EspesadorRelave} />
      <Route path="/equipo/filtro-tambor" component={FiltroTambor} />

      <Redirect from="/" to="/admin/dashboard" />
    </Switch>
  </BrowserRouter>
);
