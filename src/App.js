import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Recording from "./components/recording/Recording";
import Budget from "./components/budget/Budget";
import Tracking from "./components/tracking/Tracking";
import { Routes, Route } from "react-router-dom";
import greenGalaxy from "./assets/green-galaxy.jpg";

function App() {
  return (
    <div
      className="main-app"
      style={{ backgroundImage: `url(${greenGalaxy})` }}
    >
      <div className="main-container">
        <Navbar />
        <Routes>
          <Route index element={<Recording />} />
          <Route path="/recording" element={<Recording />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/tracking" element={<Tracking />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
