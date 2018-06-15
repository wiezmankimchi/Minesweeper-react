import React, { Component } from "react";
import Board from "./components/Board/index";

class Minesweeper extends Component {
  state = {
    rows: 10,
    columns: 10,
    flags: 10,
    mines: 10
  };

  render() {
    return (
      <div>
        <h1>Minesweeper Game</h1>
        <div className="Minesweeper">
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
