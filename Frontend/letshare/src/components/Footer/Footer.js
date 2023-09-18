import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    <nav className={`${styles.navbarWrapper} center`}>
      <div className={`${styles.navbarColumn} center`}>
        <div className={`${styles.navbarInner} center`}>
          <div className={`${styles.navLeft}`}>LetShare</div>
          <div className="center">
            <a href="/" className={`${styles.navLink}`}>
              Terms of Service
            </a>
            <a href="/" className={`${styles.navLink}`}>
              Privacy Policy
            </a>
          </div>
          <div>
            <span>
              <a href="#facebook" className="fab fa-facebook-square">
                {" "}
              </a>
            </span>
            <span>
              <a href="#linkedin" className="fab fa-twitter">
                {" "}
              </a>
            </span>
            <span>
              <a
                href="#instagram"
                className="fab fa-instagram"
                style={{ color: "black" }}
              >
                {" "}
              </a>
            </span>
            <span>
              <a href="#pinterest" className="fab fa-pinterest">
                {" "}
              </a>
            </span>
          </div>
        </div>
        <div className={`${styles.footerText} center`}>
          <p>
            &copy; {currentYear} LetShare. All Rights Reserved.
            <br />
            Your trusted platform for connecting restaurants and charity homes to reduce food waste.
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Footer;