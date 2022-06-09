import React, { useState, useEffect } from "react";
import Chats from "../Chats/Chats";
import Message from "../Message/Message";
import "./Home.scss";

const Home = () => {
  // const [chats, setChats] = useState();

  // useEffect(() => {
  //   getChats();
  // }, []);

  // const getChats = async () => {
  //   try {
  //     const response = await fetch("http://localhost:3001/chats");
  //     const data = await response.json();
  //     console.log(data, "chats array");
  //     setChats(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="home-wrapper">
      <Chats />
      <Message />
    </div>
  );
};

export default Home;
