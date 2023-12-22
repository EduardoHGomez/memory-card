import Card from "./Card";
import './../styles/container.css'

function Game(props) {
    const characters = props.charactersList;

    return (
        <div>
            <div className="game-container">
                {
                    characters.map((character) => {
                        return <Card key={character} name={character}/>
                    })
                }
            </div>
        </div>
    );
}

export default Game;