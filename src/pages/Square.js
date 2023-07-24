export default function Square({ value, onSquareClick, actvie }) {
  return (
    <div
      className={`flex justify-center items-center w-48 h-48 border border-black ml-[-1px] mb-[-1px] cursor-default ${
        actvie ? "bg-green-500" : "bg-white"
      }`}
      onClick={onSquareClick}
    >
      <span className="text-9xl font-bold">{value}</span>
    </div>
  );
}
