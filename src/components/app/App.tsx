import { Component } from "react";

import { Employeers } from "../Employeers/Employeers";
import { EmployeersAddForm } from "../EmployeersAddForm/EmployeersAddForm";
import { Filter } from "../Filter/Filter";
import { Info } from "../Info/Info";
import { Search } from "../Search/Search";

import styles from "./App.module.scss";

interface Props {
  target: any;
}

interface State {
  data: any[],
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      data: [
        { name: "Smith S.", salary: 800, increase: false, id: 1 },
        { name: "John H.", salary: 3000, increase: true, id: 2 },
        { name: "Mike L.", salary: 2000, increase: false, id: 3 },
      ],
    };
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id),
      }
    })
  }

  render() {
    return (
      <div className={styles.app}>
        <Info />

        <div className="search">
          <Search />
          <Filter />
        </div>

        <Employeers 
          data={this.state.data} 
          onDelete={this.deleteItem} 
        />
        <EmployeersAddForm />
      </div>
    );
  }
}

export default App;
