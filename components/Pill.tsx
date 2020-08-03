import styles from "../styles/Pill.module.css";
import classNames from "classnames";
import { PillProps } from "../pages";

interface Props extends PillProps {
  active: boolean;
  handleTap: (value: string) => void;
}
export default function Pill({ active, handleTap, label, value }: Props) {
  return (
    <a
      onClick={() => {
        handleTap(value);
      }}
      className={classNames(styles.pill, { [styles.active]: active })}
    >
      <h6>{label}</h6>
    </a>
  );
}
