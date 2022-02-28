import React from "react";
import Interactions from "../components/Interactions";

const Home = ({ botInfo }) => {
  return (
    <div>
      <Interactions botInfo={botInfo} />
      <p>
        Refer to&nbsp;
        <a
          href="https://discord.com/developers/docs/interactions/application-commands#registering-a-command"
          target="_blank"
          rel="noreferrer noopener"
        >
          Discord slash command docs
        </a>
        &nbsp;for further explanations about slash commands.
      </p>
    </div>
  );
};

export default Home;
