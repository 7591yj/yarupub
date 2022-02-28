import React, { useEffect, useState } from "react";
import axios from "axios";
import Command from "./Command";
import "../css/Interactions.css";

const Interactions = ({ botInfo }) => {
  const [commands, setCommands] = useState([]);
  const [error, setError] = useState(false);
  const [view, setView] = useState("command");
  const [commandToRender, setCommandToRender] = useState({
    id: "init",
    name: "Select a command from the list",
    description: "to view, edit, or delete it.",
  });

  useEffect(() => {
    const getCommands = async () => {
      const params = new URLSearchParams();
      params.append("token", botInfo.token);
      params.append("uid", botInfo.uid);
      await axios
        .post("/commands/get", params)
        .then((res) => {
          console.log(res.data);
          if (res.data.status === 401) {
            setError(true);
            setView("none");
          } else setCommands(res.data);
        })
        .catch(() => {
          setError(true);
          setView("none");
        });
      console.log(commands);
      console.log(error);
    };
    getCommands();
  }, []);

  const toggleCreateCommand = () => setView("create");

  const controlView = () => {
    if (view === "command")
      return <Command commandInfo={commandToRender} botInfo={botInfo} />;
    else if (view === "create") return <p>test</p>;
    else if (view === "none") return <></>;
  };

  return (
    <div>
      <h1>Commands</h1>
      <button onClick={toggleCreateCommand}>Create</button>
      <div className="contentArea">
        <div>
          {!error ? (
            commands.map((item, i) => {
              return (
                <h4
                  key={`command-menu-${i}`}
                  onClick={() => setCommandToRender(item)}
                >
                  {item.name}
                </h4>
              );
            })
          ) : (
            <>
              <h4>Double check your bot token / id.</h4>
            </>
          )}
        </div>
        <div>{controlView()}</div>
      </div>
    </div>
  );
};

export default Interactions;
