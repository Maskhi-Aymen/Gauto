import {React ,useState} from 'react';
import'./style2.css'
import data from './MOCK_DATA2.json'



  export default function Rech() {
    const [searchteam,setsearchteam]=useState("");
   
    return (
      <div>
        <div className='blocrecherche'>
         <input type='text' id='recherche' placeholder='Rechercher le nom d employee' onChange={event =>{setsearchteam(event.target.value)}} />    
         <br></br>
            <table>
                 <tbody>
                   <tr>
                     <td id='tv2'> CIN </td>
                     <td id='tv2'> NOM ET PRENOM</td>
                     <td id='tv2'> TELEPHONE </td>
                     <td id='tv2'> POSTE </td>
                     <td id='tv2'> SALAIRE</td>
                   </tr>
                 </tbody>
               </table>
         </div>
         
         {data.filter((val)=>{
                      return val.nom.toLowerCase().includes(searchteam.toLowerCase());
                  }).map((val,key)=>{
           return (<div key='val.cin' id='liste'>
               <table>
                 <tbody>
                   <tr>
                     <td id='tv'>{val.cin} </td>
                     <td id='tv'>{val.nom} {val.prenom}</td>
                     <td id='tv'>{val.tel} </td>
                     <td id='tv'>{val.poste} </td>
                     <td id='tv'>{val.salaire}</td>
                   </tr>
                 </tbody>
               </table>
                    </div>)
         })}
         



      </div>
  
    );
    
  }