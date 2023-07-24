import { useState } from "react";
import {
  curry,
  prop,
  reverse,
  tap,
  map,
  addIndex,
  cond,
  equals,
  T,
  always,
  concat,
  compose,
  toString,
} from "ramda";

const mapIndexed = addIndex(map);

const Step = curry((jumpTo, _, index) => {
  const description = cond([
    [equals(0), always("Go to game start")],
    // [
    //   equals(history.length - 1),
    //   compose(concat("You are at move #"), toString),
    // ],
    [T, compose(concat("Go to move #"), toString)],
  ])(index);
  return (
    <li key={index}>
      <button onClick={() => jumpTo(index)}>{description}</button>
    </li>
  );
});

const F = ({ history, jumpTo }) => {
  const ClickAbledStep = Step(jumpTo);
  return mapIndexed(ClickAbledStep)(history);
};

const Steps = (children) => {
  return <ol className="list-decimal">{children}</ol>;
};

const Container = (children) => {
  const [ascending, setAscending] = useState(true);
  return (
    <div className="text-4xl">
      <button onClick={() => setAscending(!ascending)}>↑↓</button>
      {children}
    </div>
  );
};
const GameInfo = compose(Container, Steps, F);

export default GameInfo;
