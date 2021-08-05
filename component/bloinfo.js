import{React,Component} from 'react'
import './blo.css'
import Info from './infoperso.js'
import Paiement from './paiement.js'
import Plan from './planification.js'


class Blocdroit extends Component{
    render(){
        return(
            <div>
                <fieldset className='bloc2'>
                    <Info name='aymen' pre='maskhi' num="50554984" ad='oued ellil' />
                    <Paiement ncd='5' nco='26' nt='125' ne='100' />
                    <Plan d1='25/07/2021'd2='26/07/2021'd3='27/07/2021'd4='28/07/2021'd5='29/07/2021'
                    d6='30/07/2021'd7='31/07/2021'rv1='sc code à 14h'rv2=''rv3=''rv4=''rv5=''
                    rv6=''rv7='sc code à 8h' />

                </fieldset>

            </div>
        )
    }

}
export default Blocdroit 