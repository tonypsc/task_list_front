import React, { useState, useEffect } from "react";
import EditTask from "./EditTask";
import TaskList from "./TaskList";
import "./TaskWrapper.css";
import { fetchData } from "../helpers/fetchHelper";
import config from "../config/development.json";

const TaskWrapper = () => {
  const [taskList, setTaskList] = useState(null);
  const [error, setError] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const result = await fetchData(`${config.apiurl}/tasks`, "GET");

    if (result?.status !== "success") {
      setError(result.errors);
    } else {
      setTaskList(result.data);
    }
  };

  const handleUpdate = async (text) => {
    const result = await fetchData(`${config.apiurl}/tasks`, "POST", {
      task: text,
    });

    if (result?.status !== "success") {
      setError(result.errors);
      return false;
    } else {
      //TODO: backend could return list instead of element to avoid 1 fetch
      getData();
      return true;
    }
  };

  return (
    <div className="wrapper">
      <EditTask handleUpdate={handleUpdate} />
      {error ? (
        <div>{error}</div>
      ) : taskList ? (
        <TaskList tasks={taskList} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default TaskWrapper;
