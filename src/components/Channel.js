import React from "react";
import "./Channel.css";

function Channel({ avatar, name, followers }) {
  return (
    <div className="channel">
      <div className="channel__details">
        <img src={avatar} alt="avatar" />
        <p>{name}</p>
      </div>
      {followers}
    </div>
  );
}

export default Channel;
