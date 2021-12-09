import { FC } from 'react';

import styles from "./Info.module.scss";

interface Props {
  employees: number;
  increased: number;
}

export const Info: FC<Props> = ({employees, increased}) => {
  return (
    <div className={styles.info}>
      <h1 className={styles.title}>Employee accounting at Skynet</h1>
      <h2 className={styles.subtitle}>Headcount: {employees}</h2>
      <h2 className={styles.subtitle}>
        The award will be presented <br /> to the employees of: {increased}
      </h2>
    </div>
  );
};