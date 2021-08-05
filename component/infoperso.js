import{React,Component} from 'react'
import './blo.css'

class Info extends Component{
    render(){
        const {name,pre,num,ad}=this.props
        return(
            <div>
                <fieldset className='notre'>
                    <legend><h1>Information Personel</h1></legend>
                    <table>
                        <tbody>
                            <tr>
                                <td>Nom:</td>
                                <td>{name}</td>
                            </tr>
                            <tr>
                                <td>Prenom:</td>
                                <td>{pre}</td>
                            </tr>
                            <tr>
                                <td>Num tel:</td>
                                <td>{num}</td>
                            </tr>
                            <tr>
                                <td>Adresse:</td>
                                <td>{ad}</td>
                            </tr>
                        </tbody>
                    </table>

                </fieldset>

            </div>
        )
    }

}
export default Info