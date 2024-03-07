import taskData from "../data/kanban.json";

import { TaskCard } from "./TaskCard";

import "./TaskList.css";

import { useState } from "react";

export const TaskList = () => {
  const [tasksState, setTasksState] = useState(taskData);

  const deleteTask = (id) => {
    setTasksState(tasksState.filter((task) => task.id !== id));
  };

  return (
    <>
      {tasksState.map((task) => {
        <TaskCard deleteTask={deleteTask} task={task} />;
      })}
    </>
  );
};
