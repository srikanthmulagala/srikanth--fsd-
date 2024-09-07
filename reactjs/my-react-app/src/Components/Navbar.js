import React from "react";
import Logins from './Logins';
import Signs from './Signs';
import './style.css'
import p1 from "./img/logo.jpg"
import { BrowserRouter,Routes , Route, Link } from "react-router-dom";
function App(){
  return(
    
    <BrowserRouter> 
    <nav >
     <img src={p1} alt='' className='image2' style={{padding:'10px'}}></img> 
         <ul >
          <li><Link to="/Logins" style={{ textDecoration: 'none'}}>Signin</Link></li>
          <li><Link to="/Signs" style={{ textDecoration: 'none'}}>Sign up</Link></li>
          </ul>
         </nav>
        <Routes>
          <Route path="/Logins" element={<Logins/>}/>
          <Route path="/Signs" element={<Signs/>}/>
        </Routes>
        </BrowserRouter>
  );
}
export default App;