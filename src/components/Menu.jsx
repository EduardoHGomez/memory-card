import { useEffect, useState } from 'react'
import './../styles/menu.css'

function Menu(props) {
    

    return (
        <div className='menu-container'>
            <div className='menu-difficulties-container'>
                <button 
                    className='menu-difficulties-container-button'
                    onClick={() => props.selectDifficulty(4)}
                >Easy</button>
                <button 
                    className='menu-difficulties-container-button'
                    onClick={() => props.selectDifficulty(8)}
                >Medium</button>
                <button 
                    className='menu-difficulties-container-button'
                    onClick={() => props.selectDifficulty(12)}
                >Hard</button>
            </div>
        </div>
    );
}



export default Menu;