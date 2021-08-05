import {React,  Component } from 'react';
import './style.css';
import Info from '../component/infoperso.js'
import Paiement from '../component/paiement.js'
import Plan from '../component/planification.js'


class Bodyinfo extends Component
{
    state={
        info:{name:'aymen' ,pre:'maskhi', num:"50554984" ,ad:'oued ellil'},
        paiement:{ncd:'5', nco:'26', nt:'125' ,ne:'100'},
        date:{d1:'25/07/2021',d2:'26/07/2021',d3:'27/07/2021',d4:'28/07/2021',d5:'29/07/2021'
        ,d6:'30/07/2021',d7:'31/07/2021'},
        rdv:{rv1:'sc code à 14h',rv2:'',rv3:'',rv4:'',rv5:'',
        rv6:'',rv7:'sc code à 8h'}
    }
    render(){
        return(
        
            <div >
                <fieldset className='bodyinfoespacecond'>
                
                    <Info name={this.state.info.name} pre={this.state.info.pre} num={this.state.info.num} ad={this.state.info.ad} />
                    <Paiement ncd={this.state.paiement.ncd} nco={this.state.paiement.nco} nt={this.state.paiement.nt} ne={this.state.paiement.ne} />
                    <div id='encentre'><Plan d1={this.state.date.d1} d2={this.state.date.d2} d3={this.state.date.d3} d4={this.state.date.d4} d5={this.state.date.d5}
                    d6={this.state.date.d6} d7={this.state.date.d7} rv1={this.state.rdv.rv1} rv2={this.state.rdv.rv2}  rv3={this.state.rdv.rv3} rv4={this.state.rdv.rv4} rv5={this.state.rdv.rv5} 
                    rv6={this.state.rdv.rv6} rv7={this.state.rdv.rv7}  /></div>
                    <div id="inter">!</div>
                    <div id='attention'>s'il y a quelque probleme , vous pouvez contactez l'auto-ecole </div>

                </fieldset>
               
            </div>
          
        )
    }
}
export default Bodyinfo