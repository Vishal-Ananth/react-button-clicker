import { useId, useRef, useState, useEffect, useContext } from "react";
import useDebounce from "../util/useDebounce";

import { DataContext } from "../App";

export default function ClickButton(ActionButton) {
  function WrappedButton({ children, action }) {
    const storeResult = useContext(DataContext);
    const buttonId = useId();
    const [count, setCount] = useState(0);
    const resultVal = useDebounce(count, 3000);
    const [resultObject, setResultObject] = useState({
      buttonId: buttonId,
      countList: [],
      result: null,
    });

    useEffect(() => {
      if (resultObject.result !== null) {
        storeResult.current = [...storeResult.current, resultObject];
        setResultObject({
          buttonId: buttonId,
          countList: [],
          result: null,
        });
        // Remove bellow commit to see result of the main data repo
        console.log(storeResult.current, "--->", storeResult.current.length);
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
    }

    return <ActionButton handleClick={handleClick}>{children}</ActionButton>;
  }
  return WrappedButton;
}
