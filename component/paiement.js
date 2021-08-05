import{React,Component} from 'react'
import './blo.css'

class Paiement extends Component{
    render(){
        const {ncd,nco,nt,ne}=this.props
        return(
            <div>
                <fieldset className='pai'>
                    <legend><h1>information de paiement </h1></legend>
                    <table>
                        <tbody>
                            <tr>
                                <td>nombre de sience de code :</td>
                                <td>{ncd}</td>
                            </tr>
                            <tr>
                                <td>nombre de sience de conduit :</td>
                                <td>{nco}</td>
                            </tr>
                            <tr>
                                <td>total prix non payee :</td>
                                <td>{nt}</td>
                            </tr>
                            <tr>
                                <td>frait d'examen :</td>
                                <td>{ne}</td>
                            </tr>
                        </tbody>
                    </table>

                </fieldset>

            </div>
        )
    }

}
export default Paiement