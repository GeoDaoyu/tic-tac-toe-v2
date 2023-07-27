import {
  T,
  always,
  compose,
  concat,
  cond,
  curry,
  equals,
  toString,
} from "ramda";

// o_O? 参数 有顺序的限制。如果直接传一个对象，将参数作为对象的属性，那么curry的意义是什么？
// 设计上要求，参数不宜过多，过多会阅读困难
const Step = curry((lastIndex, jumpTo, _, index) => {
  const description = cond([
    [equals(0), always("Go to game start")],
    [
      equals(lastIndex),
      compose(concat("You are at move #"), toString),
    ],
    [T, compose(concat("Go to move #"), toString)],
  ])(index);
  return (
    <li key={index}>
      <button onClick={() => jumpTo(index)}>{description}</button>
    </li>
  );
});

export default Step;
