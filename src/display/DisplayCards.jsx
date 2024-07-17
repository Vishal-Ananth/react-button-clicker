import { useEffect, useId, useContext } from "react";
import ResultCard from "./ResultCard";

import { DataContext } from "../App";

export default function DisplayCards() {
  const [storeResult, currentObject] = useContext(DataContext);

  // useEffect(() => {
  //   console.log(storeResult);
  //   console.log(currentObject);
  // }, [currentObject]);

  // console.log("I rendered", currentObject);

  return (
    <>
      <div>
        {currentObject.countList.length !== 0 ? (
          <ResultCard cardVal={currentObject} />
        ) : null}
      </div>

      <div>
        {storeResult.length !== 0
          ? storeResult.map((obj, index) => (
              <ResultCard key={index} cardVal={obj} />
            ))
          : null}
      </div>
    </>
  );
}
