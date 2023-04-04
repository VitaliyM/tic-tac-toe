import React from 'react';
import { useState } from 'react';
import Board from './Board';
import { calculateWinner } from '../helpers/helpers';
import './game.css';

const Game = () => {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsnext, setXIsnext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = (index) => {
        const boardCopy = [...board];
        // Определить был ли клик по ячейке или игра закончена
        if (winner || boardCopy[index]) return;

        // Определить чей ход?
        boardCopy[index] = xIsnext ? 'X' : 'O';

        // Обновить наш стейт
        setBoard(boardCopy);
        setXIsnext(!xIsnext);

    }

    const startNewGame = () => {
        return (
            <button className='startGame' onClick={() => setBoard(Array(9).fill(null))} >Новая игра</button>
        )
    }

    return (
        <div className='wrapper'>
            {startNewGame()}
            <Board squares={board} click={handleClick} />
            <p className='gameInfo'>
                {winner ? `Победитель - ${winner}` : `Сейчас ходит - ${(xIsnext ? "X" : "O")}`}
            </p>
        </div>
    );
}

export default Game;
