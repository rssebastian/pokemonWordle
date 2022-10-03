import {useContext} from 'react'
import TraitHeaders from './TraitHeaders/TraitHeaders';
import GuessBlock from './GuessBlock/GuessBlock';
import {Guess} from '../../../interfaces';
import {GameContext} from '../../../contexts/GameContext';
import './GuessesContainer.sass'

const GuessesContainer = () => {
    const context = useContext(GameContext);
    return (
    <div className='guesses'>
        <TraitHeaders />
        {context?.guesses.map((guess:Guess, index:number) => (
          <GuessBlock key={`guess-${index}`} traits={guess}/>
        ))}
    </div>
  )
}

export default GuessesContainer