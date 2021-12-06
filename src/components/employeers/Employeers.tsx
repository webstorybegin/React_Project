import React, { FC } from 'react';

import { EmployeersItem } from "../employeersItem/EmployeersItem"

import './Employeers.module.scss';

interface IEmployeersProps {
  data: [],
  salary: any
}

export const Employeers: FC<IEmployeersProps> = ({data}) => {

  const elements = data.map(item => {    
    return (
      <EmployeersItem name={item.name} salary={item.salary} />
    )
  })

  return (
    <div className="employeers">
      <ul className="app-list list-group">
        {elements}
      </ul>
    </div>
  )
} 