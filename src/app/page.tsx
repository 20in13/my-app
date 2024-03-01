import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello next</h1>
      <h2>h2</h2>
      <h3>h3</h3>
      <Link href={"/sobre"}> Sobre </Link>
    </main>
  );
}
