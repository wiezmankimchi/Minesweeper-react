import React, { Component } from "react";
import Board from "./components/Board/index";
import BoardHead from "./components/BoardHead/index";

class Minesweeper extends Component {
  state = {
    rows: 10,
    columns: 10,
    flags: 10,
    mines: 10,
    time: 0
  };

  render() {
    return (
      <div>
        <div className="Minesweeper">
          <h1>Minesweeper Game</h1>
          <BoardHead time={this.state.time} flagsCount={this.state.flags} />
          <Board
            rows={this.state.rows}
            columns={this.state.columns}
            mines={this.state.mines}
          />
        </div>
      </div>
    );
  }
}

export default Minesweeper;
