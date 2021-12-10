

import styles from './Filter.module.scss';

export const Filter = (props) => {
  const buttonsData = [
    { name: "all", label: "All employees" },
    { name: "like", label: " Who gets a promotion" },
    { name: "more1000", label: "Salary is more than $1000" },
  ];

  const buttons = buttonsData.map(({name, label}) => {
    const active = props.filter === name;
    const clazz = active ? 'btn-light' : 'btn-outline-light'

    return (
      <button
        className={`btn ${clazz}`}
        type="button"
        key={name}
        onClick={() => props.onSelectFilter(name)}
      >
        {label}
      </button>
    );
  })

  return (
    <div className={styles.btnGroup}>
      {buttons}
    </div>
  );
}