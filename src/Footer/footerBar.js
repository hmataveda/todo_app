import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { statusObj } from "../Filter/filterSlice";
import { changeStatus, changeType } from "../Filter/filterSlice";

export const ActionsinFooter = React.forwardRef((props, ref) => {
  console.log("reffff", ref);
  const todoTypes = ["Home", "Office", "Friends", "Relatives"];

  const filterState = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  console.log("filterState", filterState);
  function StatusFilter({ statusObj, statusState }) {
    const filterView = Object.keys(statusObj).map((key) => {
      const handleClick = (value) => {
        if (value == statusState) return;
        dispatch(changeStatus(value));
      };
      return (
        <li className="statusList">
          <input
            type="radio"
            onChange={() => {
              handleClick(statusObj[key]);
            }}
          />
          <span className="m-2 namee">{statusObj[key]}</span>
        </li>
      );
    });
    return <div>{filterView}</div>;
  }

  function TododTypeFilter({ todoTypes }) {
    const typeView = todoTypes.map((type) => {
      const value = type.toLowerCase();
      const handleChange = (e, value) => {
        const checked = e.target.checked;
        if (checked) {
          dispatch(changeType(value));
        } else {
          dispatch(changeType(""));
        }
      };
      return (
        <li className="typesList">
          <input
            type="checkbox"
            onClick={(e) => handleChange(e, value)}
          ></input>
          <span className="m-2">{type}</span>
        </li>
      );
    });

    return <div>{typeView}</div>;
  }

  return (
    <div>
      <div ref={ref} className="filterDiv">
        <h5>Status</h5>
        <StatusFilter
          statusObj={statusObj}
          statusState={filterState.filterStatus}
        ></StatusFilter>

        <hr />
        <h5>Todo Types</h5>
        <TododTypeFilter todoTypes={todoTypes}></TododTypeFilter>
      </div>
    </div>
  );
});
