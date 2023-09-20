import React, { useState } from "react";
import styles from "./Login.module.css";

const Login = () => {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    uname: "",
    pass: ""
  });

  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "Invalid username",
    pass: "Invalid password"
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { uname, pass } = formData;

    const userData = database.find((user) => user.username === uname);

    if (userData) {
      if (userData.password !== pass) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className={styles.error}>{errorMessages.message}</div>
    );

  const renderForm = (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <div className={styles["input-container"]}>
          <label>Username </label>
          <input
            type="text"
            name="uname"
            value={formData.uname}
            onChange={handleInputChange}
            required
          />
          {renderErrorMessage("uname")}
        </div>
        <div className={styles["input-container"]}>
          <label>Password </label>
          <input
            type="password"
            name="pass"
            value={formData.pass}
            onChange={handleInputChange}
            required
          />
          {renderErrorMessage("pass")}
        </div>
        <div className={styles["button-container"]}>
          <input type="submit" value="Log In" />
        </div>
      </form>
    </div>
  );

  const handleGoogleLogin = () => {
    // Handle Google login logic
    console.log("Logging in with Google");
  };

  const handleICloudLogin = () => {
    // Handle iCloud login logic
    console.log("Logging in with iCloud");
  };

  return (
    <div className={styles.app}>
      <div className={styles["login-form"]}>
        <div className={styles.title}>Sign In</div>
        {isSubmitted ? (
          <div>User is successfully logged in</div>
        ) : (
          <>
            {renderForm}
            <div className={styles["button-container"]}>
              <button onClick={handleGoogleLogin}>Log in with Google</button>
              <button onClick={handleICloudLogin}>Log in with iCloud</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;