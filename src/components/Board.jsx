import Tile from "./Tile";
import './Board.css'

export default function Board({children = {} }) {

    //console.log('Board props obj: ', props)
    //console.log('Board children', children)
    const {puzzle = [], solution = []} = children
    console.log('Puzzle: ', puzzle);
    console.log('Solution: ', solution);
    
    
    

    return <div className="board">

        {puzzle.map( (row, rowIdx)=><div className="row" key={rowIdx}>
            {row.map( (value, colIdx)=> <Tile key={colIdx} value={value} /> )}
        </div>)}
        
    </div>
}