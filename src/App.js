import { useState } from "react";
import { useCallback } from "react";
import "./App.css";
import Header from "./pages/Header";
import Main from "./pages/Main";

function App() {
  const [mode, setMode] = useState("Pomodoro");

  const modeClass = (getMode) => {
    if (getMode === "Pomodoro") {
      return "red";
    } else if (getMode === "Short Break") {
      return "green";
    } else if (getMode === "Long Break") {
      return "blue";
    }
  };

  return (
    <div className="App">
      <div className={`app-wrapper ${modeClass(mode)}`}>
        <Header />
        <Main mode={setMode} />
      </div>
    </div>
  );
}

export default App;
