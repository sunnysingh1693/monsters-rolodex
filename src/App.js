import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.components";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleSearch = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex </h1>
        <input
          type="search"
          placeholder="Search Monsters"
          onChange={this.handleSearch}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
