import React from "react";
import { Actions } from "../Context/ReducerContext";

export const ButtonDigit = ({ digit, dispatch }) => {
  return (
    <button
      onClick={() => dispatch({ type: Actions.ADD_DIGIT, payload: { digit } })}
      className="btn"
    >
      {digit}
    </button>
  );
};
