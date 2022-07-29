import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/UI/Navbar";
import LoginForm from "./components/Pages/LoginForm";
import RegisterForm from "./components/Pages/RegisterForm";
import Dashboard from "./components/Pages/Dashboard";
import AirlineDetails from "./components/Pages/AirlineDetails";
import BookTicket from "./components/Pages/BookTicket";
import BookTicketDetails from "./components/Pages/BookTicketDetails";
import Footer from "./components/UI/Footer";
import NoMatch from "./components/nomatch/NoMatch";
import useAuth from "./components/Hook/useAuth";
import "./App.css";

function App() {
  const { saveAuth, auth, setAuth } = useAuth();
  // console.log(auth, "app.js");

  if (!auth) {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<LoginForm saveAuth={saveAuth} />} />
          <Route path="/register" element={<RegisterForm saveAuth={saveAuth} />} />
          <Route path="*" element={<NoMatch/>} />
        </Routes>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar setAuth={setAuth}/>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/:airlineId" element={<AirlineDetails />} />
        <Route path="/dashboard/bookticket" element={<BookTicket />} />
        <Route
          path="/dashboard/bookticket/bookticketdetails"
          element={<BookTicketDetails />}
        />
        <Route path="*" element={<NoMatch/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
