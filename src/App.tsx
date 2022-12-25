import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CampDetail from "./pages/CampDetail";
import CampApply from "./pages/CampApply";
import Community from "./pages/Community";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<CampDetail />} />
        <Route path="/apply" element={<CampApply />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </>
  );
}

export default App;
