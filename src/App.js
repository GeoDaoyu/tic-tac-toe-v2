import { T, all, always, cond, isNotNil } from "ramda";
import { useState } from "react";
import { calculateWinner } from "./help";
import Board from "./pages/Board";
import GameInfo from "./pages/GameInfo";
import StatusBar from "./pages/StatusBar";

const App = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  const { winner, lines } = calculateWinner(currentSquares);
  const status = cond([
    [() => isNotNil(winner), always("Winner: " + winner)],
    [() => all(isNotNil)(currentSquares), always("No winner")],
    [T, always("Next player: " + (xIsNext ? "X" : "O"))],
  ])();

  const handlePlay = (index) => {
    if (winner || currentSquares[index]) {
      return;
    }
    const nextSquares = currentSquares.slice();
    nextSquares[index] = xIsNext ? "X" : "O";
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  return (
    <div className="flex p-9">
      <div className="w-1/2">
        <StatusBar status={status} />
        <Board
          squares={currentSquares}
          xIsNext={xIsNext}
          handleClick={handlePlay}
          winner={winner}
          lines={lines}
        />
      </div>
      <div className="w-1/2">
        <GameInfo history={history} jumpTo={setCurrentMove} />
      </div>
    </div>
  );
};
export default App;
