
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";




import Candidat from './candidat.js'
import Veh1 from './vehicule/veh1'
import Emp1 from './employe/emp1.js'
import Nav from './component/navbar.js';
import Footer from "./home1/components/Footer.js";

export default function Acceuiladmin({authorized}) {
  if(!authorized){
    return <Redirect to='/'/>
  }
  return (
    <Router>
      <div>
        <Nav/>
        <Switch>
          <Route path="/employe">
            <Emp1 />
          </Route>
          <Route path="/vehicule">
            <Veh1 />
          </Route>
          <Route path="/">
            <Candidat />
          </Route>
        </Switch>
      </div>
      <Footer/>
    </Router>
  );
}

function Home() {
  return (<Candidat/>);
}

function vehicule() {
  return (<Emp1/>);
}

function employe() {
  return (<Veh1/>);
}
