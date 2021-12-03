import React from "react";

function SingleTodo({ todo, handleDelete, handleTick, handleSelect }) {
  console.log(todo);
  return (
    <div className="row ">
      <div className="col-6">
        <input
          type="checkbox"
          onChange={() => handleTick(todo.id)}
          checked={todo.completed}
        ></input>
        <span className="mx-3">{todo.content}</span>
      </div>

      <div className="col-6 text-end">
        <select
          className="mx-4"
          name="todoType"
          id="todoTypes"
          onChange={(event) => handleSelect(todo.id, event.target.value)}
        >
          <option value=""></option>
          <option value="home">Home</option>
          <option value="office">Office</option>
          <option value="friends">Friends</option>
        </select>
        <span className=" fw-bold " onClick={() => handleDelete(todo.id)}>
          &times;
        </span>
      </div>
    </div>
  );
}
export default SingleTodo;
