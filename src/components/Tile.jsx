import './Tile.css'

export default function Tile({value = 2}) {
    return <div className='tile'>
        {value}
    </div>
}