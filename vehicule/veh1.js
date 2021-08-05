import {React,useState } from 'react';
import './style3.css';
import data from './MOCK_DATA3.json'
import Infoveh from './vehcompo/infoveh';
import './vehcompo/stylevehcmpo.css'
import voi from './vehcompo/voiture.png'


export default function Veh1()
{
    const [searchteam,setsearchteam]=useState("");
    const [id1,setid1]=useState('');
    const [id2,setid2]=useState('');
    const [id3,setid3]=useState('');
    const [id4,setid4]=useState('');
    const [id5,setid5]=useState('');
    const [id6,setid6]=useState('');
    const [id7,setid7]=useState('');

        return(
            <div>
                <fieldset className='bodyinfo'>
                    
                    <div className='blocrecherche'>
                       <input type='text' id='recherche' placeholder='Rechercher la marque de voiture' onChange={ event =>{setsearchteam(event.target.value); }} /> 
                   </div>
         
                    {data.filter((val)=>{
                      return val.marque.toLowerCase().includes(searchteam.toLowerCase());
                          }).map((val,key)=>{ let valeur=val;
                           return (<div key='val.immatricule' id='liste'>
                                   <table>
                                      <tbody>
                                         <tr>
                                            <button onClick={(e)=>{
                                                setid1(val.assurence)
                                                setid2(val.immatricule)
                                                setid3(val.visite)
                                                setid4(val.marque)
                                                setid5(val.model)
                                                setid6(val.vig)
                                                setid7(val.dernierentretien)                                                                    
                                                    }}   >

                                             <td id='tv'>{val.immatricule} </td>
                                             <td id='tv'>{val.marque} </td>
                                            </button>
                                         </tr>
                                    </tbody>
                                    </table>
                                    </div>)
                                   })}
                </fieldset>
                <fieldset className='bodyinfoveh'>
                <Infoveh imm={id2} mod={id5} marque={id4}
                vig={id6} assurence={id1} visite={id3} de={id7}
                />
                
                </fieldset>
                

                
            </div>
        
        )

}
