import styles from "../Navbar/Navbar.module.css";
import { Link } from "react-router-dom";

const NavbarResponsive = ({ hamActive }) => {
  return (
    <div className={`${styles.navResWrapper} ${hamActive && styles.open}`}>
      <div className={styles.navResInner}>
        <ul className={`${styles.navResLinks}`}>
          <li>
            <Link to="/" className={`${styles.navR} center`}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/features" className={`${styles.navR} center`}>
              Features
            </Link>
          </li>
          <li>
            <Link to="/questions" className={`${styles.navR} center`}>
              Questions
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarResponsive;
