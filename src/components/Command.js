import React, { useEffect, useState } from "react";
import Options from "./Options";

const Command = ({ commandInfo }) => {
  const [optionExistence, setOptionExistence] = useState(false);
  const [optionView, setOptionView] = useState(false);

  useEffect(() => {
    if (commandInfo.options) setOptionExistence(true);
    else setOptionExistence(false);
  }, [commandInfo]);

  const toggleOptionView = () => setOptionView((prev) => !prev);

  return (
    <div>
      <h4>{commandInfo.name}</h4>
      <p>{commandInfo.description}</p>
      {optionExistence && <p onClick={toggleOptionView}>View options</p>}
      {optionView && <Options optionsInfo={commandInfo.options} />}
    </div>
  );
};

export default Command;
