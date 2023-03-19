import React, { useState } from "react";

import "./App.css";

import Board from "./components/board/board.component";
import Scoreboard from "./components/scoreboard/scoreboard.component";
import ResetButton from './components/resetgame/reset-button.component'

function App() {
  const win_conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [scores, setScroes] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setGameOver] = useState(false)
  const handleBoxClick = (boxIdx) => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying === true ? "X" : "O";
      }
      return value;
    });

    const winner = checkWinner(updatedBoard);
    if (winner) {
      if (winner === "O") {
        let { oScore } = scores;
        oScore += 1;
        setScroes({ ...scores, oScore });
      } else {
        let { xScore } = scores;
        xScore += 1;
        setScroes({ ...scores, xScore });
      }
    }

    console.log(scores);
    setBoard(updatedBoard);
    setXPlaying(!xPlaying);
  };

  const checkWinner = (board) => {
    for (let i = 0; i < win_conditions.length; i++) {
      const [x, y, z] = win_conditions[i];

      if (
        board[x] &&
        board[x] === board[y] &&
        board[y] === board[z] &&
        board[z]
      ) {
        setGameOver(true)
        return board[x];
      }
    }
  };

  const resetBoard = () => {
    setGameOver(false)
    setBoard(Array(9).fill(null))
  }

  return (
    <div className="App">
      <Scoreboard scores={scores} xPlaying={xPlaying}/>
      <Board board={board} onClick={gameOver ? resetBoard :  handleBoxClick} />
      <ResetButton resetBoard={resetBoard}/>
    </div>
  );
}

export default App;
