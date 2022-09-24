import {useContext} from 'react'
import Headers from '../Headers/Headers';
import Guess from '../Guess/Guess';
import {GuessTrait} from '../../interfaces';
import {AnswerContext} from '../../contexts/AnswerContext';
import './GuessesContainer.sass'


const GuessesContainer = () => {
    const {guesses} = useContext(AnswerContext);
    return (
    <div className='guesses'>
        <Headers />
        {guesses.map((guess:GuessTrait[], index:number) => (
          <Guess key={index} traits={guess}/>
        ))}
    </div>
  )
}

export default GuessesContainer