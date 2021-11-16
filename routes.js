import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Detail from "../Detail";
import App from "../App";
import Home from "../Home";

export default function AppRouter() {
  return (
    <Router>
      <div>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/detail/:state" element={<Detail />} />
          

         
         
        </Routes>
      </div>
    </Router>
  );
}
