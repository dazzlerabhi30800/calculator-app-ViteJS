import React from "react";

const Functions = ({ setCalc, calc }) => {
  const toLocaleString = (num) =>
    String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1,");

  const handleDigit = (e) => {
    const value = e.target.textContent;
    setCalc({
      ...calc,
      num:
        calc.num === 0 && value === "0"
          ? "0"
          : calc.num % 1 === 0
          ? Number(calc.num + value)
          : calc.num + value,
      res: !calc.sign ? 0 : calc.res,
      his:
        calc.his == 0 && value === "0"
          ? "0"
          : calc.his % 1 === 0
          ? Number(calc.his + value)
          : calc.his + value,
    });
  };

  const handleDecimal = (e) => {
    const value = e.target.textContent;

    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  };
  const handleSign = (e) => {
    const value = e.target.textContent;

    setCalc({
      ...calc,
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
      his: calc.his + value,
    });
  };

  const handleResult = () => {
    if (!calc.num && !calc.res) return;
    const math = (a, b, sign) =>
      sign === "+"
        ? a + b
        : sign === "-"
        ? a - b
        : sign === "X"
        ? a * b
        : a / b;
    console.log(calc.sign);

    setCalc({
      ...calc,
      res:
        calc.num === "0" && calc.sign === "/"
          ? "Can't divide with 0"
          : math(Number(calc.res), Number(calc.num), calc.sign),

      his:
        calc.num === "0" && calc.sign === "/"
          ? calc.his
          : toLocaleString(math(Number(calc.res), Number(calc.num), calc.sign)),
      num: 0,
    });
  };

  const handleReset = () => {
    setCalc({
      sign: "",
      res: 0,
      num: 0,
      his: 0,
    });
  };

  const handleDelete = () => {
    if (calc.num === "") {
      console.log("it is empty");
      setCalc({
        ...calc,
        res: calc.res.toString().slice(0, -1),
        his: calc.his == 0 && calc.num === "0" ? 0 : calc.his.slice(0, -1),
      });
    } else {
      console.log("bye");
      setCalc({
        ...calc,
        num: calc.num.toString().slice(0, -1),
        his:
          calc.his == 0 && calc.num === "0"
            ? 0
            : calc.his.toString().slice(0, -1),
      });
    }
  };
  return (
    <div className="button--wrapper p-2">
      <button onClick={handleDigit} className="btn">
        1
      </button>
      <button onClick={handleDigit} className="btn">
        2
      </button>
      <button onClick={handleDigit} className="btn">
        3
      </button>
      <button onClick={handleSign} className="btn func">
        +
      </button>
      <button onClick={handleDigit} className="btn">
        4
      </button>
      <button onClick={handleDigit} className="btn">
        5
      </button>
      <button onClick={handleDigit} className="btn">
        6
      </button>
      <button onClick={handleSign} className="btn func">
        -
      </button>
      <button onClick={handleDigit} className="btn">
        7
      </button>
      <button onClick={handleDigit} className="btn">
        8
      </button>
      <button onClick={handleDigit} className="btn">
        9
      </button>
      <button onClick={handleSign} className="btn func">
        X
      </button>
      <button onClick={handleDecimal} className="btn">
        .
      </button>
      <button onClick={handleDigit} className="btn">
        0
      </button>
      <button onClick={handleSign} className="btn func">
        /
      </button>
      <button onClick={handleDelete} className="btn func">
        DEL
      </button>
      <button
        onClick={handleReset}
        style={{ gridColumn: "span 2" }}
        className="btn func"
      >
        CE
      </button>
      <button
        onClick={handleResult}
        style={{ gridColumn: "span 2" }}
        className="btn func"
      >
        =
      </button>
    </div>
  );
};

export default Functions;
