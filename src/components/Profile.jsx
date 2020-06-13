import React from 'react';
import ProfileHeader from './ProfileHeader'
import ProfileBody from './ProfileBody'
// TODO: Styling
// import "../style/NavBar.css"

export default function Profile() {
    return (
        <div className="profile-main">
            <ProfileHeader/>
            <ProfileBody/>
        </div>
    );
}