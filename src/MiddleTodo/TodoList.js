import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import {useState, useEffect} from
import SingleTodo from "./SingleTodo";
import {
  deleteSingleTodo,
  toggleComplete,
  markAllCompleted,
  deleteAllCompleted,
  todoTypeSelection,
} from "./TodoSlice";

function TodoLists() {
  const todoState = useSelector((state) => state.todos);
  const filterState = useSelector((state) => state.filters);
  console.log("stateeee", todoState);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteSingleTodo(id));
  };

  const handleToggle = (id) => {
    dispatch(toggleComplete(id));
  };

  const handSelectTag = (id, value) => {
    dispatch(todoTypeSelection({ id: id, value: value }));
  };

  const something = function (filterStatus, todoState) {
    switch (filterStatus) {
      case "Show_all":
        return todoState;
      case "Completed":
        return todoState.filter((todo) => todo.completed == true);
      case "Incompleted":
        return todoState.filter((todo) => todo.completed == false);
    }
  };

  const morething = function (filterbyTypeState, todoState) {
    if (filterbyTypeState == "") {
      return todoState;
    }
    const filteredArray = todoState.filter(
      (todo) => todo.todoType == filterbyTypeState
    );
    return filteredArray;
  };

  const filterTodobyStatus = something(filterState.filterStatus, todoState);

  const filterTodoById = morething(
    filterState.filterTodoType,
    filterTodobyStatus
  );

  return (
    <div className="container mb-5">
      <div className=" row  justify-content-center gx-0">
        <ul
          className="list-group col-12"
          style={{ width: "500px", height: "200px", overflowY: "scroll" }}
        >
          {filterTodoById.map((todo) => {
            return (
              <li className="list-group-item ">
                <SingleTodo
                  todo={todo}
                  handleDelete={handleDelete}
                  handleTick={handleToggle}
                  handleSelect={handSelectTag}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default TodoLists;
