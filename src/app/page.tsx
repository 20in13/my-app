import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import produtos from "./produtos";

export default function Home() {
  return (
    <main className={styles.main}>
    <>
      <h1>Hello next</h1>
      <ol>
        {
          produtos.map(
            (prod) =>
              <link href={`/listaprodutos/${prod.id}`} key={prod.id}> 
                <li>{prod.nome}</li>
              </link>
          )
        }
      </ol>

      <link href={"/"}> Home </link>
    </>
      <h2>h2</h2>
      <h3>h3</h3>
      <Link href={"/sobre"}> Sobre </Link>
    </main>
  );
}
