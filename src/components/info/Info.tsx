


import styles from "./Info.module.scss";

export const Info = () => {
  return (
    <div className={styles.info}>
      <h1 className={styles.title}>Employee accounting at Skynet</h1>
      <h2 className={styles.subtitle}>Headcount</h2>
      <h2 className={styles.subtitle}>
        The award will be presented to the employees of:
      </h2>
    </div>
  );
}