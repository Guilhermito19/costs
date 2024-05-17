import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import styles from "./footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <FaFacebook />
        </li>
        <li>
          <h1>TESTANDO</h1>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>
      <p><span>Costs</span> &copy; 2023</p>
    </footer>
  )
}
