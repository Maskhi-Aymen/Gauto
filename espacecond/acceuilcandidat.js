import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";



import Navbarcond from './navbarcond.js'
import Espacecour from './espacecour.js'
import Bodyinfo from './bodyinfo.js'
import Footer from "../home1/components/Footer.js";


export default function Acceuilcand({authorized}) {
  if(!authorized){
    return <Redirect to='/'/>
  }

  return (
    <Router>
      <div>
        <Navbarcond/>

       
        <Switch>
          <Route path="/lestest">
            <Espacecour />
          </Route>
          <Route path="/">
            <Bodyinfo />
          </Route>
        </Switch>
      </div>
      <Footer/>
    </Router>
  );
}

function Ho() {
  return (<Bodyinfo/>);
}

function lestest() {
  return (<Espacecour/>);
}