import React, { Component } from "react";

import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Footer from "./Footer";

import { connect } from "react-redux";
import * as actions from "../actions";

import { VisibilityFilters } from "./Constants";

class App extends Component {
  render() {
    return (
      <div>
        <AddTodo onAddClick={this.props.handleAddTodo} />
        <TodoList
          onTodoClick={this.props.handleToggleTodo}
          todos={this.props.visibleTodos}
        />
        <Footer
          onFilterChange={this.props.handleSetVisibilityFilter}
          filter={this.props.visibilityFilter}
        />
      </div>
    );
  }
}

//state를 props로 매핑하여 store에 전달 (index.js)
const mapStateToProps = state => {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  };
};

//state가 변경되면 dispatch를 통해 액션을 전달
const mapDispatchToProps = dispatch => {
  return {
    handleAddTodo: text => {
      dispatch(actions.addTodo(text));
    },
    handleToggleTodo: id => {
      dispatch(actions.toggleTodo(id));
    },
    handleSetVisibilityFilter: filter => {
      dispatch(actions.setVisibilityFilter(filter));
    }
  };
};

//필터에 따라 보여줄 리스트를 반환
const selectTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    default:
      console.warn("Type is not defined");
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
