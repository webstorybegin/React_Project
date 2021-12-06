


import styles from './Search.module.scss';

export const Search = () => {
  return (
    <input
      className={styles.search}
      type="text"
      placeholder="Search employeer"
    />
  );
}