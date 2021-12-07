import { Employeers } from "../Employeers/Employeers";
import { EmployeersAddForm } from "../EmployeersAddForm/EmployeersAddForm";
import { Filter } from "../Filter/Filter";
import { Info } from "../Info/Info";
import { Search } from "../Search/Search";

import styles from "./App.module.scss";

function App() {

  const data = [
    {name: "Smith S." , salary: 800, increase: false},
    {name: "John H." , salary: 3000, increase: true},
    {name: "Mike L." , salary: 2000, increase: false}
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
