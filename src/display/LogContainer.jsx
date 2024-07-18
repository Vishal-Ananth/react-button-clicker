import { useEffect } from "react";
import Logs from "./Logs";

export default function LogContainer({ countList }) {
  return (
    <div className="log-container">
      {countList !== undefined
        ? countList.map((value, index) => <Logs key={index} value={value} />)
        : null}
    </div>
  );
}
