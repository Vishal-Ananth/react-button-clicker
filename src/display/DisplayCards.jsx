import { useEffect, useState, useContext } from "react";
import ResultCard from "./ResultCard";

import { DataContext } from "../App";

export default function DisplayCards() {
  const storeResult = useContext(DataContext);

  useEffect(() => {
    console.log(storeResult);
  });

  return (
    <div className="result-container">
      { storeResult.length!==0 ?storeResult.map((obj) => 
        <ResultCard cardVal={obj} />
      ):null}
    </div>
  );
}
