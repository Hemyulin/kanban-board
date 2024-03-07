export const TaskCard = (props) => {
  const { deleteTask, task } = props;
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
};
