import { useState } from 'react';
import './../styles/card.css' 

function Card(props) {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
    }
    
    if (clicked) {
        return (
            <div className="card" onClick={handleClick}>
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
            <div className="card" onClick={handleClick}>
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