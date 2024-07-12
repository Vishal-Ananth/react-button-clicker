import { useId } from "react";

export default function ClickButton(ActionButton) {
  function WrappedButton({
    count,
    setCount,
    setAction,
    action,
    setCurrentButton,
    children,
  }) {
    const buttonId = useId();
    function handleClick() {
      setCount(count + 1);
      setAction(() => action);
      setCurrentButton(buttonId);
    }

    return <ActionButton handleClick={handleClick}>{children}</ActionButton>;
  }
  return WrappedButton;
}
