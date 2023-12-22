import Card from "./Card";
import './../styles/container.css'

function Game(props) {
    const characters = props.charactersList;

    const finishGame = () => {
        alert('Lost');
    }

    return (
        <div>
            <div className="game-container">
                {
                    characters.map((character) => {
                        return <Card key={character} 
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