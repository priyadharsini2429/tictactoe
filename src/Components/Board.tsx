import { ReactElement } from "react";
import Square from "./Square";

interface BoardProp {
  squares: Array<number>;
  onClick: (i: number) => void;
}

const Board = ({ squares, onClick }: BoardProp): ReactElement => {
  return (
    <div className="board">
      {squares.map((square, idx) => (
        <Square key={idx} value={square} clickHandler={() => onClick(idx)} />
      ))}
    </div>
  );
};

export default Board;
