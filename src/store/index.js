import { createStore } from "redux";

const initialState = {
  count: 0,
};
const countReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      count: state.count + action.amount,
    };
  }
  if (action.type === "decrement") {
    return {
      count: state.count - 1,
    };
  }
  return {
    count: 0,
  };
};

const store = createStore(countReducer);
export default store;
