import styles from "../styles/Card.module.css";
import { CardProps } from "../pages";
import moment from "moment";

export default function Card(props: CardProps) {
  return (
    <a href={props.link} className={styles.card}>
      <h3>
        <span>{props.title}</span> <span className={styles.arrow}>&rarr;</span>
      </h3>
      <p>{props.description}</p>
      <div>
        <time>{moment(props.date).format("MMM D, YYYY")}</time>
        {props.new && <span>New</span>}
      </div>
    </a>
  );
}
