import React, { useState } from "react";
import Header from "./components/Header";
import Chat from "./components/Chat";
import "./styles/ChatWidget.css";
import Bottom from "./components/Bottom";
import Fab from "@mui/material/Fab";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";

export const ChatWidget = ({
  data = [],
  avatar,
  name = "Your name",
  online = false,
  isTyping = false,
  guestDev,
  onSubmit,
  onOpen,
}) => {
  const [messages, setMessages] = useState(data);
  const [open, setOpen] = useState(false);

  const sendHandler = (value) => {
    const newData = {
      text: value,
      date: new Date(),
      me: guestDev ? false : true,
    };
    setMessages([...messages, newData]);
    if (onSubmit) onSubmit(newData);
  };

  const openHandler = () => {
    setOpen(!open);
    if (onOpen) onOpen(!open);
  };

  return (
    <div className="ChatWidget__container">
      {open && (
        <div className="ChatWidget__content">
          <Header
            avatar={avatar}
            name={name}
            online={online}
            onClose={openHandler}
          />
          <Chat messages={messages} />
          <Bottom sendAction={sendHandler} isTyping={isTyping} />
        </div>
      )}
      <Fab
        onClick={openHandler}
        className="ChatWidget__floatButton"
        size="large"
        aria-label="add"
      >
        <ChatOutlinedIcon />
      </Fab>
    </div>
  );
};
