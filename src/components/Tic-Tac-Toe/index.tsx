import { useMemo, useState } from "react";
import "./index.scss";

// Square 组件用于渲染每一个方格
function Square({ value, onSquareClick }: { value: string; onSquareClick: () => void }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

interface BoardTypes {
  squares: string[];
  onPlay: (squares: string[]) => void;
  xIsNext: boolean;
}

// Board 组件用于渲染整个棋盘
function Board({ squares, onPlay, xIsNext }: BoardTypes) {
  const handleClick: any = (index: number) => {
    if (calculateWinner(squares) || squares[index]) {
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[index] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  };

  let status;
  const winner = calculateWinner(squares);
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        {squares.map((value, i) => (
          // 使用 Square 组件代替原生 button，并将点击事件传递下去
          <Square key={i} value={value} onSquareClick={() => handleClick(i)} />
        ))}
      </div>
    </>
  );
}

function TicTacToe() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;

  const handlePlay = (nextSquares: string[]) => {
    const nextHistories = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistories);
    setCurrentMove(nextHistories.length - 1);
  };

  const jumpMove = (index: number) => {
    setCurrentMove(index);
  };

  const moves = history.map((_, index) => (
    <div className="move" key={"move" + index}>
      {`${index + 1}. `}
      <button onClick={() => jumpMove(index)}>{index === 0 ? "Go to game start" : `Go to move #${index}`}</button>
    </div>
  ));

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={currentSquares} onPlay={handlePlay} xIsNext={xIsNext}></Board>
      </div>
      <div className="game-moves">{moves}</div>
    </div>
  );
}

function calculateWinner(squares: string[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

export default TicTacToe;
