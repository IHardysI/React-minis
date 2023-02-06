import React from "react"
import logo from "../img/reactjs-icon.svg"

function Navbar() {
    return(
        <nav className="navbar">   
            <img src={logo} alt='logo' className="navbar__img"></img>
            <h2 className="navbar__h2">ReactFacts</h2>
            <p className="navbar__p">React Course - Project 1</p>
        </nav>
    )
}

export default Navbar