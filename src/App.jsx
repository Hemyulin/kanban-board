import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AboutPage } from "./pages/AboutPage";
import { DashboardPage } from "./pages/DashboardPage";
import { ItemDetailsPage } from "./pages/ItemDetailsPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Navbar } from "./components/Navbar";
// import { Sidebar } from "./components/Sidebar";
import { Footer } from "./components/Footer";
import { TaskList } from "./components/TaskList";

function App() {
  return (
    <>
      <Navbar /> {/* This needs to be moved into the DashboardPage */}
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/item/:id" element={<ItemDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <TaskList /> {/* This needs to be moved into the DashboardPage */}
      <Sidebar /> {/* This needs to be moved into the DashboardPage */}
      <Footer /> {/* This needs to be moved into the DashboardPage */}
    </>
  );
}

export default App;
