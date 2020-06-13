import React from 'react';
import "../style/ProfileHeader.css"
// TODO: Styling
// import "../style/NavBar.css"

let profilePic;

const renderProfilePic = () => {
    if (false) {
        // profilePic = something
    } else {
        profilePic = require("../image/empty-pp.jpg");
    }
}


export default function ProfileHeader() {
    // profile image, user's first and last name, user's summary
    renderProfilePic();

    return (
        <div className="profile-header">
            <img src={profilePic} id="profile-pic" alt="x"/>
            <h2 id="profile-name"> John Doe </h2>
        </div>
    );
}