export default function Logs({ value }) {
  return (
    <>
      {value === null ? null : (
        <div className="logs">Entered Value is {value}</div>
      )}
    </>
  );
}
