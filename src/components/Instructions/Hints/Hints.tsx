import {FC, useContext} from 'react'
import { MdClear } from 'react-icons/md';
import {GameContext} from '../../../contexts/GameContext';

import './Hints.sass'

const Hints:FC = () => {
    const links = new Map<string, string>([
        ['Gen I', 'https://www.serebii.net/pokemon/gen1pokemon.shtml'],
        ['Gen II', 'https://www.serebii.net/pokemon/gen2pokemon.shtml'],
        ['Gen III', 'https://www.serebii.net/pokemon/gen3pokemon.shtml'],
        ['Gen IV', 'https://www.serebii.net/pokemon/gen4pokemon.shtml'],
        ['Gen V', 'https://www.serebii.net/pokemon/gen5pokemon.shtml'],
        ['Gen VI', 'https://www.serebii.net/pokemon/gen6pokemon.shtml'],
        ['Gen VII', 'https://www.serebii.net/pokemon/gen7pokemon.shtml'],
        ['Gen VIII', 'https://www.serebii.net/pokemon/gen8pokemon.shtml'],
    ]);

    const context = useContext(GameContext);
    return (
    <div className="hints">
        <MdClear onClick={()=>context?.setShowHints(false)}/>
        <p className='hints__text'>{`Need help? (Regional variants not included)`}</p>
        <div className="hints__links">
            {Array.from(links.keys()).map((key, index) => (
                <a className="hints__links-link" key={index} href={links.get(key) as string} target="_blank" rel="noreferrer">{key}</a>
            ))}
        </div>
    </div>
  )
}

export default Hints