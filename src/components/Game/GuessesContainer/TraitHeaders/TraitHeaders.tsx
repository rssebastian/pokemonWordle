import {FC} from 'react'
import './TraitHeaders.sass'

const TraitHeaders:FC = () => {
    const headers = ['Name', 'Image', 'Type(s)', 'Main Color', 'Egg Group(s)', 'Shape', 'Gen']
  
    return (
        <div className='guess-headers'>
            {headers.map((header, index) => (
                <div className='guess-header' key={`trait-${index}`}>{header}</div>
            ))}
        </div>
    )
}

export default TraitHeaders