import React from "react";
import "./Chats.scss";

const SingleChat = ({ name, user, text, img }) => {
  return (
    <div className="singleChat-wrapper">
      <div className="singleChat-image">
        <img src={img} alt="user" />
      </div>
      <div className="singleChat-name">
        <h4>{name}</h4>
        <p>{`${user}: ${text}`}</p>
      </div>
    </div>
  );
};

export default SingleChat;
