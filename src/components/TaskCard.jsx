import { Link } from "react-router-dom";

export const TaskCard = ({ deleteTask, task }) => {
  return (
    <Link to={`/item/${task.id}`}>
      <div className="user-card">
        <h3>{task.title}</h3>
        <div>
          {task.status === "Done"
            ? `Task status: ${task.status}  ✅ ` // if done green
            : task.status === "To Do"
            ? `Task status: ${task.status} ⏳` // if to do   else red2
            : `Task status: ${task.status} 🔄`}{" "}
          {/*  */}
        </div>

        <div>{task.description}</div>

        <div>
          {task.priority == "Low"
            ? `Priority: ${task.priority} 🟢`
            : task.priority === "Medium"
            ? `Priority: ${task.priority}  🟠`
            : `Priority: ${task.priority} 🔴`}
        </div>

        {/* <div>{task.dueDate}</div> */}

        {/* @radavilae this here should be a solution to date time */}
        <div>
          {"Due date: " +
            new Date(task.dueDate).toLocaleDateString("de-DE", {
              year: "2-digit",
              month: "2-digit",
              day: "2-digit",
            })}
        </div>

        <button onClick={() => deleteTask(task.id)}>Delete</button>

        {/* Add update button here
      
      The logic of the button should be in the DashboardPage */}
        <button onClick={() => updateTask(task.id)}>Update</button>
      </div>
    </Link>
  );
};
