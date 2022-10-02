import React, { useContext, useState } from 'react'
import { AnswerContext } from '../../contexts/AnswerContext'
import { Trait } from '../../interfaces'
import checkGuess from '../../utils/checkGuess';
import pokeball from '../../assets/images/pokeball.png'
import './GuessInput.sass'

const GuessInput = () => {
  const {setGuessed, answer, guesses, setGuesses} = useContext(AnswerContext);
  const [guess, setGuess] = useState('');
  
  const submitHandler = async (e:React.FormEvent) => {
    e.preventDefault();
    const dummyGuess:Trait[] = [
        {name: 'ivysaur'},
        {img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'},
        {type: ['grass', 'poison']},
        {mainColor: 'green'},
        {eggGroup: ['monster', 'plant']},
        {shape: 'quadruped'},
        {region: 'kanto'}
    ]
    const guess = await checkGuess(dummyGuess, answer);
    console.log(guess)
    setGuesses([...guesses, guess]);
    setGuess('');
    setGuessed(true);
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