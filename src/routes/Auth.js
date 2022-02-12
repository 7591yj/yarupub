import React, { useState } from "react";

const Auth = ({ Login }) => {
  const [botToken, setBotToken] = useState("");
  const [botUserId, setBotUserId] = useState("");

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "botToken") setBotToken(value);
    else if (name === "botUserId") setBotUserId(value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    Login(botToken, botUserId);
  };

  return (
    <div>
      <h2>YaruPub</h2>
      <p>Manage your slash commands in one go.</p>
      <h4>Please enter your bot token and bot user ID to continue.</h4>
      <form onSubmit={onSubmit}>
        <input
          type="password"
          name="botToken"
          value={botToken}
          onChange={onChange}
          placeholder="Your bot token goes here"
        />
        <input
          type="password"
          name="botUserId"
          value={botUserId}
          onChange={onChange}
          placeholder="Your bot user ID goes here"
        />
        <p>Ready to move on?</p>
        <input type="submit" value="Let's go!" />
      </form>
    </div>
  );
};

export default Auth;
