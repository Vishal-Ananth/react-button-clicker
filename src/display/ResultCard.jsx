import { useEffect, useState, useRef } from "react";
import LogContainer from "./LogContainer";
import useDebounce from "../util/useDebounce";

export default function ResultCard({ cardVal }) {
  return (
    <div className="result-card">
      <LogContainer countList={cardVal.countList}></LogContainer>
      <div className="result">{cardVal.result}</div>
    </div>
  );
}
