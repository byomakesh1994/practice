import React, { memo } from "react";

const Child = ({ todo, addTodo }) => {
  console.log("child render");
  return (
    <>
      <h3>Child Todo</h3>
      {todo.map((el, i) => (
        <p key={i}>{el + i}</p>
      ))}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

export default memo(Child);
