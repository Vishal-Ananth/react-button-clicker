import "./App.css";

import { useState, useEffect, createContext, useId, useRef } from "react";
import FunctionButton from "./buttons/FunctionButton";
import DisplayCards from "./display/DisplayCards";
import FunctioButton from "./buttons/FunctionButton";

export const DataContext = createContext();

export default function App() {
  const [storeResult, setStoreResult] = useState([]);

  // useEffect(() => {
  //   console.log(storeResult);
  // }, [storeResult]);

  return (
    <>
      <div className="button-container">
        <DataContext.Provider value={setStoreResult}>
          <FunctionButton action={factorial}>Factorial</FunctionButton>
          <FunctionButton action={fibonacci}>Fibonacci</FunctionButton>
          <FunctionButton action={summation}>Summation</FunctionButton>
          <FunctionButton action={exponent}>Exponent</FunctionButton>
          <FunctionButton action={randomGen}>Random</FunctionButton>
        </DataContext.Provider>
      </div>
      {
        <div className="display-region">
          <DataContext.Provider value={storeResult}>
            <DisplayCards></DisplayCards>
          </DataContext.Provider>
        </div>
      }
    </>
  );
}

function summation(count) {
  return (count * (count + 1)) / 2;
}

function factorial(count) {
  return count == 1 || count === 0 ? 1 : count * factorial(count - 1);
}

function fibonacci(count) {
  return count == 0 || count == 1
    ? 1
    : fibonacci(count - 1) + fibonacci(count - 2);
}

function exponent(count) {
  return 2 ** count;
}

function randomGen(count) {
  return Math.floor(Math.random() * count);
}
