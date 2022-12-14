import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/counterSlice";
const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  const show = useSelector((state) => state.counter.showCounter);
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };
  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };
  const handleIncrease = () => {
    dispatch(counterActions.increase(10));
  };
  return (
    <main className={classes.counter}>
      <h1>Redux function Counter</h1>
      {show && <div className={classes.value}>{count}</div>}
      <div>
        <button onClick={handleIncrement}>increment</button>
        <button onClick={handleIncrease}>increase</button>
        <button onClick={handleDecrement}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class MyCounter extends Component {
//   handleIncrement() {
//     this.props.increment()
//   }
//   handleDecrement() {
//     this.props.decrement()
//   }
//   toggleCounterHandler() {}
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux class Counter</h1>
//         <div className={classes.value}>{this.props.count}</div>
//         <div>
//           <button onClick={this.handleIncrement.bind(this)}>increment</button>
//           <button onClick={this.handleDecrement.bind(this)}>decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//       </main>
//     );
//   }
// }
// const mapStateToProps = (state) => {
//   return {
//     count: state.count,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };

// export connect(mapStateToProps, mapDispatchToProps)(MyCounter);
