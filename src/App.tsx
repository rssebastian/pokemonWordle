
import {FC, useEffect, useState} from 'react'
import Logo from './components/Logo/Logo';
import Instructions from './components/Instructions/Instructions';
import Game from './components/Game/Game';
import {AnswerContext} from './contexts/AnswerContext';
import {Pokemon} from './interfaces'
import buildPokemon from './utils/buildPokemon';
import './App.sass';

const App: FC = () => {    
  const [answer, setAnswer] = useState<Pokemon>({} as Pokemon);
  const [guessed, setGuessed] = useState<boolean>(false);
  const [guesses, setGuesses] = useState<Pokemon[]>([]);
  
  useEffect(() => {
    const getAnswer = async () => {
      const pokemon = await buildPokemon("mew");
      setAnswer(pokemon);
    }
    getAnswer();
  }, [])

  return (
      <div className="App">
        <Logo />
        <Instructions />
        <AnswerContext.Provider value={{answer, guessed, setGuessed, guesses, setGuesses}}>
          <Game />
        </AnswerContext.Provider>
      </div>
  );
}

export default App;