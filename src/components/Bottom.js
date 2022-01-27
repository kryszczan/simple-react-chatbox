import React, { useState, useEffect, useRef } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import IconButton from "@mui/material/IconButton";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import "../styles/components/Bottom.css";
import Typing from "./assets/Typing";

function Bottom({ sendAction, isTyping }) {
  const [text, setText] = useState("");

  const sendHandler = () => {
    if (text === "") return false;
    sendAction(text);
    setText("");

    const element = document.getElementsByClassName("ChatWidget__chat")[0];
    element.scrollTop = element.scrollHeight;
  };

  const checkEnterPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendHandler();
    }
  };

  return (
    <div className="ChatWidget__bottom">
      <div className="ChatWidget__bottom_content">
        <TextareaAutosize
          aria-label="Write a message"
          minRows={1}
          maxRows={5}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={checkEnterPress}
          placeholder="Write a message"
          style={{ width: 200 }}
        />
        {text && (
          <IconButton
            onClick={sendHandler}
            style={{ color: "#46AAC6" }}
            aria-label="send"
          >
            <SendRoundedIcon />
          </IconButton>
        )}
      </div>
      {isTyping && (
        <div className="ChatWidget__bottom_typing">
          <Typing />
        </div>
      )}
    </div>
  );
}

export default Bottom;
