import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/server">Server</Link>
      <Link href="/client">Client</Link>
      <Link href="/static">Static</Link>
      <Link href="/isr">ISR</Link>
    </nav>
  );
};

export default Navbar;
