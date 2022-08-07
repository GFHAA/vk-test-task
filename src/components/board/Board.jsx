import React from "react";
import Button from "../button/Button";
import Card from "../Card/Card";
import "./Board.css";
const Board = ({ items, typeOfBoard }) => {
  return (
    <div className="board">
      <span className="title-board">{items && items.title}</span>
      <div>
        {items &&
          items.todoItems.map((el) => {
            return <Card key={el.id}>{el.title}</Card>;
          })}
        <Button typeOfBoard={typeOfBoard} board={items}/>
      </div>
    </div>
  );
};

export default Board;
