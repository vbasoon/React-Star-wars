import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
   return (
      <div className="container">
         <nav className="nav">
            <ul>
               <li><Link to="/" className="link">Home</Link></li>
               <li><Link to="/people" className="link">People</Link></li>
               <li><Link to="/planets" className="link">Planets</Link></li>
               
            </ul>
         </nav>
      </div>
   )
}

export default Navbar
