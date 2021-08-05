import {React ,Component} from 'react';
import './test.css';
import Rech from '../autre/recherche.js';

class Listecon extends Component
{
      
   render(){
       return(
           <div>
               <fieldset className='bloc_principale22'> 
                   <div id='rechechefixe'><Rech/></div>
                   <br></br><br></br>

               </fieldset>
           </div>
       )
   }
}
export default Listecon








