import { useState } from 'react';
import './../styles/card.css' 

function Card(props) {
    const updateScore = props.updateScore;

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
        updateScore();
    }

    const restartCard = () => {
        props.finishGame();
    }
    
    if (clicked) {
        return (
            <div className="card clicked" onClick={restartCard}>
                <div className="card-image">
                    Image
                </div>
                <div className="card-footer">
                    {props.name}
                </div>
            </div>
        )
    }

    else {
        return (
            <div className="card" 
            onClick={handleClick}
                >
                <div className="card-image">
                    Image
                </div>
                <div className="card-footer">
                    {props.name}
                </div>
            </div>
        )
    }

}

export default Card;