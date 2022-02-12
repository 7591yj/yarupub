import React, { useState } from "react";
import axios from "axios";

const Home = ({ botInfo }) => {
  const getCommands = async () => {
    const params = new URLSearchParams();
    params.append("token", botInfo.token);
    params.append("uid", botInfo.uid);
    await axios
      .post("/api/usercommands", params)
      .then(console.log)
      .catch(console.error);
  };

  return (
    <div>
      <h1>Hello</h1>
      <button onClick={getCommands}>GET</button>
    </div>
  );
};

export default Home;
