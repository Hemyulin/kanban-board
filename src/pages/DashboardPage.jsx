import { useState } from "react";
import { AddItemForm } from "../components/AddItemForm";
import { TaskList } from "../components/TaskList";
import taskData from "../data/kanban.json";
import { UpdateItemForm } from "../components/UpdateItemForm";

export const DashboardPage = () => {
  const [tasks, setTasks] = useState(taskData);

  const addItem = (newItem) => {
    setTasks([...tasks, { ...newItem, id: tasks.length + 1 }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = () => {};

  return (
    <div>
      <h2> DashboardPage </h2>
      <AddItemForm addItem={addItem} />
      <div className="task-sections">
        <section>
          <h3>To Do</h3>
          <TaskList
            tasks={tasks.filter((task) => task.status === "To Do")}
            deleteTask={deleteTask}
          />
        </section>
        <section>
          <h3>In Progress</h3>
          <TaskList
            tasks={tasks.filter((task) => task.status === "In Progress")}
            deleteTask={deleteTask}
          />
        </section>
        <section>
          <h3>Done</h3>
          <TaskList
            tasks={tasks.filter((task) => task.status === "Done")}
            deleteTask={deleteTask}
          />
        </section>
      </div>
      {/* <UpdateItemForm updateTask={updateTask} /> */}
    </div>
  );
};
