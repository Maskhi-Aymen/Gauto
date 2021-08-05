import{React,Component} from 'react'
import './stylevehcmpo.css'
import voi from './voiture.png';

class Infoveh extends Component{
    render(){
        const {imm,mod,marque,vig,visite,assurence,de}=this.props
        return(
            <div>
                <fieldset className='notre3'>
                
                    <table>
                        <tbody>
                            <tr>
                                <td><p style={{color: "rgba(9, 8, 22, 0.904)" }} >Papiers du véhicule</p> </td>
                            </tr>
                            <tr>
                                <td>validité vignette :</td>
                                <td>{vig}</td>
                            </tr>
                            <tr>
                                <td>validité assurence :</td>
                                <td>{assurence}</td>
                            </tr>
                            <tr>
                                <td>validité visite technique :</td>
                                <td>{visite}</td>
                            </tr>
                            <tr>
                                <td><p style={{color: "rgba(9, 8, 22, 0.904)" }} >Les entretiens quotidien</p> </td>
                            </tr>
                            <tr>
                                <td>vidange :</td>
                                <td>{de}</td>
                            </tr>
                            <tr>
                                <td>changement des filtres:</td>
                                <td>{de}</td>
                            </tr>
                            <tr>
                                <td>éléments de freinage :</td>
                                <td>{de}</td>
                            </tr>
                            <tr>
                                <td>les pneus:</td>
                                <td>{de}</td>
                            </tr>
                            <tr>
                                <td>les différentes courroies:</td>
                                <td>{de}</td>
                            </tr>
                        </tbody>
                    </table>

                </fieldset>
                <fieldset id='ffff'><img src={voi} id='gif'></img></fieldset>
                <fieldset className='notre21'>
                    <legend><h1>{marque}</h1></legend>
                    <table>
                        <tbody>
                            <tr>
                                <td>Imatricule :</td>
                                <td>{imm}</td>
                            </tr>
                            <tr>
                                <td>Modele :</td>
                                <td>{mod}</td>
                            </tr>
                            <tr>
                                <td>Nombre de cheveau : </td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>En service :</td>
                                <td>oui</td>
                            </tr>
                        </tbody>
                    </table>

                </fieldset>
                

            </div>
        )
    }

}
export default Infoveh