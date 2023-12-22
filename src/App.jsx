import { useEffect, useState } from 'react'
import Clock from './examples/Clock'
import Game from './components/Game'

function App() {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [characters, setCharacters] = useState([
        'Dwight',
        'Jim',
        'Michael',
        'Pam',
        'Oscar',
        'Angela',
        'Stanley',
        'Phyllis',
        'Andy',
        'Erin',
        'Kelly',
        'Ryan'
    ]);

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
            <Game 
            restartGame={restartGame}
            updateScore={updateScore}
            charactersList={characters}/>
        </div>
    );
}

export default App
