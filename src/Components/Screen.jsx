import React, { useContext } from "react";
import { ReduceContext, formatOperand } from "../Context/ReducerContext";

const Screen = () => {
  const {
    data: { currentOperand, operand, previousOperand },
  } = useContext(ReduceContext);

  return (
    <div className="screen ">
      <div className="inner-screen">
        {currentOperand ? formatOperand(currentOperand) : 0}
      </div>
      <div className="previous">
        {previousOperand ? formatOperand(previousOperand) : 0}{" "}
        {operand ? operand : ""}
      </div>
    </div>
  );
};
export default Screen;
