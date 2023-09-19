// Signup.js

import React, { useState } from "react";
import "./Signup.module.css"; // Import your CSS file

const Signup = () => {
  const [userType, setUserType] = useState("user");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    // Here, you can implement your signup logic.
    // Typically, you would send a request to your backend to create a new user.

    console.log("User Type:", userType);
    console.log("Email:", email);
    console.log("Password:", password);

    // Reset the form fields
    setUserType("user");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="signup-container">
      <h2>Create Your Account</h2>
      <form onSubmit={handleSignup}>
        <div className="form-group">
          <label>User Type</label>
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="user">User</option>
            <option value="business">Business</option>
          </select>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <div className="oauth-buttons">
        <button className="google">Sign Up with Google</button>
        <button className="icloud">Sign Up with iCloud</button>
      </div>
    </div>
  );
};

export default Signup;
