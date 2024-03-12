import { useState } from "react";
import "./AddItemForm.css";

export const AddItemForm = ({ addItem }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    assignee: "",
    status: "To Do",
    priority: "Low",
    dueDate: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addItem(formData);
    setFormData({
      title: "",
      description: "",
      assignee: "",
      status: "To Do",
      priority: "Low",
      dueDate: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Submit Form</button>
    </form>
  );
};
