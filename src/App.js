import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Recording from "./components/recording/Recording";
import Budget from "./components/budget/Budget";
import Tracking from "./components/tracking/Tracking";
import CheckList from "./components/check-list/CheckList";
import { Routes, Route, Outlet } from "react-router-dom";
import greenGalaxy from "./assets/green-galaxy.jpg";

function App() {
  return (
    <div
      className="main-app"
      style={{ backgroundImage: `url(${greenGalaxy})` }}
    >
      <div className="main-container">
        <Navbar />
        <Outlet />
        <Routes>
          <Route index element={<Recording />} />
          <Route path="/money-app/" element={<Recording />} />
          <Route path="/money-app/recording" element={<Recording />} />
          <Route path="/money-app/budget" element={<Budget />} />
          <Route path="/money-app/tracking" element={<Tracking />} />
          <Route path="/money-app/checklist" element={<CheckList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
