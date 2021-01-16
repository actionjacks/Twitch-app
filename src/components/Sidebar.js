import React from "react";
import Channel from "./Channel";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h5>Followed Channels</h5>
        <Channel avatar="./avatar.jpg" name="jacek placel" followers="10000k" />
        <h5>Recommended channels</h5>
        <Channel avatar="./avatar.jpg" name="jacek placel" followers="10000k" />
        <p className="sidebar__topShowMore">show more</p>
      </div>
      <div className="sidebar__bottom">
        <div className="sidebar__bottomContainer">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search to Add Friends" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
