import '../style/Candidat_btn.css'
import React from 'react';

function Candidat_btn({handleCandidatclick}) {
  const handleClick=()=>{handleCandidatclick()}
  return (
    
  <button className ="Candidat_btn" onClick= {handleClick} >Candidat</button>
  
    

  );
   
   
 
}

export default Candidat_btn;
