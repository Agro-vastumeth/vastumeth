import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import KishanPage from "./pages/KishanPage";
import Calculator from "./pages/Calculator";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<KishanPage />} exact />
          <Route path="/calculator" element={<Calculator/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
