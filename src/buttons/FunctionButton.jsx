import { useId, useRef, useState, useEffect, useContext, memo } from "react";
import useDebounce from "../util/useDebounce";

import { DataContext } from "../App";

export default memo(function FunctionButton({ children, action }) {
  const setStoreResult = useContext(DataContext);
  const buttonId = useId();
  const [count, setCount] = useState(0);
  const resultVal = useDebounce(count, 1000, action);

  const [resultObject, setResultObject] = useState({
    buttonId: buttonId,
    countList: [],
    result: null,
  });

  useEffect(() => {
    console.log(resultObject);
  }, [resultObject]);

  useEffect(() => {
    if (resultObject.result !== null) {
      setStoreResult((prevState) => [resultObject, ...prevState]);
      setResultObject({
        buttonId: buttonId,
        countList: [],
        result: null,
      });
    }
  }, [resultObject.result]);

  useEffect(() => {
    if (count !== 0) {
      setResultObject((prevState) => {
        return {
          buttonId: prevState.buttonId,
          countList: prevState.countList,
          result: resultVal,
        };
      });

      setCount(0);
    }
  }, [resultVal]);

  useEffect(() => {
    if (count !== 0) {
      // setStoreResult((prevState) =>
      //   prevState.map((object, index) => {
      //     if (prevState.length === 0) {
      //       return {
      //         buttonId: object.buttonId,
      //         countList: resultObject.countList,
      //         result: null,
      //       };
      //     } else if (index === prevState.length - 1) {
      //       return {
      //         buttonId: object.buttonId,
      //         countList: resultObject.countList,
      //         result: null,
      //       };
      //     } else {
      //       return object;
      //     }
      //   })
      // );
      // setStoreResult((prevState) => prevState.map((obj, index) => {}));
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

  return <button onClick={handleClick}>{children}</button>;
});
