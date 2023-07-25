import React, { createContext, useReducer } from "react";

export const ReduceContext = createContext();

const initialState = {
  clicked: false,
};

export const ReducerContextProvider = ({ children }) => {
  const stateReducer = (state, action) => {
    switch (action.type) {
      case "ChangeValue":
        return {
          ...state,
          clicked: !state.clicked,
        };
      default:
        return state;
    }
  };
  const [{ clicked }, dispatch] = useReducer(stateReducer, {});

  return (
    <ReduceContext.Provider value={{ data: clicked, dispatch }}>
      {children}
    </ReduceContext.Provider>
  );
};
