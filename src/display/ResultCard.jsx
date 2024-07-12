import { useEffect, useState, useRef } from "react";
import LogContainer from "./LogContainer";
import useDebounce from "../util/useDebounce";

export default function ResultCard({ result, logList, buttonId }) {
  const forcedRender = useDebounce(10000, 0);
  return (
    <>
      {logList.length === 0 ? null : (
        <div className="result-card">
          <LogContainer logList={logList}></LogContainer>

          <div className="result">{logList[logList.length - 1]}</div>
        </div>
      )}
    </>
  );
}
