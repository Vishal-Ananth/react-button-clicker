import { createPortal } from "react-dom";
import ResultCard from "../ResultCard";
import UpdatedComponent from "./FunctionButton";

const domElement = document.getElementById("display-region");

function FactorialButton({ handleClick, count }) {
  return (
    <>
      <button onClick={handleClick}>Factorial</button>

      {createPortal(
        count !== 0 ? (
          <div className="result-container">
            <ResultCard
              actionName={"Factorial"}
              action={factorial}
              count={count}
            ></ResultCard>
          </div>
        ) : null,
        domElement
      )}
    </>
  );
}
function factorial(count) {
  return count == 1 || count === 0 ? 1 : count * factorial(count - 1);
}

export default UpdatedComponent(FactorialButton);
