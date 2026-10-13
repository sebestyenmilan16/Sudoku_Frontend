import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Game from './components/Game'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://www.youtube.com/watch?v=oG1LrPN9moQ&list=RDoG1LrPN9moQ&start_radio=1" target="_blank">
          <img src="sziv.png" className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Sudoku</h1>

      <Game />

      <div className="card">
        {/*
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        */}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
