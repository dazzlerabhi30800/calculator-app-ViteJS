import React, { useContext } from "react";
import { ButtonDigit } from "./ButtonDigit";
import { OperandDigit } from "./OperandDigit";
import { ReduceContext, Actions } from "../Context/ReducerContext";

const Functions = () => {
  const { dispatch } = useContext(ReduceContext);

  return (
    <div className="button--wrapper p-2">
      <ButtonDigit digit="1" dispatch={dispatch} />
      <ButtonDigit digit="2" dispatch={dispatch} />
      <ButtonDigit digit="3" dispatch={dispatch} />
      <OperandDigit operand="+" dispatch={dispatch} />
      <ButtonDigit digit="4" dispatch={dispatch} />
      <ButtonDigit digit="5" dispatch={dispatch} />
      <ButtonDigit digit="6" dispatch={dispatch} />
      <OperandDigit operand="-" dispatch={dispatch} />
      <ButtonDigit digit="7" dispatch={dispatch} />
      <ButtonDigit digit="8" dispatch={dispatch} />
      <ButtonDigit digit="9" dispatch={dispatch} />
      <OperandDigit operand="X" dispatch={dispatch} />
      <ButtonDigit digit="." dispatch={dispatch} />
      <ButtonDigit digit="0" dispatch={dispatch} />
      <OperandDigit operand="/" dispatch={dispatch} />
      <button
        onClick={() => dispatch({ type: Actions.DELETE_DIGIT })}
        className="btn func"
      >
        DEL
      </button>
      <button
        onClick={() => dispatch({ type: Actions.CLEAR })}
        style={{ gridColumn: "span 2" }}
        className="btn func"
      >
        CE
      </button>
      <button
        onClick={() => dispatch({ type: Actions.EVALUATE })}
        style={{ gridColumn: "span 2" }}
        className="btn func"
      >
        =
      </button>
    </div>
  );
};

export default Functions;
