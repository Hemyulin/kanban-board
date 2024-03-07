import taskData from "../data/kanban.json";

import "./TaskList.css";

import { useState } from "react";

export const TaskList = () => {
  const [tasksState, setTasksState] = useState(taskData);

  const deleteTask = (id) => {
    setTasksState(tasksState.filter((task) => task.id !== id));
  };

  return <TaskCard />;
};
