// import React from 'react';
// import Home from './Components/Homepage';
// import About from './Components/AboutPage';
// import Contact from './Components/ContactPage';
// import './App.css';
// import './Components/style.css'
// function App(){
//   return(
//     <>
//       <Home/>
//       <About/>
//       <Contact/>
//     </>
//   );
// }
// export default App;
// import React from "react";
// import Login from './Components/LoginForm'
// import './Components/style.css'

// function App(){
//   return(
//     <div>
//     <Login/>
//     </div>
//   );
// }
// export default App;
// import React from "react";
// import Login from './Components/LoginForm'
// import Home from './Components/Homepage'
// import About from './Components/AboutPage'
// import Contact from "./Components/ContactPage";
//  import './Components/style.css'
//  import Signup from "./Components/Signup";
// import { BrowserRouter,Routes , Route, Link } from "react-router-dom";

// function App(){
//   return(
//     <BrowserRouter>
//     <nav>
//      <ul>
//       <li><Link to="/Home" style={{ textDecoration: 'none'}}>Home</Link></li>
//       <li><Link to="/About" style={{ textDecoration: 'none'}}>About</Link></li>
//       <li><Link to="/Contact" style={{ textDecoration: 'none'}}>Contact</Link></li>
//       <li><Link to="/Login" style={{ textDecoration: 'none'}}>Login</Link></li>
//       <li><Link to="/Signup" style={{ textDecoration: 'none'}}>Signup</Link></li>
//      </ul>
//      </nav>
//     <Routes>
//       <Route path="/About" element={<About/>}/>
//       <Route path="/Home" element={<Home/>}/>
//       <Route path="/Login" element={<Login/>}/>
//       <Route path="/Signup" element={<Signup/>}/>
//       <Route path="/Contact" element={<Contact/>}/>
//     </Routes>
//     </BrowserRouter>
    
//   );
// }
// import React from "react";
// import Logins from './Components/Logins';
// import Signs from './Components/Signs';
// import './Components/style.css'
// import { BrowserRouter,Routes , Route, Link } from "react-router-dom";
// function App(){
//   return(
//     <BrowserRouter>
//     <nav >
//          <ul >
//           <li><Link to="/Logins" style={{ textDecoration: 'none'}}>Signin</Link></li>
//           <li><Link to="/Signs" style={{ textDecoration: 'none'}}>Sign up</Link></li>
//           </ul>
//          </nav>
//         <Routes>
//           <Route path="/Logins" element={<Logins/>}/>
//           <Route path="/Signs" element={<Signs/>}/>
//         </Routes>
//         </BrowserRouter>
//   );
// }
// export default App;
import React from "react";
import Slides from "./Components/Slides"
import Navbar from "./Components/Navbar"
import Mat from "./Components/mat"
import Home from "./Components/Homepage"
import Youtube from "./Components/Youtube"
import Cer from "./Components/certi"
import Lek from "./Components/lak"
import Cards from "./Components/cards"
import Footer from "./Components/footer"
function App(){
  return(
    <>
    <Navbar/>
    <Slides/>
    <Home/>
    <Mat/>
    <Youtube/>
    <Cer/>
    <Lek/>
  <center>  <h2>Updated News</h2></center>
  <center><p className="pp">Stay tuned to this page to find out what's happening in Technical Hub. You can also check out our social media channels for instant updates.</p></center>
    <Cards/>
    <Footer/>
    </>
  );
}
export default App;