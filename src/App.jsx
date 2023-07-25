import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import Screen from "./Components/Screen";
import Functions from "./Components/Functions";
import { ReduceContext, Actions } from "./Context/ReducerContext";

function App() {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || "dark"
  );

  const { dispatch } = useContext(ReduceContext);

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
        <Screen />
        <Functions />
      </main>
    </>
  );
}

export default App;
