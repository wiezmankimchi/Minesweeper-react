import React from "react";
import Cell from "../Cell/index";

const Row = props => {
  let cells = props.cells.map((data, index) => {
    return <Cell key={index} data={data} />;
  });

  return <div className="row">{cells}</div>;
};

export default Row;
