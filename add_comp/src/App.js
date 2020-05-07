import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [],
    };
  }

  updateInput = (key, value) => {
    this.setState({
      [key]: value,
    });
  };

  addItem = () => {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem,
    };
    const list = [...this.state.list];

    list.push(newItem);

    this.setState({
      list,
      newItem: "",
    });
  };

  deleteItem(id) {
    const list = [...this.state.list];
    const updateList = list.filter((item) => item.id !== id);
    this.setState({
      list: updateList,
    });
  }
  render() {
    return (
      <div className="App">
        <div>
          <input
            type="text"
            placeholder="type item here..."
            value={this.state.newItem}
            onChange={(e) => this.updateInput("newItem", e.target.value)}
          />
        </div>
        <br />
        <button onClick={() => this.addItem()}>Add</button>
        <br />
        <ul>
          {this.state.list.map((item) => (
            <li key={item.id}>
              {item.value}
              <button onClick={() => this.deleteItem(item.id)}>x</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
