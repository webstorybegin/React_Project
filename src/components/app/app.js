import { Employeers } from "../employeers/Employeers";
import { EmployeersAddForm } from "../employeersAddForm/EmployeersAddForm";
import { Filter } from "../filter/Filter";
import { Info } from "../info/Info";
import { Search } from "../search/Search";

import styles from "./App.module.scss";

function App() {

  const data = [
    {name: "Smith S." , salary: 800},
    {name: "John H." , salary: 3000},
    {name: "Mike L." , salary: 2000}
  ]

  return (
    <div className={styles.app}>
      <Info />

      <div className="search">
        <Search />
        <Filter />
      </div>

      <Employeers data={data} />
      <EmployeersAddForm />
    </div>
  );
}

export default App;
