import { Link } from "react-router-dom";
import { MyButton } from "./MyButton";
import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">HOME</Link>
      <Link to="/about">ABOUT</Link>
      <Link to="/item">ITEMS</Link>
    </div>
  );
};
