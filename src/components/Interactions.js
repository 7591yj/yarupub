import React, { useState } from "react";
import axios from "axios";
import Command from "./Command";
import "../css/Interactions.css";

const Interactions = ({ botInfo }) => {
  const [commands, setCommands] = useState([]);
  const [error, setError] = useState(null);
  const [commandToRender, setCommandToRender] = useState({
    name: "Select a command from the list",
    description: "to view, edit, or delete it.",
  });

  const getCommands = async () => {
    const params = new URLSearchParams();
    params.append("token", botInfo.token);
    params.append("uid", botInfo.uid);
    await axios
      .post("/usercommands", params)
      .then((res) => setCommands(res.data))
      .catch((err) => setError(err));
  };

  return (
    <div>
      <h1>Commands</h1>
      <button onClick={getCommands}>GET</button>
      <div className="contentArea">
        <div>
          {commands.map((item, i) => {
            return (
              <h4
                key={`command-menu-${i}`}
                onClick={() => setCommandToRender(item)}
              >
                {item.name}
              </h4>
            );
          })}
        </div>
        <div>
          <Command commandInfo={commandToRender} />
        </div>
      </div>
    </div>
  );
};

export default Interactions;
