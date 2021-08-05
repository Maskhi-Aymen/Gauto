import {React ,useState} from 'react';
import'./recherche.css'
import gg from './ser.png';
import Buttonajouter from '../component/buttonajouter.js';
import data from '../MOCK_DATA.json'
import ds from '../component/icon/iconpersonne.png'


  export default function Rech() {
    const [searchteam,setsearchteam]=useState("");
   
    return (
      <div>
        <div className='blocrecherche22'>
         <input type='text' id='recherche22' placeholder='Rechercher' onChange={event =>{setsearchteam(event.target.value)}} />
         <button ><img src={gg} alt='ajouter' id="re"></img></button>
          <div id='fi'><Buttonajouter/></div>    
         </div>
         {data.filter((val)=>{
                      return val.nom.toLowerCase().includes(searchteam.toLowerCase());
                  }).map((val,key)=>{
           return <div key='val.cin' id='liste'  onClick={(e)=>{
                    alert('vvv')                                                                    
                }} >
             {val.nom} {val.prenom}</div> 
         })}
      </div>
  
    );
    
  }

