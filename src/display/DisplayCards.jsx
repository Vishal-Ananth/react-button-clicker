import { useEffect, useReducer, useState, useRef, useId, lazy } from "react";

import useDebounce from "../util/useDebounce";

import Logs from "./Logs";
import ResultCard from "./ResultCard";

export default function DisplayCards({
  count,
  value,
  action,
  setCount,
  currentButton,
  prevButton,
  setPrevButton,
  setCurrentButton,
}) {
  const logSuperList = useRef([]);
  const [logList, setLogList] = useState([]);

  const [result, setResult] = useState(null);
  const forcedRender = useDebounce(count, 0);
  const logId = useId();

  useEffect(() => {
    if (value !== 0) {
      setResult(action(value));
      setCount(0);
      setPrevButton(null);
      setCurrentButton(null);
      console.log("conecutive same button result printed");
    }
  }, [value]);

  useEffect(() => {
    // console.log(count);

    if (count !== 0) {
      logList.push(count);
    } else {
      logList.push(result);
      logSuperList.current.unshift(logList);
      setResult(null);
      setLogList([]);
    }
  }, [count]);

  useEffect(() => {
    // console.log(logList);
    if (prevButton === null) {
      setPrevButton(currentButton);
    } else if (prevButton != currentButton) {
      console.log(logSuperList);
      // logList.pop();
      switch (prevButton) {
        case ":r0:":
          logList.push(factorial(count - 1));

          break;
        case ":r1:":
          logList.push(fibonacci(count - 1));

          break;
        case ":r2:":
          logList.push(summation(count - 1));

          break;
        case ":r3:":
          logList.push(exponent(count - 1));

          break;
        case ":r4:":
          logList.push(randomGen(count - 1));
          break;
      }

      // console.log(count);
      logSuperList.current.unshift(logList);
      setResult(null);
      setLogList([]);
      setCount(1);

      setPrevButton(currentButton);
    }
  }, [currentButton]);

  return (
    <>
      {count === 0 && logList.length === 0 ? null : (
        <div className="result-card">
          <div className="log-container">
            {logList.map((val, ind) =>
              val == null ? null : <Logs key={ind} value={val}></Logs>
            )}
          </div>
          <div className="result"></div>
        </div>
      )}

      {logSuperList.current.map((arr, ind) =>
        arr[0] === null ? null : (
          <ResultCard
            logList={arr}
            result={result}
            key={ind.toString() + logId}
            buttonId={prevButton}
          ></ResultCard>
        )
      )}
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
