import { __, addIndex, compose, includes, map } from "ramda";
import Square from "./Square";

const mapIndexed = addIndex(map);

const Container = (children) => {
  return <div className="flex flex-wrap w-144">{children}</div>;
};

const Board = ({ squares, handleClick, lines }) => {
  const actvie = includes(__, lines);

  return compose(
    Container,
    mapIndexed((value, index) => (
      <Square
        value={value}
        key={index}
        onSquareClick={() => handleClick(index)}
        actvie={actvie(index)}
      />
    ))
  )(squares);
};
export default Board;
