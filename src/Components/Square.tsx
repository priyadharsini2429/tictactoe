import { ReactElement } from "react";

interface SquareProp {
  value: number;
  clickHandler: () => void;
}

const Square = ({ value, clickHandler }: SquareProp): ReactElement => {
  return (
    <button className="squares" onClick={clickHandler}>
      {value}
    </button>
  );
};

export default Square;
