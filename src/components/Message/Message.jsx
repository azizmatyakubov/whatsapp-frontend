import React from "react";
import "./Message.scss";
import SingleMessage from "./SingleMessage";

const Message = () => {
  return (
    <div className="message-wrapper">
      {/* header  */}
      <div className="message-header">
        {/* left  */}
        <div className="message-header-left">
          <img src="https://via.placeholder.com/50" alt="avatar" />
        </div>

        {/* center  */}
        <div className="message-header-center">
          <h4>Group 1</h4>
          <p>user1, user2, user3</p>
        </div>

        {/* right  */}
        <div className="message-header-right">
          <i class="bi bi-search"></i>
          <i class="bi bi-three-dots-vertical"></i>
        </div>
      </div>
      {/* body */}
      <div className="message-body">
        <SingleMessage
          user="John"
          text="When is the deadline for algorithm assignment 2?"
        />

        <SingleMessage
          user="John"
          text="When is the deadline for algorithm assignment 2?"
        />

        <SingleMessage
          user="John"
          text="When is the deadline for algorithm assignment 2?"
        />
      </div>

      {/* footer */}
      <div className="message-footer">
        <i class="bi bi-emoji-smile"></i>
        <i class="bi bi-paperclip"></i>
        <input type="text" placeholder="Type a message" />
        <i class="bi bi-mic-fill"></i>
      </div>
    </div>
  );
};

export default Message;
