import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import Navbar from "./components/Navbar/Navbar";
import NavbarResponsive from "./components/NavbarResponsive/NavbarResponsive";
import Programs from "./components/Programs/Programs";
import Footer from "./components/Footer/Footer";

// Import data
import { programs_user } from "./constants/programs_user";
import { partner } from "./constants/partner";

// Import new components
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Home from "./pages/Home";

const App = () => {
  const [hamActive, setHamActive] = useState(false);

  return (
    <Router>
      <div className="App">
        <Navbar hamActive={hamActive} setHamActive={setHamActive} />
        <NavbarResponsive hamActive={hamActive} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs/user" element={<Programs programs={programs_user} />} />
          <Route path="/programs/shopper" element={<Programs programs={partner} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
