import { useEffect, useId, useContext } from "react";
import ResultCard from "./ResultCard";

import { DataContext } from "../App";

export default function DisplayCards() {
  const storeResult = useContext(DataContext);

  return (
    <>
      <div>
        {storeResult.length !== 0
          ? storeResult.map((obj, index) =>
              obj === undefined || Object.keys(obj).length === 0 ? null : (
                <ResultCard key={index} cardVal={obj} />
              )
            )
          : null}
      </div>
    </>
  );
}
