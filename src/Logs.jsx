export default function Logs({ count }) {
  return (
    <>
      {count === 0 ? null : (
        <div className="logs">Entered Value is {count}</div>
      )}
    </>
  );
}
