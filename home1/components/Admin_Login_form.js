import React from 'react';
import '../style/Login_form.css';
import {useHistory ,Redirect} from 'react-router-dom'


function Admin_Login_form ({isShowAdminLogin}) {
  let history=useHistory();


 const handlverification =function(){
     let x=document.getElementById('u1').value;
     let y=document.getElementById('p1').value;
     if (x=='aymen' && y=="123") {history.push('/admin');}
     else return <Redirect to='/'/>
  }




  return (
    <div className={`${isShowAdminLogin ? "active" : ""}show`}>
      <div className="login-form">
        <div className ="form_box_solid">
          <form className='form'>
            <h1 className="login-text">Admin</h1>
            <label>Username</label><br></br>
            <input
            type = "text"
            name = "Username"
            className= "login-box" id='u1'
            /> <br></br>
            <label>Password</label><br></br>
            <input
            type = "password"
            name = "Password"
            className= "login-box" id='p1'
            /> <br></br>
            <input type ="submit" value ="LOGIN" className="login-btn"  onClick={handlverification} />
          </form>
        </div>
      </div> 
    
    </div>
   
  
    

  );
   
   
 
}

export default Admin_Login_form;
