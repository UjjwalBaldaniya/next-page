import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { TEACHER } from "@/utils/constant";

const TeacherNavbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/server">Server</Link>
      <Link href="/client">Client</Link>
      <Link href="/static">Static</Link>
      <Link href="/isr">ISR</Link>
    </nav>
  );
};

const StudentNavbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/home">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/xyz">XYZ</Link>
    </nav>
  );
};

const Navbar = ({ role }) => {
  return role === TEACHER ? <TeacherNavbar /> : <StudentNavbar />;
};

export default Navbar;
