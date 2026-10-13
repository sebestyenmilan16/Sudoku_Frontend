import './Tile.css'

export default function Tile({value = 2}) {
    return <div className='tile'>
        {value ?? <input type='number' min={1} max={9} />}
    </div>
}