import { useState } from 'react';
import './../styles/card.css' 

function Card(props) {
    const updateScore = props.updateScore;
    const updateClicked = props.updateClicked;

    const handleClick = (name) => {
        updateScore();
        updateClicked(name);
    }

    const restartCard = () => {
        props.finishGame();
    }
    
    if (props.clicked) {
        return (
            <div className="card clicked" onClick={restartCard}>
                <div className="card-image">
                    <img src={props.image}></img>
                </div>
                <div className="card-footer">
                    {props.name}
                </div>
            </div>
        )
    }

    else {
        return (
            <div className="card " 
            onClick={() => handleClick(props.name)}
                >
                <div className="card-image">
                    <img src={props.image}></img>
                </div>
                <div className="card-footer">
                    {props.name}
                </div>
            </div>
        )
    }

}

export default Card;