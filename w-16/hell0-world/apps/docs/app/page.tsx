import Image from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { Admin } from "@repo/ui/Admin";
export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Admin />
        {/* <InputBox/> */}
      </main>
    </div>
  );
}
