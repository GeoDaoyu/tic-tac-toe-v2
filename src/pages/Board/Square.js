const Square = ({ value, onSquareClick, actvie }) => {
  return (
    <div
      className="flex justify-center items-center w-48 h-48 border border-black ml-[-1px] mb-[-1px] cursor-default"
      onClick={onSquareClick}
    >
      <span
        className={`text-9xl font-bold ${
          actvie ? "text-red-500" : "text-black"
        }`}
      >
        {value}
      </span>
    </div>
  );
};

export default Square;
