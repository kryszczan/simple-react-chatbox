import React from "react";
import "../styles/components/Avatar.css";

function Avatar({ image, label, online }) {
  return (
    <div className="ChatWidget__avatar">
      <div className="ChatWidget__avatar_profile">
        <div className="ChatWidget__avatar_circle">
          <img src={image} alt="" />
        </div>
        {online && <span className="ChatWidget__avatar_status"></span>}
      </div>
      <span>{label}</span>
    </div>
  );
}

export default Avatar;
