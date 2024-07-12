import Logs from "./Logs";

export default function LogContainer({ logList }) {
  return (
    <div className="log-container">
      {logList.map((value, index) =>
        index !== logList.length - 1 ? (
          <Logs key={index} value={value}></Logs>
        ) : null
      )}
    </div>
  );
}
