import "./ItemDetailsPage.css";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import taskData from "../data/kanban.json";

export const ItemDetailsPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState();

  useEffect(() => {
    const oneItem = taskData.find((task) => String(task.id === id));
    setItem(oneItem);
  }, [id]);

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className="item-detail-page">
      <h2>Item Details</h2>
      <h3>{item.title}</h3>
      <p>Status: {item.status}</p>
      <p>Description: {item.description}</p>
      <p>Priority: {item.priority}</p>
      <div>
        {"Due date: " +
          new Date(item.dueDate).toLocaleDateString("de-DE", {
            year: "2-digit",
            month: "2-digit",
            day: "2-digit",
          })}
      </div>
    </div>
  );
};
