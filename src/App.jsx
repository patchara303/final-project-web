import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./layout/Header";
import Home from "./home-page/home";
import LoginForm from "./login/login"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
