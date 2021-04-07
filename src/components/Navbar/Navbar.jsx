import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
   return (
      <div className="container">
         <nav className="nav">
            <ul>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/people">People</Link></li>
               <li><Link to="/planets">Planets</Link></li>
               
            </ul>
         </nav>
      </div>
   )
}

export default Navbar
