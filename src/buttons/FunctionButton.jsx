import ClickButton from "./ClickButton";


function FunctionButton({ children, handleClick, action }) {

  return (
    <>
      <button onClick={handleClick}>{children}</button>
    </>
  );
}

export default ClickButton(FunctionButton);
