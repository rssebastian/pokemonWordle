import { FC, useContext, useState } from 'react'
import { GameContext } from '../../../contexts/GameContext';
import { Pokemon, Guess } from '../../../interfaces'
import {checkGuess, buildPokemon} from '../../../utils';
import pokeball from '../../../assets/images/pokeball.png'
import './GuessInput.sass'

const GuessInput:FC = () => {
  const context = useContext(GameContext);
  const [guess, setGuess] = useState<string>('');
  
  const submitHandler = async (e:React.FormEvent) => {
    e.preventDefault();
    if (guess) {
      const userGuess:Pokemon = await buildPokemon(guess);
      const guessChecked:Guess = await checkGuess(userGuess, context?.answer as Pokemon);
      context?.setGuesses([...context?.guesses, guessChecked]);
      setGuess('');
      context?.setGuessed(true);
    }  
  }

  const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setGuess(e.target.value);
  }
  
  return (
    <form className='guess-input' onSubmit={(e) => submitHandler(e)}>
        <input className='guess-input__input' type="text" placeholder='Type Pokemon Name...' onChange={(e) => onChangeHandler(e)} value={guess}/>
        <button className='guess-input__submit' type="submit">
          <img src={pokeball} alt="pokeball" />
        </button>
    </form>
  )
}

export default GuessInput