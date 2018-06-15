import React, { Component } from "react";
import Row from "../Row/index";

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rows: this.createBoard(props)
      // rows: 1000
    };
  }

  createBoard = props => {
    let board = []; //defines the board array

    for (let i = 0; i < props.rows; i++) {
      board.push([]);

      for (let j = 0; j < props.columns; j++) {
        board[i].push({
          xcolumn: j,
          yrow: i,
          minecount: 0,
          isOpen: false,
          hasMine: false,
          hasFlag: false
        });
      }
    }

    //popultae the board with mines
    for (let i = 0; i < props.mines; i++) {
      let randomrow = Math.floor(Math.random() * props.rows);
      let randomcolumn = Math.floor(Math.random() * props.columns);

      let cell = board[randomrow][randomcolumn];

      //check if the cell already has a mine.
      //if yes, then go back one in the loop and pick another random cell
      //if no, assign a mine to the cell
      if (cell.hasMine) {
        i--;
      } else {
        cell.hasMine = true;
      }

      // console.log(cell);
    }

    // console.log(board);
    return board;
  };

  render() {
    let rows = this.state.rows.map((row,index)=>{
      return(
        <Row 
          cells={row}
          key={index}
        />
      )
    })


    return (
      <div className="board">
       {rows}
      </div>
    );
  }
}

export default Board;
