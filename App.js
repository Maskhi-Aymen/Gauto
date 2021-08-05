import React  from 'react';
import { BrowserRouter as Router,Route ,Switch} from 'react-router-dom';
import Home from './home1/components/First_page.js'; 
import './App.css';
import Acceuiladmin from './acceuiladmin.js';
import Acceuilcand from './espacecond/acceuilcandidat.js';



export default function App() {

 
  return (
    
      <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
       <Route exact path='/condidat' component={()=> <Acceuilcand authorized={true}/> }/>
       <Route exact path='/admin' component={()=> <Acceuiladmin authorized={true} /> } />
       <Route path='/:param' component={Home}/>
     </Switch>

     </Router>

   );

}


;




/*setinfo(changeinfo={
  immatricule:{valeur.immatricule} ,modele:{valeur.modele}, marque:{valeur.marque},
  vig:'' ,assurence:'val.assurence', visite:'val.visite', de:'val.dernierentretien',
 })*/
