import React from "react";
import Chats from "./Chats";
import Message from "./Message";

import "./Home.scss";

const Home = () => {
  return (
    <div className="home-wrapper">
      <Chats />
      <Message />
    </div>
  );
};

export default Home;
