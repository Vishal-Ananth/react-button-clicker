import Logs from "./Logs";

export default function LogContainer({ countList }) {
  return (
    <div className="log-container">
      {countList.map((value) => (
        <Logs value={value}></Logs>
      ))}
    </div>
  );
}
