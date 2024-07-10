import { createPortal } from "react-dom";
import ResultCard from "../ResultCard";
import UpdatedComponent from "./FunctionButton";

const domElement = document.getElementById("display-region");

function ExponentButton({ handleClick, count }) {
  return (
    <>
      <button onClick={handleClick}>Exponent</button>

      {createPortal(
        count !== 0 ? (
          <div className="result-container">
            <ResultCard
              actionName={"Exponent"}
              action={exponent}
              count={count}
            ></ResultCard>
          </div>
        ) : null,
        domElement
      )}
    </>
  );
}
function exponent(count) {
  const result = 2 ** count;
  return result;
}

export default UpdatedComponent(ExponentButton);
