import React, { useState } from 'react';
import styles from "../Navbar/Navbar.css";
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

// import { navItems } from "./NavItems.jsx" // Uncomment if needed
// import { Button } from '../Buttons/Button.jsx'; // Uncomment if needed
// import { DropDown } from '../DropDown/DropDown.jsx'; // Uncomment if needed

export const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);

    const showNavbar = ()=>{
        setShowMediaIcons(!showMediaIcons)
        if(setShowMediaIcons){           
            document.getElementById('mainLogo').style.display = "none"
            
        }       
    }
    const closeNavbar = ()=>{
        setShowMediaIcons(!showMediaIcons)
        if(setShowMediaIcons){           
            document.getElementById('mainLogo').style.display = "block"       
        }       
    }
    return (
        <>
            <nav className="mainNav">
                <Link to="/" className="mainLogoDiv"> 
                    <img className="mainLogo" id='mainLogo' src="/Images/CredgrowLogo.png" alt="Credgrow Logo"/>
                </Link>

                <div className={showMediaIcons ? "navLinks mobile-menu-link" : "navLinks"}>
                    <ul className="nav_item">
                        <li className="navLinksItems">
                            <a><Link to="/">Home</Link></a>
                            <a><Link to="/about">About</Link></a>
                            <a><Link to="/credit-cards">Credit Cards</Link></a>
                            <a><Link to="/other-services">Other Services</Link></a>
                        </li>
                            <button className="signInButton">Log in</button>
                            <button className="signUpButton">Sign Up</button>
                    </ul>
                </div>

                {/* <div className="hamburgerMenu" onClick={() => setShowMediaIcons(!showMediaIcons)}> */}
                {
                    (showMediaIcons===false)?
                    <div className="hamburgerMenu" onClick={showNavbar}>
                        <GiHamburgerMenu/>
                    </div>
                    :
                    <div className="hamburgerMenu" onClick={closeNavbar}>
                        <MdClose />
                    </div>
                }

                {/* {
                    (showMediaIcons===true)?
                    <div className="hamburgerMenu" onClick={closeNavbar}>
                        <GiHamburgerMenu/>
                    </div>
                    :
                    <div className="hamburgerMenu" onClick={closeNavbar}>
                        <GiHamburgerMenu/>
                    </div>
                } */}
                
            </nav>
        </>
    );
};
