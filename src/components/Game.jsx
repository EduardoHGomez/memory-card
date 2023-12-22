import Card from "./Card";
import './../styles/container.css'
import { useEffect, useState } from "react";

function Game() {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [characters, setCharacters] = useState([
        {name: 'Dwight', clicked: false},
        {name: 'Jim', clicked: false},
        {name: 'Michael', clicked: false},
        {name: 'Pam', clicked: false},
        {name: 'Oscar', clicked: false},
        {name: 'Angela', clicked: false},
        {name: 'Stanley', clicked: false},
        {name: 'Phyllis', clicked: false},
        {name: 'Andy', clicked: false},
        {name: 'Erin', clicked: false},
        {name: 'Kelly', clicked: false},
        {name: 'Ryan', clicked: false}
    ]);

    const finishGame = () => {
        alert('Lost');
        restartGame();
    }

    const updateScore = () => {
        const scoreToUpdate = score + 1;
        setScore(scoreToUpdate);
    }

    const restartGame = () => {
        if (score > bestScore) {
            setBestScore(score);
        }
        setScore(0);
    }

    useEffect(() => {
        console.log("New");
    })


    return (
        <div>

            <div className="game-header">
                <p>Score: {score}</p>
                <p>Best score: {bestScore}</p>
            </div>


            <div className="game-container">
                {
                    characters.map((character) => {
                        return <Card key={character.name} 
                        updateScore={updateScore}
                        finishGame={finishGame}
                        name={character.name}/>
                    })
                }
            </div>
        </div>
    );
}

export default Game;