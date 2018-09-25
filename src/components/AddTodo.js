import React, { Component } from "react";
//import { findDOMNode } from "react-dom";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.textInput = null;

    this.setTextInputRef = element => {
      this.textInput = element;
    };

    this.focusTextInput = () => {
      this.textInput.focus();
    };
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.setTextInputRef} />
        <button onClick={e => this.handleClick(e)}>Add</button>
      </div>
    );
  }

  componentDidMount() {
    this.focusTextInput();
  }

  handleClick(e) {
    //const node = findDOMNode(this.refs.input);
    //const text = node.value.trim();
    const node = this.textInput;
    const text = node.value.trim();
    this.props.onAddClick(text);
    node.value = "";

    //node.focus();
  }
}

export default AddTodo;
