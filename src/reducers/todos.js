import * as types from "../actions/ActionTypes";

//리듀스는 현재의 state와 action을 매개변수로 받아 상태들을 리턴해준다
const todos = (state = [], action) => {
  switch (action.type) {
    //ADD_TODO는 현재의 state(list에 todo들)와 action에서 새로 받아온 내용을 포함해서 전달
    case types.ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];

    //TOGGLE_TODO는 현재의 완료상태를 반대화해서 전달
    case types.TOGGLE_TODO:
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    default:
      return state;
  }
};

export default todos;
