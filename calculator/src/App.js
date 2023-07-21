import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [result, setResult] = useState("");

  const clicker = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult("");
  };

  const backSpace = () => {
    setResult(result.slice(0, result.length - 1));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch {
      setResult("Error");
    }
  };

  return (
    <>
      <div className="box">
        <form>
          <input type="text" value={result} />
        </form>

        <div className="buttons">
          <button id="clear" onClick={clear}>
            Clear
          </button>
          <button name="/" onClick={clicker}>
            &divide;
          </button>
          <button onClick={backSpace}>C</button>
          <button name="*" onClick={clicker}>
            &times;
          </button>
          <button name="7" onClick={clicker}>
            7
          </button>
          <button name="8" onClick={clicker}>
            8
          </button>
          <button name="9" onClick={clicker}>
            9
          </button>
          <button name="-" onClick={clicker}>
            &ndash;
          </button>
          <button name="4" onClick={clicker}>
            4
          </button>
          <button name="5" onClick={clicker}>
            5
          </button>
          <button name="6" onClick={clicker}>
            6
          </button>
          <button name="+" onClick={clicker}>
            +
          </button>
          <button name="1" onClick={clicker}>
            1
          </button>
          <button name="2" onClick={clicker}>
            2
          </button>
          <button name="3" onClick={clicker}>
            3
          </button>
          <button name="0" onClick={clicker}>
            0
          </button>
          <button name="." onClick={clicker}>
            .
          </button>
          <button id="result" onClick={calculate}>
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
