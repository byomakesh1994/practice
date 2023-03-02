import React, { useCallback, useMemo, useState } from "react";
import Child from "./Child";
import Test from "./Test";

const CallbackHook = () => {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState([]);
  const [show, setShow] = useState(false);
  const Increment = () => {
    setCount(count + 1);
  };
  const Reset = () => {
    setCount(0);
  };
  const addTodo = useCallback(() => {
    setTodo((prev) => [...prev, `new`]);
  }, [todo]);
  const memoNumber = (num) => {
    for (let i = 0; i < 900000000; i++) {}
    return num;
  };
  //const number = memoNumber(count);
  const number = useMemo(() => {
    return memoNumber(count);
  }, [count]);
  console.log("Parent render");
  return (
    <>
      <div>
        <Child todo={todo} addTodo={addTodo} />
        <div>Parent Count : {count}</div>
        <button onClick={Increment}>increment </button>
        <button onClick={Reset}>reset </button>
      </div>
      <Test />
      <div>
        <h4>Use Memo</h4>
        <h3>Number : {number}</h3>
        <button onClick={() => setShow(!show)}>
          {show ? "Clicked" : "Unclicked"}
        </button>
      </div>
    </>
  );
};

export default CallbackHook;
