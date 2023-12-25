import Card from "./Card";
import './../styles/container.css'
import { useEffect, useState } from "react";

function Game() {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [characters, setCharacters] = useState(null);
    const [loaded, setLoaded] = useState(false);

    const finishGame = () => {
        alert('Lost');
        restartGame();
        console.log("Here");
    }

    const updateClicked = (name) => {
        const index = characters.findIndex((o) => o.name === name);
        let currentCharacters = {...characters};
        currentCharacters[index].clicked = true;
        //setCharacters(currentCharacters);
    }

    const updateScore = () => {
        const scoreToUpdate = score + 1;
        setScore(scoreToUpdate);
        shuffleCards();
    }

    const restartGame = () => {
        // Idea: maybe set all characters as an array?
        let currentCharacters = characters;
        currentCharacters.forEach((character) => character.clicked = false)
        
        if (score > bestScore) {
            setBestScore(score);
        }
        setScore(0);
        setCharacters(currentCharacters);
    }

    function shuffleCards() {
        let tempCharacters = [...characters];
        var i = tempCharacters.length, j, temp;

        while(--i > 0) {
            j = Math.floor(Math.random() * (i+1));
            temp = tempCharacters[j];
            tempCharacters[j] = tempCharacters[i];
            tempCharacters[i] = temp;
        }

        setCharacters(tempCharacters);
    }


    useEffect(() => {
        const fetchCharacters = async() => await fetch("https://0e1d8480-e3ea-4286-9d8f-36e9f0f4d750.mock.pstmn.io/the-office-characteres")
        .then(response => response.json())
            // 4. Setting *dogImage* to the image url that we received from the response above
        .then((data) => {
            let newCharacters = [];
            
            data.forEach((character) => {
                character.clicked = false;
                newCharacters.push(character);
            });

            setCharacters(newCharacters);
        });

        fetchCharacters();
        setLoaded(true);

    },[])


    return (

        <div>
        {
            loaded ?
            <div>
                <div className="game-header">
                    <p>Score: {score}</p>
                    <p>Best score: {bestScore}</p>
                </div>

                <div className="game-container">
                    {characters && (
                            characters.map((character) => {
                                return <Card key={character.name} 
                                clicked={character.clicked}
                                updateScore={updateScore}
                                updateClicked={updateClicked}
                                image={character.image}
                                finishGame={finishGame}
                                name={character.name}/>
                            })
                        )
                    }
                </div>
            </div>
            :
            <div>
                <h2>Loading...</h2>
            </div>
        }

        </div>
    );
}

export default Game;