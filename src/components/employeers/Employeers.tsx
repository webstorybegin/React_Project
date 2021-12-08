import { FC } from 'react';
import { EmployeersItem } from '../EmployeersItem/EmployeersItem';

import "./Employeers.css";
interface IEmployeersProps {
  data: any[],
}

export const Employeers: FC<IEmployeersProps> = ({data}) => {

  // else id in backend is empty or undefined ----> 
  // const {id, ...itemProps}
  // return <EmployeersItem key={id} {...itemProps} or name={item.name} salary={item.salary} />

  const elements = data.map((item, index) => {
    return <EmployeersItem key={index} {...item} />;
  });

  return (
    <div className="employeers">
      <ul className="app-list list-group">{elements}</ul>
    </div>
  );
}