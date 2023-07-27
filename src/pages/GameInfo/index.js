import { useState } from "react";
import Steps from "./Steps";

const GameInfo = (props) => {
  const [ascending, setAscending] = useState(true);
  return (
    <div className="text-4xl">
      <button onClick={() => setAscending(!ascending)}>↑↓</button>
      <Steps {...props} ascending={ascending} />
    </div>
  );
};

export default GameInfo;
