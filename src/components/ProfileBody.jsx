import React from 'react';
// TODO: Styling
// import "../style/NavBar.css"

const classList = ["CPSC436i", "CPSC304", "CPSC110"];

let classRender;
let spotifyRender;
let instagramRender;

const renderClasses = () => {
    if (classList.length !== 0 || !classList) {
        classRender = <ul className="classes">
            {classList.map(c => {return <li key={"class-" + c}>{c}</li>})}
        </ul>    
    } else {
        classRender = null;
    }
}

const renderSpotify = () => {
    //TODO
    return;
}

const renderInstagram = () => {
    //TODO
    return;
}

export default function ProfileBody() {
    // user's enrolled classes, groups they are in, integrated app stuff

    renderClasses();
    renderSpotify();
    renderInstagram();

    return (
        <div className="profile-body">
            {classRender}
            {spotifyRender}
            {instagramRender}
        </div>
    );
}