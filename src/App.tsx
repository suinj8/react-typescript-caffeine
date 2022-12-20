import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CampDetail from "./pages/CampDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<CampDetail />} />
    </Routes>
  );
}

export default App;
