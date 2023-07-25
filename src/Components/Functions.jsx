import React from "react";

const Functions = () => {
  const handleDigit = () => {
    console.log("handleDigit");
  };

  return (
    <div className="button--wrapper p-2">
      <button className="btn">1</button>
      <button className="btn">2</button>
      <button className="btn">3</button>
      <button className="btn func">+</button>
      <button className="btn">4</button>
      <button className="btn">5</button>
      <button className="btn">6</button>
      <button className="btn func">-</button>
      <button className="btn">7</button>
      <button className="btn">8</button>
      <button className="btn">9</button>
      <button className="btn func">X</button>
      <button className="btn">.</button>
      <button className="btn">0</button>
      <button className="btn func">/</button>
      <button className="btn func">DEL</button>
      <button style={{ gridColumn: "span 2" }} className="btn func">
        CE
      </button>
      <button style={{ gridColumn: "span 2" }} className="btn func">
        =
      </button>
    </div>
  );
};

export default Functions;
