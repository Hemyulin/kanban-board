import { Link } from "react-router-dom";
import { MyButton } from "./MyButton";
import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link className="sidebar-link" to="/">
        HOME
      </Link>
      <Link className="sidebar-link" to="/about">
        ABOUT
      </Link>
    </div>
  );
};
