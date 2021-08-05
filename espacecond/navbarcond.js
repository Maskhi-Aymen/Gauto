import {React,  Component } from 'react';
import { Link } from 'react-router-dom'
import './style.css';





class Navbarcond extends Component
{

    state={ name:'aymen',pre:'maskhi',}
    
    render(){
        return(
        
            <div className='navbar'>
               <nav className='container'>
                    <ul>
                       <li>
                           <Link to='/'>information personnel</Link> 
                           <Link to='/lestest'>cours</Link> 
                      </li>
                    </ul>
                    <div id="nomdecompte">{this.state.name} {this.state.pre}</div>
              </nav>
            </div>
          
        )
    }
}
export default Navbarcond