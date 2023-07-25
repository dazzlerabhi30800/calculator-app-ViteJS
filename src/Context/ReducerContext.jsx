import React, { createContext, useEffect, useReducer } from "react";

export const ReduceContext = createContext();

export const Actions = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
};

const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
});

export function formatOperand(operand) {
  if (operand === null) return;
  const [integer, decimal] = operand.split(".");
  if (decimal === null || decimal === undefined)
    return INTEGER_FORMATTER.format(integer);
  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
}

export const ReducerContextProvider = ({ children }) => {
  const stateReducer = (state, { type, payload }) => {
    switch (type) {
      case Actions.ADD_DIGIT:
        if (state.overwrite && payload.digit === ".") return state;
        if (state.overwrite) {
          return {
            ...state,
            currentOperand: payload.digit,
            overwrite: false,
          };
        }
        if (state.currentOperand === "0" && payload.digit === "0") return state;
        if (state.currentOperand === null && payload.digit === ".") {
          return state;
        }
        if (payload.digit === "." && state.currentOperand.includes(".")) {
          return state;
        }

        return {
          ...state,
          currentOperand: `${state.currentOperand || ""}${payload.digit}`,
        };

      case Actions.CHOOSE_OPERATION:
        if (state.currentOperand === null && state.previousOperand === null)
          return state;
        if (state.previousOperand === null && !state.previousOperand) {
          return {
            ...state,
            previousOperand: state.currentOperand,
            operand: payload.operand,
            currentOperand: null,
          };
        }

        if (state.currentOperand === null) {
          return {
            ...state,
            operand: payload.operand,
          };
        }

        return {
          ...state,
          previousOperand: evaluate(state),
          operand: payload.operand,
          currentOperand: null,
        };

      case Actions.DELETE_DIGIT:
        if (state.overwrite) {
          return {
            ...state,
            currentOperand: null,
            overwrite: false,
          };
        }
        if (state.currentOperand === null) return state;
        if (state.currentOperand.length === 1) {
          return {
            ...state,
            currentOperand: null,
          };
        }

        return {
          ...state,
          currentOperand: state.currentOperand.slice(0, -1),
        };

      case Actions.EVALUATE:
        if (
          state.currentOperand === null ||
          state.previousOperand === null ||
          state.operand === null
        ) {
          return state;
        }

        return {
          ...state,
          currentOperand: evaluate(state),
          previousOperand: null,
          operand: null,
          overwrite: true,
        };
      case Actions.CLEAR:
        return {
          ...state,
          currentOperand: null,
          previousOperand: null,
          operand: null,
        };
    }
  };

  function evaluate({ previousOperand, operand, currentOperand }) {
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return "";
    let computation = "";
    switch (operand) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "X":
        computation = prev * current;
        break;

      case "/":
        computation = prev / current;
        break;
    }
    return computation.toString();
  }

  const [{ previousOperand, operand, currentOperand }, dispatch] = useReducer(
    stateReducer,
    { previousOperand: null, operand: null, currentOperand: null }
  );

  return (
    <ReduceContext.Provider
      value={{ data: { previousOperand, operand, currentOperand }, dispatch }}
    >
      {children}
    </ReduceContext.Provider>
  );
};
