import { useEffect, useId, useRef, useState } from "react";
import Logs from "./Logs";

export default function LogContainer({ count }) {
  const [currentList, setCurrentList] = useState([]);
  const logRef = useRef([]);

  useEffect(() => {
    logRef.current.push(count);
    setCurrentList(logRef.current);
    if (count === 0) {
      logRef.current = [];
    }
  }, [count]);

  return (
    <div className="log-container">
      {currentList.map((value, index) => {
        return <Logs key={index} count={value}></Logs>;
      })}
    </div>
  );
}
