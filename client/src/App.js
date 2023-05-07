import "./App.css";
import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import KishanPage from "./pages/KishanPage";
import Calculator from "./pages/Calculator";
import About from "./pages/About";
import Collaborate from "./pages/Collaborate";
import Process from "./pages/Process";
import Crops from "./pages/Crops";
import { analysisContext, ProcessContextProvider } from "./Context";

function App() {
  return (
    <div>
      <Router>
        <ProcessContextProvider>
          <Routes>
            <Route path="/" element={<KishanPage />} exact />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/about" element={<About />} />
            <Route path="/collaborate" element={<Collaborate />} />
            <Route path="/process" element={<Process />} />
            <Route path="/crops" element={<Crops />} />
          </Routes>
        </ProcessContextProvider>
      </Router>
    </div>
  );
}

export default App;
