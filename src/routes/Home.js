import React from "react";
const { Client } = require("discord-slash-commands-client");

const Home = ({ botInfo }) => {
  const client = new Client(botInfo.token, botInfo.uid);
  // TODO: fix getCommands error; caused by CORS policy
  client.getCommands({}).then(console.log).catch();

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default Home;
