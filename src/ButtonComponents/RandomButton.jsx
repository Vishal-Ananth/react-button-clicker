import { createPortal } from "react-dom";
import ResultCard from "../ResultCard";
import UpdatedComponent from "./FunctionButton";

const domElement = document.getElementById("display-region");

function RandomButton({ handleClick, count }) {
  return (
    <>
      <button onClick={handleClick}>Random</button>

      {createPortal(
        count !== 0 ? (
          <div className="result-container">
            <ResultCard
              actionName={"Random"}
              action={randomGen}
              count={count}
            ></ResultCard>
          </div>
        ) : null,
        domElement
      )}
    </>
  );
}

function randomGen(count) {
  const result = Math.floor(Math.random() * count);
  return result;
}

export default UpdatedComponent(RandomButton);
