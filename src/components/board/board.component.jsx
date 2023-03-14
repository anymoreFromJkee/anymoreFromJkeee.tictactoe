import React from "react";

import "./board.css";

import Box from "../box/box.component";

export default function Board({ board, onClick }) {
  return (
    <div className="board">
      {board.map((value, idx) => {
        return <Box value={value} key={idx} onClick={() => value === null && onClick(idx)} />;
      })}
    </div>
  );
}
