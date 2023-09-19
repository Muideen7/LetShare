import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components import
import Navbar from "./components/Navbar/Navbar";
import NavbarResponsive from "./components/NavbarResponsive/NavbarResponsive";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Growth from "./components/Growth/Growth";
import Questions from "./components/Questions/Questions";
import Programs from "./components/Programs/Programs";
import Footer from "./components/Footer/Footer";

// Import data
import { programs_user } from "./constants/programs_user";
import { partner } from "./constants/partner";

// Import new components
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
// import Dashboard from "./components/Dashboard/Dashboard";

const App = () => {
  const [hamActive, setHamActive] = useState(false);

  return (
    <Router>
      <div className="App">
        <Navbar hamActive={hamActive} setHamActive={setHamActive} />
        <NavbarResponsive hamActive={hamActive} />
        <Switch>
          <Route exact path="/" component={Hero} />
          <Route path="/features" component={Features} />
          <Route path="/growth" component={Growth} />
          <Route path="/questions" component={Questions} />
          <Route path="/programs/user" render={() => <Programs programs={programs_user} />} />
          <Route path="/programs/shopper" render={() => <Programs programs={partner} />} />

          {/* Add routes for signup, login, and dashboard */}
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          {/* <Route path="/dashboard" component={Dashboard} /> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;