import ClickButton from "./ClickButton";

function FunctionButton({}) {
  return (
    <>
      <button onClick={handleClick}>{children}</button>
    </>
  );
}

export default ClickButton(FunctionButton);
