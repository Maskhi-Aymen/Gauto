import {React,  Component } from 'react';
import { Link } from 'react-router-dom'
import './Todo.css';



//<Link to="/">Gestion condidat</Link> 
//<Link to="/ab">Gestion vehicule</Link> 
//<Link to="/users">Gestion Employes</Link>


class Nav extends Component
{

    
    render(){
        return(
        
            <div className='navbar'>
               <nav className='container'>
                    <ul>
                       <li>
                         <Link to="/" >Gestion condidat</Link> 
                         <Link to="/vehicule" >Gestion vehicule</Link> 
                         <Link to="/employe" >Gestion Employes</Link>
                      </li>
                 </ul>
              </nav>
            </div>
          
        )
    }
}
export default Nav