import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks }) => {
  return (
    <div>
      {tasks.map((t) => (
        <TaskItem taggedText={t} />
      ))}
    </div>
  );
};

export default TaskList;
