import React from 'react';
import "../style/NavBar.css"
import {Link} from 'react-router-dom';

export default function NavBar() {
    return (
        /**<div className="navbar">
            <a href="../index.tsx">Sign Up</a>
            <a href="../index.tsx">Log In</a>
            <a href="TODO">Profile</a>
        </div>**/
        <nav>
            <ul className="navbar">
                <Link to="/profile">
                    <li>Profile</li>
                </Link>
                <Link to="/signup">
                    <li>SignUp</li>
                </Link>
                <Link to="/login">
                    <li>Log In</li>
                </Link>
                
            
            </ul>
        </nav>
    );
}