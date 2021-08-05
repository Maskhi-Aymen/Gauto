import React , {useState} from 'react';
import '../style/First_page.css';
import '../style/Login_form.css';
import Candidat_Login_form from './Candidat_Login_form' ;
import Admin_Login_form from './Admin_Login_form' ;
import Admin_btn from './Admin_btn';
import Candidat_btn from './Candidat_btn';
import Footer from './Footer';


function First_page() {
  const [isShowAdminLogin ,setisShowAdminLogin] = useState(true) 
  const [isShowCandidatLogin ,setisShowCandidatLogin] = useState(true)
  const handleAdminclick=() =>{setisShowAdminLogin((isShowAdminLogin)=> !isShowAdminLogin)}
  const handleCandidatclick=() =>{setisShowCandidatLogin((isShowCandidatLogin)=> !isShowCandidatLogin)}
  return (
    
    
     <div className='First_page'> 
     <Admin_btn handleAdminclick={handleAdminclick}/>
     <Candidat_btn handleCandidatclick={handleCandidatclick} />
     <Admin_Login_form isShowAdminLogin ={isShowAdminLogin}/>
     
     <Candidat_Login_form isShowCandidatLogin={isShowCandidatLogin}/>
     
     <Footer/>

    </div>

  );
   
   
 
}

export default First_page;
