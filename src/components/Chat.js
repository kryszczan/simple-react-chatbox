import React, { forwardRef } from "react";
import "../styles/components/Chat.css";
import ChipItem from "./assets/ChipItem";

function Chat({ messages }) {
  // console.log(messages);
  return (
    <div className="ChatWidget__chat">
      <div className="ChatWidget__chat_content">
        {messages?.map((m, index) => (
          <ChipItem key={index} text={m.text} date={m.date} me={m.me} />
        ))}
      </div>
    </div>
  );
}

export default Chat;
