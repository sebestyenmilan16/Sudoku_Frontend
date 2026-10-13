import { useEffect, useState } from "react";
import Board from "./Board";

export default function Game() {

    const [gameData, setGameData] = useState({})

    const handlewin = () => {
        console.log('handleWin start');
    }

    useEffect(()=> {
        // useEffevt callback az Nem lehet async !!!
        // TODO - nase url?
        fetch(`http://localhost:8080/sudoku`)
        .then( async (json)=> {
            console.log('json', json)
            const data = await json.json()
            console.log('data', data)
            setGameData(data)
        })
        .catch()
        .finally()
    }, [])

    return <div>
        {/* <p>TODO - comment out this! - gameData json: {JSON.stringify(gameData)}</p> */}
        <Board onWin={handlewin} >{gameData}</Board>
    </div>
}