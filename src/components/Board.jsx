import Tile from "./Tile";
import './Board.css'

export default function Board({children = {} }) {

    //console.log('Board props obj: ', props)
    //console.log('Board children', children)
    const {puzzle, solution} = children
    console.log('Puzzle: ', puzzle);
    console.log('Solution: ', solution);
    
    
    

    return <div className="board">

        <div className="row">
        <Tile />
        <Tile value={5} />
        <Tile value={null} />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        </div>
        <div className="row">
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        </div>
    </div>
}