/**
 * Import CSS Module Footer.
 * Disimpan di object styles.
 */
import styles from "./Footer.module.css";

function Footer() {
  /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <table>
          <tr>
            <td>
              <ul className={styles.group}>
                <li>
                  Contact: us <br />
                  <div className={styles.tab}>&emsp;Mading.nf.com</div>
                </li>
                <li>
                  Office: <br />
                  <div className={styles.tab}>&emsp;Depok City</div>
                </li>
              </ul>
            </td>
            <td>
              <ul className={styles.group}>
                <li>
                  Phone: <br />
                  <div className={styles.tab}>&emsp;021-001122334</div>
                </li>
                <li>
                  E-mail: <br />
                  <div className={styles.tab}>&emsp;madingding@nf.com</div>
                </li>
              </ul>
            </td>
          </tr>
        </table>
      </footer>
    </div>
  );
}

export default Footer;
