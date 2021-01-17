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
      <div className="profile__recent">
        <h2>Recent brodcasta</h2>
        <div className="profile__recentItems">
          <RecentItem
            url={"https://www.youtube.com/embed/goaygqmJRlE"}
            title={"bald TV"}
          />
        </div>
        <div className="profile__categories">
          <h2>Jacek</h2>
          <img src="./avatar.jpg" alt="" />
          <h3>jacek</h3>
        </div>
      </div>
    </div>
  );
}
// 1:59

export default Profile;
