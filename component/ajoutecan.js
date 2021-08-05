import {React,Component}  from 'react';
import './test.css'

class Ajoutecan extends Component
{
    render(){
        return(
            <div className='formnewcandidat'>
                <form>
                    <table>
                        <tbody>
                            <tr>
                                <td>Nom </td>
                                <td><input type='text' id='ncnom'></input> </td>
                                <td>Prenom </td>
                                <td><input type='text' id='ncprenom'></input> </td>
                            </tr>
                            <tr>
                                <td>CIN </td>
                                <td><input type='text' id='nccin'></input> </td>
                                <td>Adresse</td>
                                <td><input type='text' id='ncadresse'></input> </td>
                            </tr>
                            <tr>
                                <td>Mail</td>
                                <td><input type='text' id='ncmail'></input> </td>
                                <td>Num Tel</td>
                                <td><input type='text' id='ncnum'></input> </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
}
export default Ajoutecan