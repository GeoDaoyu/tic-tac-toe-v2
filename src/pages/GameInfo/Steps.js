import Step from "./Step";
import { addIndex, addIndexRight, map, compose } from "ramda";

const Content = ({ history, jumpTo, ascending }) => {
  // o_O? 这个正序和逆序，还有什么别的写法吗？比如ascend函数
  const mapIndexed = ascending ? addIndex(map) : addIndexRight(map);
  // o_O? Step(history, jumpTo) 这里是为了提前把参数挂上，这里的传参还有更好的方式吗？
  // 比如都放到一个对象中？
  return mapIndexed(Step(history.length - 1, jumpTo))(history);
};

const Container = (children) => {
  return <ol className="list-decimal">{children}</ol>;
};

const Steps = compose(Container, Content);

export default Steps;
