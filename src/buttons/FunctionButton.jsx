import { useId, useRef, useState, useEffect, useContext, memo } from "react";
import useDebounce from "../util/useDebounce";

import { DataContext } from "../App";

export default memo(function FunctionButton({ children, action }) {
  const setStoreResult = useContext(DataContext);
  const buttonId = useId();
  const [count, setCount] = useState(0);
  const resultVal = useDebounce(count, 2000);
  const [resultObject, setResultObject] = useState({
    buttonId: buttonId,
    countList: [],
    result: null,
  });

  useEffect(() => {
    if (resultObject.result !== null) {
      setStoreResult((prevState) => [resultObject, ...prevState]);
      setResultObject({
        buttonId: buttonId,
        countList: [],
        result: null,
      });
      // Remove bellow commit to see result of the main data repo
      // console.log(storeResult.current, "--->", storeResult.current.length);
    }
  }, [resultObject.result]);

  useEffect(() => {
    if (count !== 0) {
      setResultObject((prevState) => {
        return {
          buttonId: prevState.buttonId,
          countList: prevState.countList,
          result: action(resultVal),
        };
      });

      setCount(0);
    }
  }, [resultVal]);

  useEffect(() => {
    if (count !== 0) {
      setResultObject((prevState) => {
        return {
          buttonId: prevState.buttonId,
          countList: [...prevState.countList, count],
          result: null,
        };
      });
    }
  }, [count]);

  function handleClick() {
    setCount(count + 1);
    // console.log("clicked");
  }

  return <button onClick={handleClick}>{children}</button>;
});
