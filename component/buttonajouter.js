import {React,useState } from 'react';
import Popup from '../autre/popup.js';
import Ajoutecan from './ajoutecan.js';
import hh from './icon/plus.png';
import './test.css'

function Buttonajouter() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return <div>
    <button onClick={togglePopup}><img src={hh} id="re" alt='rechercher'></img></button>
    
    {isOpen && <Popup
      content={<>
      <div id='styleformaj'>
        <b>les informations du condidat</b>
        <p id='st' ><Ajoutecan/></p>
        <button id='boo3'>submit</button></div>
      </>}
      handleClose={togglePopup}
    />}
  </div>
}

export default Buttonajouter;