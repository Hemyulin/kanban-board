import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AboutPage } from "./components/Pages/AboutPage";
import { DashboardPage } from "./components/Pages/DashboardPage";
import { ItemDetailsPage } from "./components/Pages/ItemDetailsPage";
import { NotFoundPage } from "./components/Pages/NotFoundPage";
import { Navbar } from "./components/Navbar";
// import { Sidebar } from "./components/Sidebar";
import { Footer } from "./components/Footer";
import { TaskList } from "./components/TaskList";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<DashBoardPage />} />
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
