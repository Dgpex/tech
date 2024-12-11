import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Import your footer component
import Home from "./pages/Home/Home";
import NotFound from "./components/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Properties from "./pages/Properties";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Property from "./pages/Property";
import Kyc from "./components/Kyc";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />
        
        {/* Main content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/kyc" element={<Kyc />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/property/:id" element={<Property />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
