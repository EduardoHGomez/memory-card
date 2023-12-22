import Card from "./Card";
import './../styles/container.css'
import { useEffect, useState } from "react";

function Game(props) {
    const characters = props.charactersList;


    const finishGame = () => {
        alert('Lost');
        props.restartGame();
    }


    return (
        <div>
            <div className="game-container">
                {
                    characters.map((character) => {
                        return <Card key={character} 
                        isLost={isLost}
                        updateScore={props.updateScore}
                        finishGame={finishGame}
                        name={character}/>
                    })
                }
            </div>
        </div>
    );
}

export default Game;