import { useState } from "react";
import StatusBar from "./pages/StatusBar";
import Board from "./pages/Board";
import GameInfo from "./pages/GameInfo";
import { calculateWinner } from "./help";
import { isNotNil, all, always, cond, T } from "ramda";

export default function App() {
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

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };
  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove);
  };
  return (
    <div className="flex p-9">
      <div className="w-1/2">
        <StatusBar status={status} />
        <Board
          squares={currentSquares}
          xIsNext={xIsNext}
          onPlay={handlePlay}
          winner={winner}
          lines={lines}
        />
      </div>
      <div className="w-1/2">
        <GameInfo history={history} jumpTo={jumpTo} />
      </div>
    </div>
  );
}
