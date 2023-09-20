import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = ({ hamActive, setHamActive }) => {
  const logo = "LetShare";
  const handleClick = () => {
    setHamActive(!hamActive);
  };

  return (
    <nav className={`${styles.navbarWrapper} center`}>
      <div className={`${styles.navbarInner} center`}>
        <button
          className={`${styles.hamburger} ${hamActive && styles.active}`}
          onClick={handleClick}
        >
          <span className={styles.hamburgerLines}></span>
        </button>
        <div className={`${styles.navLeft}`}>
          <img src={logo} alt="logo" className={styles.brand} />
        </div>
        <div className={`${styles.navRight} center`}>
          <div className={styles.navLinksWrapper}>
            <Link to="/" className={`${styles.nav} center`}>
              HOME
            </Link>
            <Link to="/about" className={`${styles.nav} center`}>
              ABOUT
            </Link>
            <Link to="/services" className={`${styles.nav} center`}>
              SERVICES
            </Link>
          </div>
          <div>
            <Link to="/login" className={styles.login}>
              Log in
            </Link>
            <Link to="/signup" className={styles.signup}>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;