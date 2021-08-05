import {React,  useState } from 'react';
import './App.css';
import Listecon from './component/listecon.js';
import Blocdroit from './component/bloinfo.js';

export default function Candidat () {
  const [id1,setid1]=useState('');
  const [id2,setid2]=useState('');
  const [id3,setid3]=useState('');
  const [id4,setid4]=useState('');
  const [id5,setid5]=useState('');
  const [id6,setid6]=useState('');
  const [id7,setid7]=useState('');
  return (
    <div>
      <div><Listecon/></div>
      <div><Blocdroit/></div>

    </div>
  )

  

}


