import Square from "./Square";

const Board = ({ squares, xIsNext, onPlay, lines, winner }) => {
  const handleClick = (index) => {
    if (winner || squares[index]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[index] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  };
  return (
    <div className="flex flex-wrap w-144">
      {squares.map((value, index) => (
        <Square
          value={value}
          key={index}
          onSquareClick={() => handleClick(index)}
          actvie={lines.includes(index)}
        />
      ))}
    </div>
  );
};
export default Board;
