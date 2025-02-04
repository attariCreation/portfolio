import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <div className="w-full h-screen" >
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
