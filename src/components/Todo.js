import React, { Component } from "react";

class Todo extends Component {
  render() {
    const style = {
      textDecoration: this.props.completed ? "line-through" : "none",
      cursor: this.props.completed ? "default" : "pointer"
    };

    return (
      <li onClick={this.props.onClick} style={style}>
        {this.props.text}
      </li>
    );
  }
}

export default Todo;
