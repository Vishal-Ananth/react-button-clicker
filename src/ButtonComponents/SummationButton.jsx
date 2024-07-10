import { createPortal } from "react-dom";
import ResultCard from "../ResultCard";
import UpdatedComponent from "./FunctionButton";
import { useEffect, useRef, useState } from "react";

const domElement = document.getElementById("display-region");

function SummationButton({ handleClick, count }) {
  return (
    <>
      <button onClick={handleClick}>Summation</button>

      {createPortal(
        count !== 0 ? (
          <div className="result-container">
            <ResultCard action={summation} count={count}></ResultCard>
          </div>
        ) : null,
        domElement
      )}
    </>
  );
}

function summation(count) {
  const result = (count * (count + 1)) / 2;
  return result;
}

export default UpdatedComponent(SummationButton);
