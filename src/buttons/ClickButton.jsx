import { useId } from "react";

export default function ClickButton(ActionButton) {
  function WrappedButton({}) {
    const buttonId = useId();
    function handleClick() {}

    return <ActionButton handleClick={handleClick}>{children}</ActionButton>;
  }
  return WrappedButton;
}
