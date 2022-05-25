import { ReactElement, useEffect, useState } from "react";
import calculateWinner from "../utils/calculateWinner";
import Board from "./Board";

const Game = (): ReactElement => {
  const [history, setHistory] = useState([new Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const xo = xIsNext ? "X" : "O";
  const winner = calculateWinner(history[stepNumber]);

  const handleClick = (i: number) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];

    if (winner || squares[i]) return;
    squares[i] = xo;

    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step: number) => {
    const historyPoint = history.slice(0, step + 1);
    setHistory([...historyPoint]);
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  return (
    <>
      {winner && <h1>{`${winner} has won the game`}</h1>}
      <div className="game">
        <Board onClick={handleClick} squares={history[stepNumber]} />
        <ul>
          {history.map((_, move) => {
            if (history.length === move + 1) return;
            const destination = move ? `Go to step #${move}` : "Go to Start";

            return (
              <li key={move}>
                <button onClick={() => jumpTo(move)}>{destination}</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Game;
