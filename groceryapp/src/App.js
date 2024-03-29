import React from "react";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Home from "./Pages/Home";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="*" element={<div>
          <h1>404 ERROR</h1>
        </div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
