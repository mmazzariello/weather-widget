import styles from "./Loading.module.css";

export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loader}>
        <div></div>
      </div>
    </div>
  );
}
