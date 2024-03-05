import taskData from "../data/kanban.json";

import "./TaskList.css";

import { useState } from "react";

export const TaskList = () => {
  const [tasksState, setTasksState] = useState(taskData);

  return (
    <div>
      {tasksState.map((task) => {
        return (
          <div className="user-card">
            <div>{task.title}</div>
            <div>{task.status}</div>
            <div>{task.assignee}</div>
            <div></div>
            <div></div>
          </div>
        );
      })}
    </div>
  );
};
