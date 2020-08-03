import styles from "../styles/Headbar.module.css";

interface HeadbarProps {
  message?: string;
}

export default function Headbar(props: HeadbarProps) {
  return props.message ? (
    <div className={styles.headbar}>
      <p>{props.message}</p>
    </div>
  ) : null;
}
