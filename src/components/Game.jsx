import React from 'react';
import { useState } from 'react';
import Board from './Board';
import { calculateWinner } from '../helpers/helpers';
import './game.css';

const Game = () => {

    const [board, setBoard] = useState(Array(9).fill(''));
    const [xIsnext, setXIsnext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = (index) => {
        const boardCopy = [...board];
        // Определить был ли клик по ячейке или игра закончена
        if(winner || boardCopy[index]) return;

        // Определить чей ход?
        boardCopy[index] = xIsnext ? 'X' : 'O';

        // Обновить наш стейт
        setBoard(boardCopy);
        setXIsnext(!xIsnext);

    }

    return (
        <div className='wrapper'>
            <Board squares={board} click={handleClick} />
        </div>
    );
}

export default Game;
