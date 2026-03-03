import styles from "./ServiceCard.module.css";

interface Props {
  title: string;
  description: string;
}

export default function ServiceCard({ title, description }: Props) {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}