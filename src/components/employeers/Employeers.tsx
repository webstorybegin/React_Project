import { FC } from 'react';
import { EmployeersItem } from '../EmployeersItem/EmployeersItem';

import "./Employeers.css";
interface IEmployeersProps {
  data: any[],
  onDelete: any,
}

export const Employeers: FC<IEmployeersProps> = ({data, onDelete}) => {

  // else id in backend is empty or undefined ----> 
  // const {id, ...itemProps}
  // return <EmployeersItem key={id} {...itemProps} or name={item.name} salary={item.salary} />

  const elements = data.map(item => {
    const {id, ...itemProps} = item; 

    return (
      <EmployeersItem 
        key={id} 
        {...itemProps} 
        onDelete={() => onDelete(id)} 
      />
    );
  });

  return (
    <div className="employeers">
      <ul className="app-list list-group">{elements}</ul>
    </div>
  );
}