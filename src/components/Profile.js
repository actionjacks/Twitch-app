import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile">
      <div className="profile__topLeft">
        <img src="./avatar.jpg" alt="" />
        <div className="profile__topLeftDetails">
          <h1>Jacek Placel</h1>
          <h3>13029k followers</h3>
        </div>
      </div>
      <div className="profile__topRight">
        <i className="fas fa-heart graybg"></i>
        <i className="fas fa-bell graybg"></i>
        <i className="fas fa-ellipsis-v"></i>
      </div>
      <div className="profile__menu">
        <h2 className="active">home</h2>
        <h2>About</h2>
        <h2>Schudule</h2>
        <h2>Videos</h2>
        <h2>
          <i className="fas fa-arrow-up"></i>
        </h2>
        <h2>Chat</h2>
      </div>
    </div>
  );
}
// 1:59

export default Profile;
