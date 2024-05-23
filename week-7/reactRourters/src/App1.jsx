import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Dashboard, LandingPage } from "./components/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/LandingPage" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Appbar() {
  const Navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          Navigate("/Dashboard");
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          Navigate("/LandingPage");
        }}
      >
        3
      </button>
    </div>
  );
}

// lazy loading

export default App;
