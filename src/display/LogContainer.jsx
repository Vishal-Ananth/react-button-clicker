import Logs from "./Logs";
import { useId } from "react";

export default function LogContainer({ countList }) {
  return (
    <div className="log-container">
      {countList.map((value, index) => (
        <Logs key={index} value={value} />
      ))}
    </div>
  );
}
