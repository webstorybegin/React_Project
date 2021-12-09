import { Component } from "react";

import { Employees } from "../Employees/Employees";
import { EmployeesAddForm } from "../EmployeesAddForm/EmployeesAddForm";
import { Filter } from "../Filter/Filter";
import { Info } from "../Info/Info";
import { Search } from "../Search/Search";

import styles from "./App.module.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        { name: "John Connor", salary: 800, increase: false, like: false, id: 1 },
        { name: "Sara Connor", salary: 3000, increase: false, like: false, id: 2 },
        { name: "T-1000", salary: 2000, increase: false, like: false, id: 3 },
      ],
    };
    this.newId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      like: false,
      id: this.newId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  }; 

  onToggleProp = (id, prop) => {
    /////// Option 1
    // this.setState(({data}) => {

    //   const index = data.findIndex(elem => elem.id === id)

    //   const old = data[index];
    //   const newItem = {...old, increase: !old.increase};
    //   const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

    //   return {
    //     data: newArr
    //   }
    // })
    
    /////// Option 2
    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      })
    }));
  };


  render() {
    const employees = this.state.data.length;
    const increased = this.state.data.filter(item => item.increase).length;

    return (
      <div className={styles.app}>
        <Info employees={employees} increased={increased} />

        <div className="search">
          <Search />
          <Filter />
        </div>

        <Employees
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
