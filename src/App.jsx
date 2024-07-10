import "./App.css";
import FactorialButton from "./ButtonComponents/FactorialButton";
import FibonacciButton from "./ButtonComponents/FibonacciButton";
import SummationButton from "./ButtonComponents/SummationButton";
import ExponentButton from "./ButtonComponents/ExponentButton";
import RandomButton from "./ButtonComponents/RandomButton";

import { useState } from "react";

export default function App() {
  return (
    <>
      <div className="button-container">
        <FactorialButton />
        <FibonacciButton />
        <SummationButton />
        <ExponentButton />
        <RandomButton />
      </div>
    </>
  );
}
