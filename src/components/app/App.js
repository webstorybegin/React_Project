import { Component } from "react";

import { Employees } from "../Employees/Employees";
import { EmployeesAddForm } from "../Employees/EmployeesAddForm/EmployeesAddForm";
import { Filter } from "../Filter/Filter";
import { Info } from "../Info/Info";
import { Search } from "../Search/Search";

import styles from "./App.module.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          name: "Edward Furlong",
          salary: 800,
          increase: false,
          like: false,
          id: 1,
        },
        {
          name: "Linda Hamilton",
          salary: 1200,
          increase: false,
          like: false,
          id: 2,
        },
        {
          name: "Robert Patrick",
          salary: 700,
          increase: false,
          like: false,
          id: 3,
        },
        {
          name: "Joe Morton",
          salary: 1500,
          increase: false,
          like: false,
          id: 4,
        },
        {
          name: "Michael Biehn",
          salary: 2300,
          increase: false,
          like: false,
          id: 5,
        },
        {
          name: "Arnold Schwarzenegger",
          salary: 3500,
          increase: false,
          like: false,
          id: 6,
        },
      ],
      term: '',
      filter: "all",
    };
    this.newId = 7;
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
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };

  updSearch = (term) => {
    this.setState({ term });
  };

  filter = (items, filter) => {
    switch (filter) {
      case "like":
        return items.filter((item) => item.like);
      case "more1000":
        return items.filter((item) => item.salary > 1000);
      default:
        return items;
    }
  };

  onSelectFilter = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { data, term, filter } = this.state;
    const employees = this.state.data.length;
    const increased = this.state.data.filter((item) => item.increase).length;
    const visibleData = this.filter(this.searchEmp(data, term), filter);

    return (
      <div className={styles.app}>
        <Info employees={employees} increased={increased} />

        <div className={styles.search}>
          <Search updSearch={this.updSearch} />
          <Filter 
            filter={filter} 
            onSelectFilter={this.onSelectFilter} 
          />
        </div>

        <Employees
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
