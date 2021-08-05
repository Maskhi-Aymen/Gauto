import{React,Component} from 'react'
import './blo.css'

class Plan extends Component{
    render(){
        const {d1,d2,d3,d4,d5,d6,d7,rv1,rv2,rv3,rv4,rv5,rv6,rv7}=this.props
        return(
            <div>
                <fieldset className='pl22'>
                    <legend><h1>Planification</h1></legend>
                    <table className='plani'>
                        <tbody >
                            <tr>
                                <td>Date :</td>
                                <td>{d1}</td>
                                <td>{d2}</td>
                                <td>{d3} </td>
                                <td>{d4} </td>
                                <td>{d5} </td>
                                <td>{d6} </td>
                                <td>{d7} </td>
                            </tr>
                            <tr>
                                <td>Science :</td>
                                <td>{rv1}</td>
                                <td>{rv2}</td>
                                <td>{rv3} </td>
                                <td>{rv4} </td>
                                <td>{rv5} </td>
                                <td>{rv6} </td>
                                <td>{rv7} </td>
                            </tr>
                           
                        </tbody>
                    </table>

                </fieldset>

            </div>
        )
    }

}
export default Plan