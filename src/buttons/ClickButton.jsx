import { useId, useRef, useState, useEffect } from "react";
import useDebounce from "../util/useDebounce";

export default function ClickButton(ActionButton) {
  function WrappedButton({ children, action }) {
    const buttonId = useId();
    const [count, setCount] = useState(0);
    const resultVal = useDebounce(count, 3000);
    const resultObject = useRef({
      buttonId: buttonId,
      countList: [],
      result: null,
    });

    useEffect(() => {
      resultObject.current.result = resultVal;
    }, [resultVal]);

    useEffect(() => {
      if (count !== 0) {
        resultObject.current.countList = [
          ...resultObject.current.countList,
          count,
        ];
        console.log(resultObject);
      }
    }, [count]);

    function handleClick() {
      setCount(count + 1);
    }

    return <ActionButton handleClick={handleClick}>{children}</ActionButton>;
  }
  return WrappedButton;
}
