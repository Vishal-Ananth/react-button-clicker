import { useState, useRef, useId } from "react";

export default function UpdatedComponent(OldComponent) {
  function WrapperButton() {
    const [count, setCount] = useState(0);
    const timerRef = useRef(null);
    const buttonId = useId();

    function handleClick() {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => {
        setCount(0);
        console.log("reset ", buttonId);
      }, 5000);
      setCount(count + 1);
    }

    return <OldComponent handleClick={handleClick} count={count} />;
  }
  return WrapperButton;
}
