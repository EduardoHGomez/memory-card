import { useEffect, useState } from 'react'
import Game from './components/Game'
import Menu from './components/Menu';
import './styles/app.css' 

function App() {
    const [choosingDifficulty, setChoosingDifficulty] = useState(true);
    const [cards, setCards] = useState(true);

    const selectDifficulty = (mode) => {
        setCards(mode);
        setChoosingDifficulty(false);
    }

    return (
        <>
            <div className='header'>
                <img src='https://preview.redd.it/phooeof2mie41.png?width=7087&format=png&auto=webp&s=deeb847cf786d862f7cb3b038571c63e417d20ce'/>
                <h1>Memory card</h1>
            </div>
                {
                    choosingDifficulty ?
                        <Menu selectDifficulty={selectDifficulty}/>
                        :<Game amountOfCards={cards}/>
                }
        </>
    )
}

export default App
