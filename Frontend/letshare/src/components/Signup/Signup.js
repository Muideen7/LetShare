import React, { useState } from "react";
import styles from "./Signup.module.css"; // Import your CSS module

const Signup = () => {
  const [userType, setUserType] = useState("user");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [website, setWebsite] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    // Here, you can implement your signup logic.
    // Typically, you would send a request to your backend to create a new user.

    console.log("User Type:", userType);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Company Name:", companyName);
    console.log("Website:", website);
    console.log("Phone Number:", phoneNumber);

    // Reset the form fields
    setUserType("user");
    setEmail("");
    setPassword("");
    setCompanyName("");
    setWebsite("");
    setPhoneNumber("");
  };

  return (
    <div className={styles["signup-container"]}>
      <h2>Create Your Account</h2>
      <form onSubmit={handleSignup}>
        <div className={styles["form-group"]}>
          <label>User Type</label>
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="user">User</option>
            <option value="business">Business</option>
          </select>
        </div>
        <div className={styles["form-group"]}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles["form-group"]}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {userType === "business" && (
          <>
            <div className={styles["form-group"]}>
              <label>Company Name</label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
              />
            </div>
            <div className={styles["form-group"]}>
              <label>Website</label>
              <input
                type="text"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                required
              />
            </div>
            <div className={styles["form-group"]}>
              <label>Phone Number</label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
          </>
        )}
        <button type="submit">Sign Up</button>
      </form>
      <div className={styles["oauth-buttons"]}>
        <button className={styles.google}>Sign Up with Google</button>
        <button className={styles.icloud}>Sign Up with iCloud</button>
      </div>
    </div>
  );
};

export default Signup;