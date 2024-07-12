import "./App.css";
import { useState, useEffect } from "react";

import DisplayCards from "./display/DisplayCards";
import useDebounce from "./util/useDebounce";

import FunctionButton from "./buttons/FunctionButton";

export default function App() {
  const [count, setCount] = useState(0);
  const delayedCount = useDebounce(count, 3000);

  const [action, setAction] = useState(() => () => {});
  const [prevAction, setPrevAction] = useState(() => () => {});

  const [currentButton, setCurrentButton] = useState(null);
  const [prevButton, setPrevButton] = useState(null);
  const [immediateResult, setImmediateResult] = useState(0);

  return (
    <>
      <div className="button-container">
        <FunctionButton
          setAction={setAction}
          count={count}
          setCount={setCount}
          action={factorial}
          setCurrentButton={setCurrentButton}
        >
          Factorial
        </FunctionButton>

        <FunctionButton
          setAction={setAction}
          count={count}
          setCount={setCount}
          action={fibonacci}
          setCurrentButton={setCurrentButton}
        >
          Fibonacci
        </FunctionButton>

        <FunctionButton
          setAction={setAction}
          count={count}
          setCount={setCount}
          action={summation}
          setCurrentButton={setCurrentButton}
        >
          Summation
        </FunctionButton>

        <FunctionButton
          setAction={setAction}
          count={count}
          setCount={setCount}
          action={exponent}
          setCurrentButton={setCurrentButton}
        >
          Exponent
        </FunctionButton>

        <FunctionButton
          setAction={setAction}
          count={count}
          setCount={setCount}
          action={randomGen}
          setCurrentButton={setCurrentButton}
        >
          Random
        </FunctionButton>
      </div>

      <div className="display-region">
        <DisplayCards
          value={delayedCount}
          count={count}
          action={action}
          setCount={setCount}
          setCurrentButton={setCurrentButton}
          currentButton={currentButton}
          setPrevButton={setPrevButton}
          prevButton={prevButton}
        ></DisplayCards>
      </div>
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
