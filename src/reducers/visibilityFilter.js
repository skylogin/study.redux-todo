import * as types from "../actions/ActionTypes";

//리듀스의 역할은 같지만 state의 상태가 다르기때문에 todos.js와 분리하여 진행

const visibilityFilter = (state = "SHOW_ALL", action) => {
  //넘어온 필터대로 전달
  if (action.type === types.SET_VISIBILITY_FILTER) {
    return action.filter;
  } else {
    return state;
  }
};

export default visibilityFilter;
