import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Importing Home component
import About from "./pages/About"; // Importing About component
import SignIn from "./pages/SignIn"; // Importing SignIn component
import SignUp from "./pages/SignUp"; // Importing SignUp component
import Dashboard from "./pages/Dashboard"; // Importing Dashboard component
import Projects from "./pages/Projects"; // Importing Projects component
import Header from "./components/Header"; // Importing Header component
import Footer from "./components/Footer"; // Importing Footer component

function App() {
  return (
    <BrowserRouter>
      <Header /> {/* Header component displayed on every page */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Route for Home page */}
        <Route path="/about" element={<About />} /> {/* Route for About page */}
        <Route path="/sign-in" element={<SignIn />} />{" "}
        {/* Route for SignIn page */}
        <Route path="/sign-up" element={<SignUp />} />{" "}
        {/* Route for SignUp page */}
        <Route path="/dashboard" element={<Dashboard />} />{" "}
        {/* Route for Dashboard page */}
        <Route path="/projects" element={<Projects />} />{" "}
        {/* Route for Projects page */}
      </Routes>
      <Footer /> {/* Footer component displayed on every page */}
    </BrowserRouter>
  );
}

export default App;
