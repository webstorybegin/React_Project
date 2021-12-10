import { FC } from "react";
import { EmployeesItem } from './EmployeesItem/EmployeesItem';

import "./Employees.scss";
interface IemployeesProps {
  data: any[];
  onDelete: any;
  onToggleProp
}

export const Employees: FC<IemployeesProps> = ({
  data,
  onDelete,
  onToggleProp,

}) => {
  // else id in backend is empty or undefined ---->
  // const {id, ...itemProps}
  // return <employeesItem key={id} {...itemProps} or name={item.name} salary={item.salary} />

  const elements = data.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <EmployeesItem
        key={id}
        {...itemProps}
        onDelete={() => onDelete(id)}
        onToggleProp={(e) =>
          onToggleProp(id, e.currentTarget.getAttribute("data-toggle"))
        }
      />
    );
  });

  return (
    <div className="employees">
      <ul className="app-list list-group">{elements}</ul>
    </div>
  );
};
