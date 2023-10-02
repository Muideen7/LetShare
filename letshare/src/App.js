import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Login from "./pages/Login/Login";
import Signup from './pages/Signup/Signup';

function App() {
  return (
    <Router>
    <div className="App">
      <Navigation />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  </Router>
  );
}

export default App;