import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AboutPage } from "./pages/AboutPage";
import { DashboardPage } from "./pages/DashboardPage";
import { ItemDetailsPage } from "./pages/ItemDetailsPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { Footer } from "./components/Footer";
// import { FormatTime } from "./components/FormatTime";
import { TaskList } from "./components/TaskList";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/item/:id" element={<ItemDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <TaskList />
      {/* <Sidebar /> */}
      <Footer />
    </>
  );
}

export default App;
