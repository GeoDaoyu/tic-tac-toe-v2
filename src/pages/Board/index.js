import Square from "./Square";
import { map, addIndex, includes, __ } from "ramda";

const mapIndexed = addIndex(map);

const Board = ({ squares, handleClick, lines }) => {
  const actvie = includes(__, lines);

  return (
    <div className="flex flex-wrap w-144">
      {mapIndexed((value, index) => (
        <Square
          value={value}
          key={index}
          onSquareClick={() => handleClick(index)}
          actvie={actvie(index)}
        />
      ))(squares)}
    </div>
  );
};
export default Board;
