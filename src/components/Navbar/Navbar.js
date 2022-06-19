/**
 * Import CSS Module Navbar.
 * Disimpan di object styles.
 */
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { FaSistrix } from "react-icons/fa";

function Navbar() {
  /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */
  return (
    <>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <div>
            <h1 className={styles.navbar__brand}>MADING</h1>
          </div>
          <div>
            <ul className={styles.navbar__list}>
              <li className={styles.navbar__item}>
                <Link to="/" className={styles.navbar__link}>
                  Home
                </Link>
              </li>
              <li className={styles.navbar__item}>
                <Link to="" className={styles.navbar__link}>
                  E-Mading
                </Link>
              </li>
              <li className={styles.navbar__item}>
                <Link to="/mading/about" className={styles.navbar__link}>
                  About
                </Link>
              </li>
              <li className={styles.navbar__item}>
                <div className={styles.navbar__search}>
                  <form>
                    <input
                      type="text"
                      id="header-search"
                      placeholder="Search blog posts"
                      name="s"
                    />
                    <button className={styles.navbar__button}>
                      <FaSistrix />
                    </button>
                  </form>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
