import React, { useState } from "react";

const CommandForm = ({ sendCommandData }) => {
  const [commandName, setCommandName] = useState("");
  const [commandDesc, setCommandDesc] = useState("");

  const [commandData, setCommandData] = useState({});

  const buildCommandData = () => {
    setCommandData({
      name: commandName,
      type: 1,
      description: commandDesc,
    });
  };

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "commandName") setCommandName(value);
    else if (name === "commandDesc") setCommandDesc(value);
  };

  const onSubmit = () => {
    buildCommandData();
    sendCommandData(commandData);
  };

  return (
    <form>
      <input
        type="text"
        name="commandName"
        onChange={onChange}
        placeholder="New name for this command"
      />
      <input
        type="text"
        name="commandDesc"
        onChange={onChange}
        placeholder="New description for this command"
      />
      <input
        type="number"
        name="optionCount"
        onChange={onChange}
        placeholder="How many options does this command have?"
      />
      <input type="submit" value="Edit" onClick={onSubmit} />
    </form>
  );
};

export default CommandForm;
