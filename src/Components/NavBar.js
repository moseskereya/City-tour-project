import React from 'react'
import "./Nav.css"
const NavBar = () => {
    return (
        <div>
         <nav className="Nav">
             <div>CITY TOUR</div>
             <ul>
                 <li>Home</li>
                 <li>About</li>
                 <li className="active">Cities</li>
             </ul>
         </nav>
        </div>
    )
}

export default NavBar
