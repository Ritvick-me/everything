import Head from "next/head";
import styles from "../styles/Home.module.css";
import Card from "../components/Card";
import Pill from "../components/Pill";
import { useState, useEffect } from "react";
import Headbar from "../components/Headbar";
import { cards, pills, message } from "../data";

export interface PillProps {
  label: string;
  value: string;
}

export interface CardProps {
  title: string;
  description?: string;
  date: number;
  new: boolean;
  link: string;
  tags: Array<string>;
}

export default function Home() {
  const [currentPill, setCurrentPill] = useState(pills[0].value);

  return (
    <div className={styles.container}>
      <Head>
        <title>Everything SRMKZILLA</title>
        <link rel="icon" type="image/png" href="/favicon.png" />

        <meta
          name="description"
          content="Everything that SRMKZILLA has to share. Under one roof."
        ></meta>

        <meta property="og:type" content="website"></meta>
        <meta
          property="og:url"
          content="https://everything.srmkzilla.net/"
        ></meta>
        <meta property="og:title" content="SRMKZILLA"></meta>
        <meta
          property="og:description"
          content="Everything that SRMKZILLA has to share. Under one roof."
        ></meta>
        <meta property="og:image" content="/cover.jpg"></meta>

        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta
          property="twitter:url"
          content="https://everything.srmkzilla.net/"
        ></meta>
        <meta property="twitter:title" content="SRMKZILLA"></meta>
        <meta
          property="twitter:description"
          content="Everything that SRM</meta>KZILLA has to share. Under one roof."
        ></meta>
        <meta property="twitter:image" content="/cover.jpg"></meta>
      </Head>
      <Headbar message={message} />

      <main className={styles.main}>
        <h1 className={styles.title}>Everything SRMKZILLA</h1>
        <div className={styles.verticalGrid}>
          {pills.map((pill, index) => {
            return (
              <Pill
                key={index}
                active={pill.value === currentPill}
                {...pill}
                handleTap={(value) => {
                  setCurrentPill(value);
                }}
              />
            );
          })}
        </div>

        <div className={styles.grid}>
          {cards
            .filter(
              (card) => card.tags.includes(currentPill) || currentPill === ""
            )
            .map((card, index) => {
              return <Card {...card} key={index} />;
            })}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://srmkzilla.net"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/logo.svg" alt="Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
