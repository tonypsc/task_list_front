import React, { useRef } from "react";
import plusSign from "../shared/assets/img/plus.png";
import "./TaskInput.css";
import stringHelper from "../helpers/stringHelper";

const TaskInput = ({ handleSelect, text, handleChange }) => {
  const refInput = useRef();

  const handleClick = (e) => {
    refInput.current.focus();
  };

  const getTaggedHtml = () => {
    return {
      __html: stringHelper.getTypingTags(text),
    };
  };

  return (
    <div className="task">
      <img
        src={plusSign}
        alt="plus-sign"
        className="plus-sign"
        onClick={handleClick}
      />
      <div className="input-wrapper">
        <input
          type="text"
          value={text}
          className="transp-input"
          onFocus={handleSelect}
          onChange={handleChange}
          ref={refInput}
        />
        <div
          className="add-task"
          placeholder="Type to add a new task"
          onClick={handleClick}
          dangerouslySetInnerHTML={getTaggedHtml()}
        ></div>
      </div>
    </div>
  );
};

export default TaskInput;
