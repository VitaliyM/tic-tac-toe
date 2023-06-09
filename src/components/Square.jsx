import React from 'react';
import './square.css';

const Square = (props) => {
    return (
        <button className='square' onClick={props.click} >{props.value}</button>
    );
}

export default Square;
