import { useId, useRef, useState, useEffect, useContext, memo } from "react";
import useDebounce from "../util/useDebounce";

import { DataContext } from "../App";

export default memo(function FunctionButton({ children, action }) {
  const setStoreResult = useContext(DataContext);
  const buttonId = useId();
  const [count, setCount] = useState(0);
  let resultVal = useDebounce(count, 500);

  useEffect(() => {
    if (resultVal !== null && count !== 0) {
      setStoreResult((prevState) =>
        prevState.map((resObject, index) => {
          if (index === 0) {
            return {
              buttonId: buttonId,
              countList: resObject.countList,
              result: action(resultVal),
            };
          } else {
            return resObject;
          }
        })
      );

      setCount(0);
      setStoreResult((prevState) => [{}, ...prevState]);
    }
  }, [resultVal]);

  useEffect(() => {
    if (count !== 0) {
      setStoreResult((prevState) =>
        prevState.map((resObjects) => {
          if (Object.keys(resObjects).length === 0) {
            return {
              buttonId: buttonId,
              countList: [count],
              result: null,
            };
          } else if (resObjects.result !== null) {
            return resObjects;
          } else {
            return {
              buttonId: resObjects.buttonId,
              countList: [...resObjects.countList, count],
              result: null,
            };
          }
        })
      );
    }
  }, [count]);

  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick}>{children}</button>;
});
