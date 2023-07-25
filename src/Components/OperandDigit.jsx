import React from "react";
import { Actions } from "../Context/ReducerContext";

export const OperandDigit = ({ operand, dispatch }) => {
  return (
    <button
      onClick={() =>
        dispatch({ type: Actions.CHOOSE_OPERATION, payload: { operand } })
      }
      className="btn func"
    >
      {operand}
    </button>
  );
};
