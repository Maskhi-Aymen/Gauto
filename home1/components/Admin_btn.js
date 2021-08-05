import '../style/Admin_btn.css'
import React from 'react';

function Admin_btn({handleAdminclick}) {
  const handleClick=()=>{handleAdminclick()}

  return (
    
  <button className ="Admin_btn" onClick= {handleClick}  >Admin</button>
  
    

  );
   
   
 
}

export default Admin_btn;
