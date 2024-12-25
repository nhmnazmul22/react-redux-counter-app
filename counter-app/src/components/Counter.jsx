import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  reset,
  setEndValue,
  setStartValue,
} from "../app/state/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const startCount = useSelector((state) => state.counter.startValue);
  const endCount = useSelector((state) => state.counter.endValue);
  const dispatch = useDispatch();

  const startValueRef = useRef();
  const endValueRef = useRef();

  const handleCount = () => {
    console.log("i am calling");
    dispatch(setStartValue(parseInt(startValueRef.current.value)));
    dispatch(setEndValue(parseInt(endValueRef.current.value)));
  };

  const handleReset = () => {
    dispatch(reset());
    startValueRef.current.value = "";
    endValueRef.current.value = "";
  };
  return (
    <div className="counter-container">
      <div className="counter-box">
        <h1 className="count">{count}</h1>
        <div className="count-start-end">
          <div className="input-box">
            <label htmlFor="startCount">Start Counting:</label>
            <input ref={startValueRef} type="number" id="startCount" />
          </div>
          <div className="input-box">
            <label htmlFor="endCount">End Counting:</label>
            <input ref={endValueRef} type="number" id="endCount" />
          </div>
          <button className="count-btn btn" onClick={handleCount}>
            Count
          </button>
        </div>
        <div className="btn-box">
          <button
            className={`btn increase-btn ${
              count === endCount ? "disabled" : ""
            }`}
            disabled={count === endCount}
            onClick={() => {
              dispatch(increment());
            }}
          >
            Increase +
          </button>
          <button
            className={`btn decrease-btn ${
              count === 0 || count <= startCount ? "disabled" : ""
            }`}
            disabled={count === 0 || count <= startCount}
            onClick={() => {
              dispatch(decrement());
            }}
          >
            Decrease -
          </button>
          <button
            className={`btn reset-btn ${count === 0 ? "disabled" : ""}`}
            disabled={count === 0}
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
