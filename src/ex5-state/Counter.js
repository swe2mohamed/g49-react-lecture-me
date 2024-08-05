import React, { useState } from "react";
import PropTypes from "prop-types";

const Counter = () => {
    const [count, setCount] = useState(0);
    const incrementHandler = () => {
        setCount(count + 1);
    }

    const decrementHanlder = () => {
        setCount(count - 1);
    }

    const resetHandler = () => {
        setCount(0);
    }
        
  return (
    <div className="container">
        <h3>Counter: {count}</h3>
      <button
        onClick={incrementHandler}
        type="button"
        className="btn btn-success"
      >Increment</button>
      <button
        onClick={decrementHanlder}
        type="button"
        className="btn btn-danger"
      >Decrement</button>
      <button
        onClick={resetHandler}
        type="button"
        className="btn btn-secondary"
      >Reset</button>
    </div>
  );
};


export default Counter;
