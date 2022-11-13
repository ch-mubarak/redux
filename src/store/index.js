import { createStore } from "redux";

const initialState = {
  count: 0,
  showCounter: true,
};
const countReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      ...state,
      count: state.count + action.amount,
    };
  }
  if (action.type === "decrement") {
    return {
      ...state,
      count: state.count - 1,
    };
  }
  if (action.type === "toggle") {
    return {
      showCounter: !state.showCounter,
      count:state.count
    };
  }
  return state;
};

const store = createStore(countReducer);
export default store;
