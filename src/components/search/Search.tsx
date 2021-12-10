import { Component } from 'react';

import styles from './Search.module.scss';

interface Props {
  updSearch: any
}

interface State {
  term: string
}

export class Search extends Component <Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  updSearch = (e) => {
    const term = e.target.value;
    this.setState({term})
    this.props.updSearch(term)
  }

  render() {
    return (
      <input
        className={styles.search}
        type="text"
        placeholder="Search employeer"
        value={this.state.term}
        onChange={this.updSearch}
      />
    );
  }
}