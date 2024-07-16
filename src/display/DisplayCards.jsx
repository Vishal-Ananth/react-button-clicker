import { createContext, useEffect, useState } from "react";

import { DataContext } from "../App";
import { useContext } from "react";
import useDebounce from "../util/useDebounce";

export default function DisplayCards() {
  const storeResult = useContext(DataContext);
  const [receivedData, setReceivedData] = useState(storeResult.current);
  const dataLength = storeResult.current.length;
  const [dummy, setDummy] = useState(0);

  useEffect(() => {
    if (storeResult.current.length !== dataLength) {
      // setReceivedData(storeResult);
      console.log(storeResult.current);
    }
  }, [dummy]);

  return <></>;
}
