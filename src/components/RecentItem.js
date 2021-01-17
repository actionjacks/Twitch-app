import React from "react";
import "./RecentItem.css";

const RecentItem = ({ url, title }) => {
  return (
    <div className="item">
      <iframe
        src={url}
        width="400"
        height="235"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        allowFullScreen={true}
        frameborder="0"
      ></iframe>
      <div className="item__details">
        <img src="./avatar.jpg" alt="" />
        <div className="item__detailsText">
          <h4>{title}</h4>
          <p>jacek</p>
          <p>kategoria jacek</p>
        </div>
      </div>
    </div>
  );
};

export default RecentItem;
