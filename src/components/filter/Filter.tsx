

import styles from './Filter.module.scss';

export const Filter = () => {
  return (
    <div className={styles.btnGroup}>
      <button className="btn btn-light" type="button">
        All employees
      </button>
      <button className="btn btn-light" type="button">
        Upward
      </button>
      <button className="btn btn-light" type="button">
        Salary is more than $1000
      </button>
    </div>
  );
}