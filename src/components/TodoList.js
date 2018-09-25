import React, { Component } from "react";

import Todo from "./Todo";

class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => (
          //Todo 컴포넌트에서는 아래를 받는다
          //  {id: 0, text: "할일", completed: false, onClick: f}
          <Todo
            {...todo}
            key={todo.id}
            onClick={() => this.props.onTodoClick(todo.id)}
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;
