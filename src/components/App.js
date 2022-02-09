import React, { useState } from "react";
import "../css/App.css";
import AppRouter from "./Router";

const App = () => {
  const [botInfo, setBotInfo] = useState(null);

  const Login = (botToken, botUserId) => {
    setBotInfo({
      token: botToken,
      uid: botUserId,
    });
  };

  return (
    <div>
      <AppRouter botInfo={botInfo} Login={Login} />
    </div>
  );
};

export default App;
