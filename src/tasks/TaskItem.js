import React from "react";

const TaskItem = ({ taggedText }) => {
  return (
    <div className="task-row">
      <input type="checkbox"></input>
      <div dangerouslySetInnerHTML={{ __html: taggedText }}></div>
    </div>
  );
};

export default TaskItem;
