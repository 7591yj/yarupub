import axios from "axios";
import React, { useEffect, useState } from "react";
import CommandForm from "./CommandForm";
import Options from "./Options";

const Command = ({ commandInfo, botInfo }) => {
  const [optionExistence, setOptionExistence] = useState(false);
  const [optionView, setOptionView] = useState(false);
  const [editView, setEditView] = useState(false);
  const [commandEditData, setCommandEditData] = useState();

  useEffect(() => {
    if (commandInfo.options) setOptionExistence(true);
    else setOptionExistence(false);
  }, [commandInfo]);

  const getCommandEditData = (commandData) => {};

  const buildParams = () => {
    const params = new URLSearchParams();
    params.append("token", botInfo.token);
    params.append("uid", botInfo.uid);
    params.append("commandId", commandInfo.id);
    return params;
  };

  const toggleOptionView = () => setOptionView((prev) => !prev);

  const toggleEditView = () => setEditView((prev) => !prev);

  const editCommand = async (event) => {
    event.preventDefault();
    const params = buildParams();
    await axios.post("/commands/edit", params);
  };

  const deleteCommand = async () => {
    const params = buildParams();
    await axios.post("/commands/delete", params);
  };

  return (
    <div>
      <h4>{commandInfo.name}</h4>
      <p>{commandInfo.description}</p>
      {optionExistence && <p onClick={toggleOptionView}>View options</p>}
      {optionView && <Options optionsInfo={commandInfo.options} />}
      {commandInfo.id === "init" ? (
        <></>
      ) : (
        <div>
          <button onClick={toggleEditView}>Edit</button>
          <button onClick={deleteCommand}>Delete</button>
          {editView && <CommandForm sendCommandData={getCommandEditData} />}
        </div>
      )}
    </div>
  );
};

export default Command;
