import {React,  Component } from 'react';
import './style.css';
import Itemscours from './itemscours.js';



class Espacecour extends Component
{
    state={cours:[{c1:'cour1',q1:'qestion1',q2:'question2',},
    {c1:'cour2',q1:'qestion1',q2:'question2',},
    {c1:'cour3',q1:'qestion1',q2:'question2',},
    {c1:'cour4',q1:'qestion1',q2:'question2',},
    {c1:'cour5',q1:'qestion1',q2:'question2',},    {c1:'cour6',q1:'qestion1',q2:'question2',},
    {c1:'cour7',q1:'qestion1',q2:'question2',},


],}
    render(){
        return(
        
            <div >
                <fieldset className='bodyinfo12321'>
                    <Itemscours items={this.state.cours}/>
                

                </fieldset>
               
            </div>
          
        )
    }
}
export default Espacecour