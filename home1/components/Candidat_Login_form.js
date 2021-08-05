import React from 'react';
import {useHistory,Redirect} from 'react-router-dom'

import '../style/Login_form.css';

function Candidat_Login_form ({isShowCandidatLogin}) {

  let history=useHistory();

  
  
  const handlverification2 =function(){
    let x=document.getElementById('u2').value;
    let y=document.getElementById('p2').value;
    if (x=='aymen' && y=="123") history.push('/condidat')
    else return <Redirect to='/'/>
 }



  
  return (
    <div className={`${isShowCandidatLogin ? "active" : ""}show`}>
      <div className="login-form">
        <div className ="form_box_solid">
          <form className='form'>
            <h1 className="login-text">Candidat</h1>
            <label>Username</label><br></br>
            <input
            type = "text"
            name = "Username"
            className= "login-box" id='u2'
            /> <br></br>
            <label>Password</label><br></br>
            <input
            type = "password"
            name = "Password"
            className= "login-box" id='p2'
            /> <br></br>
            <input type ="submit" value ="LOGIN" className="login-btn" onClick={handlverification2} />
          </form>
        </div>
      </div> 
    
    </div>
   
  
    

  );
   
   
 
}

export default Candidat_Login_form;
