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


    if (choosingDifficulty) {
        return <Menu selectDifficulty={selectDifficulty}/>
    }
    else {
        return <Game amountOfCards={cards}/>
    }
}

export default App
