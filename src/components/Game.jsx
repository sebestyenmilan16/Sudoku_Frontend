import { useEffect, useState } from "react";
import Board from "./Board";
import { ToastContainer, toast } from "react-toastify";

export default function Game() {

    const [gameData, setGameData] = useState({})

    const handleWin = () => {
        console.log('handleWin start');
        toast.success('🦄 Ügyes vagy nyertél! : )', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            
        });
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
        <Board onWin={handleWin} >{gameData}</Board>
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={true}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            
        />
        <button onClick={handleWin}>TODO</button>
    </div>
}