import { createLogger } from "vite";

export const TaskCard = ({ deleteTask, task }) => {
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

      <div>{task.description}</div>

      {/* 🟢 🟠 🔴 */}

      <div>
        {task.priority == "Low"
          ? `${task.priority} 🟢`
          : task.priority === "Medium"
          ? `${task.priority}  🟠`
          : `${task.priority} 🔴`}
      </div>

      <div>{task.dueDate}</div>
      {console.log("test")}

      <button onClick={() => deleteTask(task.id)}>Delete</button>

      {/* Add update button here
      
      The logic of the button should be in the DashboardPage */}
      <button onClick={() => updateTask(task.id)}>Update</button>
    </div>
  );
};
