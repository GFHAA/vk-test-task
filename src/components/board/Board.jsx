import React from 'react';
import Button from '../button/Button';
import Card from '../Card/Card';
import "./Board.css"
const Board = ({items}) => {
    return (
        <div className='board'>
            {items.map(el=>{
                return <Card key={el.id}>{el.title}</Card>
            })}
            <Button />
        </div>
    );
};

export default Board;