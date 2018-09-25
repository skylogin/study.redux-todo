import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";

// 리듀서를 하나로 합침
const reducers = combineReducers({
  todos,
  visibilityFilter
});

export default reducers;
