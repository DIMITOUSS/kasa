import logo from '../../assets/logo.svg'
import './header.scss'
import { NavLink } from 'react-router-dom'
import React, { useState } from 'react';

function Header() {
    const [activeLink, setActiveLink] = useState(""); // State to keep track of the active link

    // Function to handle click on link
    const handleLinkClick = (linkName) => {
        setActiveLink(linkName); // Update active link state
    };

    return (
        <header className="header"> 
            <img src={logo} alt="Kasa" className="header__logo"/>
            <nav className="header__link">
                <NavLink 
                    to="/" 
                    className={`header__link__active ${activeLink === "Accueil" ? "header__link__active" : "header__link__inactive"}`}
                    onClick={() => handleLinkClick("Accueil")}>
                    Accueil
                </NavLink>
                <NavLink 
                    to="/about" 
                    className={`header__link__active ${activeLink === "A Propos" ? "header__link__active" : "header__link__inactive"}`}
                    onClick={() => handleLinkClick("A Propos")}>
                    A Propos
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;
