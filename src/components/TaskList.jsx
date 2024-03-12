import { TaskCard } from "./TaskCard";

import "./TaskList.css";

export const TaskList = ({ tasks, deleteTask }) => {
  return (
    <>
      {tasks &&
        tasks.map((task) => (
          <TaskCard key={task.id} deleteTask={deleteTask} task={task} />
        ))}
    </>
  );
};
