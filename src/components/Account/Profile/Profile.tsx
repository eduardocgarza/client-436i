import React from "react"
// import ProfileHeader from "./ProfileHeader"
// import ProfileBody from "./ProfileContent"
import './Profile.css';
import Avatar from 'react-avatar'
export default function Profile() {
  return (
    <div className="profile-main">
      {/* <ProfileHeader />
      <ProfileBody /> */}
    
   <Avatar name="John Doe" size="150" round={true}/>
    </div>
  )
}
