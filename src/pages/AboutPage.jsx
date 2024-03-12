import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import "./AboutPage.css";

export const AboutPage = () => {
  return (
    <>
      <div className="about-page">
        <h1>About</h1>
        <p>
          Welcome to our Kanban website! Our website is designed to help teams
          manage their work more effectively. With our intuitive Kanban board,
          you can visualize your workflow, limit work-in-progress, and maximize
          efficiency.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is to provide a simple, intuitive, and efficient tool for
          project management. We believe that a well-organized workflow is key
          to delivering quality work, and we're here to help you achieve that.
        </p>

        <h2>How It Works</h2>
        <p>
          Our Kanban board is divided into several columns, each representing a
          stage in your workflow. You can create tasks, assign them to team
          members, set their priority, and move them across the board as they
          progress through the stages.
        </p>

        <h2>Meet the Team</h2>
        <p>
          Our team is composed of dedicated professionals with a passion for
          productivity and efficiency. We're always working to improve our
          website and provide the best possible experience for our users.
        </p>

        <h2>Contact Us</h2>
        <p>
          We'd love to hear from you! If you have any questions, suggestions, or
          feedback, please don't hesitate to contact us at [your contact
          information]. Thank you for choosing our Kanban website for your
          project management needs!
        </p>
      </div>
    </>
  );
};
