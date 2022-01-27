import React from "react";
import IconButton from "@mui/material/IconButton";
import ProfileImage from "../images/avatar.jpg";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Avatar from "./Avatar";
import "../styles/components/Header.css";

function Header({ avatar, name, online, onClose }) {
  return (
    <div className="ChatWidget__header">
      <Avatar
        image={!avatar ? ProfileImage : avatar}
        label={name}
        online={online}
      />
      <IconButton
        onClick={onClose}
        style={{ color: "#6E809D" }}
        aria-label="send"
      >
        <CloseRoundedIcon />
      </IconButton>
    </div>
  );
}

export default Header;
