import { useState, useEffect } from "react";

export const UpdateItemForm = ({ task, updateTask }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    assignee: "",
    status: "",
    priority: "",
    dueDate: "",
  });

  useEffect(() => {
    if (task) {
      setFormData({
        title: task.title,
        description: task.description,
        assignee: task.assignee,
        status: task.status,
        priority: task.priority,
        dueDate: task.dueDate,
      });
    }
  }, [task]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault(); // Added this
    updateTask(task.id, formData);
    setFormData({
      title: "",
      description: "",
      assignee: "",
      status: "",
      priority: "",
      dueDate: "",
    });
  };

  return (
    <form onSubmit={handleUpdate}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        // required
      />

      <input
        type="text"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />

      <input
        type="text"
        name="assignee"
        placeholder="Assignee"
        value={formData.assignee}
        onChange={handleChange}
      />

      {/* DROP DOWN MENU */}
      <select name="status" value={formData.status} onChange={handleChange}>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>

      {/* DROP DOWN MENU for priotiry */}
      <select name="priority" value={formData.priority} onChange={handleChange}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      {/* Calendar */}
      <input
        type="date"
        name="dueDate"
        value={formData.dueDate}
        onChange={handleChange}
      />
      <button type="submit">Update</button>
    </form>
  );
};
