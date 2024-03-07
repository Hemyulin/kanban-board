import taskData from "../data/kanban.json";

import "./TaskList.css";

import { useState } from "react";

export const TaskList = () => {
  const [tasksState, setTasksState] = useState(taskData);

  const deleteTask = (id) => {
    setTasksState(tasksState.filter((task) => task.id !== id));
  };

  return (
    <div>
      {tasksState.map((task) => {
        return (
          <div className="user-card">
            <h3>{task.title}</h3>
            <div>
              {task.status === "Done"
                ? `${task.status}  ✅ ` // if done green
                : task.status === "To Do"
                ? `${task.status} ⏳` // if to do   else red2
                : `${task.status} 🔄`}{" "}
              {/*  */}
            </div>

            <div>{task.assignee}</div>

            <button onClick={() => deleteTask(task.id)}>delete</button>
          </div>
        );
      })}
    </div>
  );
};

// 1. find out a way to have 3 conditionals (now we only have 2)
// status icons: To Do :⏳, In Progress: 🔄, Done: ✅
// 2. priority icons: Low: 🟢, Medium: 🟠, High: 🔴
