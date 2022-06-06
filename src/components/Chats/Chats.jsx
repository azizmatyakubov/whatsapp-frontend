import React from "react";
import "./Chats.scss";
import SingleChat from "./SingleChat";

const Chats = () => {
  return (
    <div className="chats-wrapper">
      {/* chats-header  */}
      <div className="chats-header">
        <div className="chats-header-left">
          <i class="bi bi-person-circle"></i>
        </div>
        <div className="chats-header-right">
          <i class="bi bi-filter-circle"></i>
          <i class="bi bi-chat-left-text-fill"></i>
          <i class="bi bi-three-dots-vertical"></i>
        </div>
      </div>

      {/* chats-search  */}
      <div className="chats-search">
        <div className="chats-search-wrapper">
          <i class="bi bi-search"></i>
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>

      {/* chats-list  */}
      <div className="chats-list">
        <SingleChat
          name="Group"
          user="User 1"
          text="Hello, how are you?"
          img={"/image/chat1.jpg"}
        />
        <SingleChat
          name="Group 2"
          user="User 2"
          text="Welcome to group"
          img={"/image/chat2.jpg"}
        />
        <SingleChat
          name="Group 3"
          user="User 3"
          text="Let's meet today"
          img={"/image/chat3.jpg"}
        />
        <SingleChat
          name="Group 4"
          user="User 4"
          text="Thank you very much"
          img={"/image/chat4.jpg"}
        />
        <SingleChat
          name="Group 2"
          user="User 2"
          text="Welcome to group"
          img={"/image/chat2.jpg"}
        />
        <SingleChat
          name="Group 3"
          user="User 3"
          text="Let's meet today"
          img={"/image/chat3.jpg"}
        />
      </div>
    </div>
  );
};

export default Chats;
