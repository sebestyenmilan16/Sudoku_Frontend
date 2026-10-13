import Tile from "./Tile";
import './Board.css'

export default function Board(props) {

    console.log('Board props obj: ', props)
    

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