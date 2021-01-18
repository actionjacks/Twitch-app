import React from "react";
import "./Profile.css";
import RecentItem from "./RecentItem";
import Stream from "./Stream";

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
          <RecentItem
            url={"https://www.youtube.com/embed/c-5VXl8yPQA"}
            title={"The Net Ninja"}
          />
          <RecentItem
            url={"https://www.youtube.com/embed/Xm4BObh4MhI"}
            title={"Ania Kubów"}
          />
        </div>
        <div className="profile__categories">
          <Stream />
        </div>
      </div>
    </div>
  );
}

export default Profile;
