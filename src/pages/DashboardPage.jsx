import { useState } from "react";
import { AddItemForm } from "../components/AddItemForm";
import { TaskList } from "../components/TaskList";
import taskData from "../data/kanban.json";

export const DashboardPage = () => {
  const [tasks, setTasks] = useState(taskData);

  const addItem = (newItem) => {
    setTasks([...tasks, { ...newItem, id: tasks.length + 1 }]);
  };

  const deleteTask = (id) => {
    setTasksState(tasksState.filter((task) => task.id !== id));
  };
  return (
    <div>
      <h2> DashboardPage </h2>
      <AddItemForm addItem={addItem} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
};
