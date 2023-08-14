// 8/8/2023
// Sean Peters
// This is the handle componenet .jsx which the ComponentsRange and DefaultSLider use for their handle interactions

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";


export const ComponentsHandle = ({ stateProp, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "normal",
  });

  return (
    <div
      className={`components-handle ${state.state} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onClick={() => {
        dispatch("click");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <div className="handle" />
    </div>
  );
};
//function for the switching of states during mouse-handle interactions
function reducer(state, action) {
  if (state.state === "normal") {
    switch (action) {
      case "mouse_enter":
        return {
          state: "hovered",
        };
    }
  }

  if (state.state === "hovered") {
    switch (action) {
      case "click":
        return {
          state: "focused",
        };
    }
  }

  switch (action) {
    case "mouse_leave":
      return {
        ...state,
        state: "normal",
      };
  }

  return state;
}

ComponentsHandle.propTypes = {
  stateProp: PropTypes.oneOf(["hovered", "focused", "normal"]),
};
