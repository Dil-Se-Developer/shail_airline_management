import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/UI/Navbar";
import LoginForm from "./components/Pages/LoginForm";
import RegisterForm from "./components/Pages/RegisterForm";
import Dashboard from "./components/Pages/Dashboard";
import AddAirline from "./components/Pages/AddAirline";
import Footer from "./components/UI/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LoginForm/>}/>
        <Route path="/register" element={<RegisterForm/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/dashboard/addairline" element={<AddAirline/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
