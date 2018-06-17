import React from "react";

const BoardHead = props => {
  let minutes = Math.floor(props.time / 60) || 0;
  let seconds = props.time - minutes * 60 || 0;

  let formatedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  let timer = `${minutes}:${formatedSeconds}`;

  return (
    <div className="board-head">
      <div className="flag-count">{props.flagsCount}</div>
      <button className="reset">Reset</button>
      <div className="timer">{timer}</div>
    </div>
  );
};

export default BoardHead;
