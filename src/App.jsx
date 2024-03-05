import "./App.css";

import { Navbar } from "./components/Navbar";
// import { Sidebar } from "./components/Sidebar";
import { Footer } from "./components/Footer";
import { TaskList } from "./components/TaskList";

function App() {
  return (
    <>
      <Navbar />
      <TaskList />
      {/* <Sidebar /> */}
      <Footer />
    </>
  );
}

export default App;
