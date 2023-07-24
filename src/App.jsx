import React, { useState, useEffect } from "react";
import "./App.css";
import Screen from "./Components/Screen";
import Functions from "./Components/Functions";

function App() {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || "dark"
  );
  const [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
    his: 0,
  });

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.body.classList.remove("light");
    } else {
      setTheme("light");
      document.body.classList.add("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  useEffect(() => {
    let saveTheme = JSON.parse(localStorage.getItem("theme"));
    // let boolValue = Boolean(saveTheme);
    if (saveTheme === "dark") {
      document.body.classList.remove("light");
      return;
    }
    document.body.classList.add("light");
  }, []);

  return (
    <>
      <header onClick={handleTheme}>
        <div className="circle"></div>
      </header>
      <main className="rounded-sm">
        <Screen value={calc.num ? calc.num : calc.res} his={calc.his} />
        <Functions setCalc={setCalc} calc={calc} />
      </main>
    </>
  );
}

export default App;
