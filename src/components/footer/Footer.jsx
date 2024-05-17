import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import styles from "./footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h1>TESTANDO GIT</h1>
      <ul className={styles.social_list}>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>
      <p><span>Costs</span> &copy; {new Date().getFullYear()} </p>
    </footer>
  )
}