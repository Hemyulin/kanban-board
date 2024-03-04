import { MyButton } from "./MyButton";
import "./Navbar.css";
import img from "../assets/logo.webp";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-home">
        <img src={img} alt="logo" className="navbar-image" />
        <h1>Kanbana</h1>
      </div>
      <div className="navbar-elements">
        <MyButton text="About" link="/about" />
        <MyButton text="Contact" link="/contact" />
      </div>
    </div>
  );
};
