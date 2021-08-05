import {React ,Component} from 'react';
import './blo.css'
import imag2 from './icon/iconpersonne.png'
class Items extends Component
{

    render(){
        const {items}=this.props
        const theitems=items.map((item) =>{
            return(
                <div className='recc' key={item.cin}>
                  <p>{item.cin} - {item.name} {item.pre}<img src={imag2} id='imag2'></img> </p>
                    
                </div>
            )
        } )

        return(
            <div>
                
                   {theitems}  
                
               
            </div>
        )
    }
}
export default Items