import React, { useState } from "react";
import AddTask from "./TaskInput";
import ButtonBar from "./ButtonBar";
import "./EditTask.css";
import avatar from "../shared/assets/img/avatar.png";

const Task = () => {
  const [selected, setSelected] = useState(false);
  const [text, setText] = useState("dddd");

  const handleSelect = () => {
    setSelected(true);
  };

  const hanleClick = (e) => {
    const button = e.target;
    if (
      !button.matches(".button-active") &&
      (!button.parentNode || !button.parentNode.matches(".button-active"))
    )
      return;
    switch (button.textContent) {
      case "Ok":
        setSelected(false);
        break;
      case "Cancel":
        cancelUpdate();
        break;

      default:
        break;
    }
  };

  /**
   * Cancels current update operation
   */
  const cancelUpdate = () => {
    setText("");
    //setSelected(false);
  };

  const handleChange = (value) => {
    setText(value);
  };

  return (
    <div className={`tasks ${selected ? "active" : ""}`}>
      <div className="top-line">
        <AddTask
          handleSelect={handleSelect}
          text={text}
          handleChange={handleChange}
        />
        {selected && <img src={avatar} className="avatar" />}
      </div>
      {selected && <ButtonBar handleClick={hanleClick} />}
    </div>
  );
};

export default Task;
