import React, { useState, useEffect } from "react";
import TaskInput from "./TaskInput";
import ButtonBar from "./ButtonBar";
import "./EditTask.css";
import avatar from "../shared/assets/img/avatar.png";

const EditTask = () => {
  const [selected, setSelected] = useState(false);
  const [text, setText] = useState("");
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(text !== "");
  }, [text]);

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
        cancelUpdate();
        break;
      case "Cancel":
        cancelUpdate();
        break;
      case "Add":
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
    setSelected(false);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className={`tasks ${selected ? "active" : ""}`}>
      <div className="top-line">
        <TaskInput
          handleSelect={handleSelect}
          text={text}
          handleChange={handleChange}
          active=""
        />
        {selected && <img src={avatar} className="avatar" />}
      </div>
      {selected && <ButtonBar handleClick={hanleClick} active={active} />}
    </div>
  );
};

export default EditTask;
