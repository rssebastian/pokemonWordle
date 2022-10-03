import { FC, useContext, useState, useRef } from 'react'
import { GameContext } from '../../../contexts/GameContext';
import { Pokemon, Guess } from '../../../interfaces'
import {checkGuess, buildPokemon} from '../../../utils';
import pokeball from '../../../assets/images/pokeball.png'
import './GuessInput.sass'

const GuessInput:FC = () => {
  const context = useContext(GameContext);
  const [guess, setGuess] = useState<string>('');
  const [wiggle, setWiggle] = useState<boolean>(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  
  const submitHandler = async (e:React.FormEvent) => {
    e.preventDefault();
    
    if (guess) {
      setWiggle(true);
      const userGuess:Pokemon = await buildPokemon(guess.toLowerCase());
      const guessChecked:Guess = await checkGuess(userGuess, context?.answer as Pokemon);
      context?.setGuesses([...context?.guesses, guessChecked]);
      setGuess('');
      context?.setGuessed(true);
    }  
  }
  
  return (
    <form className='guess-input' onSubmit={(e) => submitHandler(e)}>
        <input className='guess-input__input' type="text" placeholder='Type Pokemon Name...' onChange={(e) => setGuess(e.target.value)} value={guess}/>
        <button 
          ref={btnRef} 
          className={`guess-input__submit ${wiggle ? 'wiggle' : ''}`}
          onAnimationEnd={() => setWiggle(false)}
          type="submit">
          <img src={pokeball} alt="pokeball" />
        </button>
    </form>
  )
}

export default GuessInput