import React, { useState } from 'react';
import styles from "../Navbar/Navbar.css";
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
// import { navItems } from "./NavItems.jsx" // Uncomment if needed
// import { Button } from '../Buttons/Button.jsx'; // Uncomment if needed
// import { DropDown } from '../DropDown/DropDown.jsx'; // Uncomment if needed

export const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);

    return (
        <>
            <nav className="mainNav">
                <Link to="/" className="mainLogoDiv"> 
                    <img className="mainLogo" src="/Images/CredgrowLogo.png" alt="Credgrow Logo"/>
                </Link>

                <div className={showMediaIcons ? "navLinks mobile-menu-link" : "navLinks"}>
                    <ul className="nav_item">
                        <li className="navLinksItems">
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/credit-cards">Credit Cards</Link>
                            <Link to="/other-services">Other Services</Link>
                            {/* <button className="signInButton">Log in</button>
                            <button className="signUpButton">Sign Up</button> */}
                        </li>
                            <button className="signInButton">Log in</button>
                            <button className="signUpButton">Sign Up</button>
                    </ul>
                </div>

                <div className="hamburgerMenu" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                    <GiHamburgerMenu/>
                </div>
            </nav>
        </>
    );
};
