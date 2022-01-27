import React, { useState } from "react";
import * as ReactDOM from "react-dom";
import "./style.css";
import { styled } from "@mui/material/styles";
import Logo from "./Logo";
import Switch from "@mui/material/Switch";
import { ChatWidget } from "../src/ChatWidget";

const CustomSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "#1AEDF7",
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "#1AEDF7",
  },
}));

function App() {
  const [open, setOpen] = useState(false);
  const [online, setOnline] = useState(true);
  const [typing, setTyping] = useState(false);
  const [guestDev, setGuestDev] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };

  const onOpen = (isOpen) => {
    setOpen(isOpen);
  };

  return (
    <div className="Container">
      <div className={`Panel ${open ? "active" : ""}`}>
        <div className="Panel_item">
          <label>Host is online</label>
          <CustomSwitch checked={online} onChange={() => setOnline(!online)} />
        </div>
        <div className="Panel_item">
          <label>Someone typing</label>
          <CustomSwitch checked={typing} onChange={() => setTyping(!typing)} />
        </div>
        <div className="Panel_item">
          <label>Write as guest</label>
          <CustomSwitch
            checked={guestDev}
            onChange={() => setGuestDev(!guestDev)}
          />
        </div>
        <div className="Footer">
          <span>Created by</span>
          <a href="https://kryszczan.com" target="_blank">
            <Logo />
          </a>
        </div>
      </div>
      <ChatWidget
        data={[]}
        online={online}
        name="kryszczan"
        isTyping={typing}
        guestDev={guestDev}
        onSubmit={onSubmit}
        onOpen={onOpen}
      />
    </div>
  );
}

const labelStyle = {
  color: "#fff",
  marginLeft: 10,
};

ReactDOM.render(<App />, document.getElementById("root"));
