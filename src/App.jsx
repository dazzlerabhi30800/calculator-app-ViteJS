import React, { useState, useEffect } from "react";
import "./App.css";
import Screen from "./Components/Screen";
import Functions from "./Components/Functions";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || false);
  // console.log(theme);

  const handleTheme = () => {
    if (theme) {
      setTheme(false);
      document.body.classList.remove("light");
      window.localStorage.setItem("theme", theme);
    } else {
      setTheme(true);
      document.body.classList.add("light");
      window.localStorage.setItem("theme", theme);
    }
  };

  useEffect(() => {
    let saveTheme = localStorage.getItem("theme");
    let boolValue = Boolean(saveTheme);
    if (!boolValue) {
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
