import React from "react";
import "./Stream.css";

const Stream = () => {
  return (
    <div className="stream">
      <div className="stream__container">
        <div className="stream__status">
          {/* stream funcion */}
          <div className="stream__statusContainer">
            <div className="stream__statusContainerTop">
              <div className="stream__statusIndicator">
                <h2>Check out the below streams from cp</h2>
              </div>
              <div className="stream__statusInfo">+</div>
            </div>
          </div>
        </div>
        {/* stream funcion */}
        <div className="stream__videoEmbed">
          <iframe
            width="500"
            height="295"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            allowFullScreen={true}
            frameborder="0"
            src="https://www.youtube.com/embed/rBBDvx_Pw6Q"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Stream;
