import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import { addTodo } from "../MiddleTodo/TodoSlice";
import { ActionsinFooter } from "../Footer/footerBar";
import { markAllCompleted, deleteAllCompleted } from "../MiddleTodo/TodoSlice";

function Header() {
  const todoState = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const ref = React.createRef();
  console.log("ssssref", ref);
  const handleClick = (e) => {
    if (e.which === 13) {
      dispatch(addTodo(e.target.value));
      e.target.value = "";
    }
  };

  const handleRefFilter = () => {
    if (
      ref.current.style.display == "none" ||
      ref.current.style.display == ""
    ) {
      ref.current.style.display = "block";
    } else {
      ref.current.style.display = "none";
    }
  };
  return (
    <>
      <h3 className="pb-2 text-center">Todo Application</h3>

      <nav className="navbar navbar-light bg-light justify-content-end">
        <input
          className="form-control  "
          style={{ width: "500px", marginRight: "30px" }}
          type="text"
          placeholder="Enter Todo's to be done.."
          onKeyPress={(e) => handleClick(e)}
          ref={inputRef}
        />
        <button
          className="btn p-0 "
          onClick={handleRefFilter}
          style={{ marginRight: "20px" }}
        >
          <i className="bi bi-filter"></i>Filter
        </button>
        <div className="d-flex">
          <input
            style={{ margin: "auto" }}
            type="checkbox"
            onChange={(e) => {
              let value = e.target.checked;
              console.log("vvvvvvv", value);
              dispatch(markAllCompleted(value));
            }}
          ></input>
          <span className="m-2">Complete All</span>
          <button
            className="mx-2"
            onClick={() => {
              dispatch(deleteAllCompleted());
            }}
          >
            <i class="bi bi-trash-fill"></i>
          </button>
        </div>
      </nav>
      <ActionsinFooter ref={ref} />
    </>
  );
}
export default Header;
