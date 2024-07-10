import { useEffect } from "react";
import ResultCard from "../ResultCard";
import UpdatedComponent from "./FunctionButton";
import { createPortal } from "react-dom";

const domElement = document.getElementById("display-region");

function FibonacciButton({ handleClick, count }) {
  return (
    <>
      <button onClick={handleClick}>Fibonacci</button>

      {createPortal(
        count !== 0 ? (
          <div className="result-container">
            <ResultCard
              actionName={"Fibonacci"}
              action={fibonacci}
              count={count}
            ></ResultCard>
          </div>
        ) : null,
        domElement
      )}
    </>
  );
}
function fibonacci(count) {
  return count == 0 || count == 1
    ? 1
    : fibonacci(count - 1) + fibonacci(count - 2);
}
export default UpdatedComponent(FibonacciButton);
