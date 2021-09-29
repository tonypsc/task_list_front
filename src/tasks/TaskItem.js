import React from "react";
import "./TaskItem.css";

const TaskItem = ({ taggedText }) => {
  return (
    <div className="task-row">
      <input type="checkbox" className="item-check"></input>
      {/* TODO: can be improved with dynamic components */}
      <div dangerouslySetInnerHTML={{ __html: taggedText }}></div>
    </div>
  );
};

export default TaskItem;
