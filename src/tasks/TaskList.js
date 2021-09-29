import React from "react";
import TaskItem from "./TaskItem";
import stringHelper from "../helpers/stringHelper";

const TaskList = ({ tasks }) => {
  return (
    <div>
      {tasks.map((t) => (
        <TaskItem
          taggedText={stringHelper.getSavedTags(t.description)}
          key={t._id}
        />
      ))}
    </div>
  );
};

export default TaskList;
