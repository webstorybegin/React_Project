import { Component } from 'react';

import './EmployeersAddForm.css';

interface Props {
  target: any
}

interface State {
  name: string,
  salary: number,
}

export class EmployeersAddForm extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: "",
      salary: 0,
    };
  }

  onValueChange = (e: Props) => {
    return this.setState({...this.state, [e.target.name] : e.target.value})
  }

  render() {
    const {name, salary} = this.state;

    return (
      <div className="app-add-form">
        <h3 className="titleForm">Add a new employee</h3>
        <form className="add-form d-flex">
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="What's his name"
            name="name"
            value={name}
            onChange={this.onValueChange}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="Salary in $ ?"
            name="salary"
            value={salary}
            onChange={this.onValueChange}
          />

          <button type="submit" className="btn btn-outline-light">
            Add
          </button>
        </form>
      </div>
    );
  }
};
