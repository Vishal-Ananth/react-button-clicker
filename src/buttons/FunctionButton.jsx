import ClickButton from "./ClickButton";

function FunctionButton({
  count,
  setCount,
  handleClick,
  setAction,
  action,
  setCurrentButton,
  children,
}) {
  return (
    <>
      <button onClick={handleClick}>{children}</button>
    </>
  );
}

export default ClickButton(FunctionButton);
