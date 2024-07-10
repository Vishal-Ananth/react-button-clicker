import { useEffect, useState, useRef } from "react";
import LogContainer from "./LogContainer";

export default function ResultCard({ count, action, actionName }) {
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (count != 0) {
      setResult(action(count));
    }
    console.log(count);
  }, [count]);

  return (
    <div className="result-card">
      <LogContainer count={count}></LogContainer>
      {result !== null || count !== 0 ? (
        <div className="result">
          {actionName} value is : {result}
        </div>
      ) : null}
    </div>
  );
}
