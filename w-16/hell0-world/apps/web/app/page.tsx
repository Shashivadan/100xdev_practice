import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@repo/ui/button";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Button appName="hello-world">this is button</Button>
      </main>
    </div>
  );
}
