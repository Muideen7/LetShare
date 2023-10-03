import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Login from "./pages/Login/Login";
import Signup from './pages/Signup/Signup';
import Features from './components/Features/Features';
import Team from './components/Teams/Team';
import Questions from './components/Questions/Questions';
import 'semantic-ui-css/semantic.min.css'
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <Router>
    <div className="App">
      <Navigation />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/features" element={<Features />} />
      <Route path="/team" element={<Team />} />
      <Route path="/faq" element={<Questions />} />
      </Routes>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
