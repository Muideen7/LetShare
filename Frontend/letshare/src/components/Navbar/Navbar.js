import React from "react";
import styles from "./Navbar.module.css";

const Navbar = ({ hamActive, setHamActive }) => {
  const logo ="LetShare";
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
            <a href="/" className={`${styles.nav} center`}>
             HOME
            </a>
            <a href="/" className={`${styles.nav} center`}>
              ABOUT
            </a>
            <a href="/" className={`${styles.nav} center`}>
              SERVICES
            </a>
          </div>
          <div>
            <a href="/" className={styles.login}>
              Log in
            </a>
            <button className={styles.signup}>Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
