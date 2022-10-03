
import {FC, useEffect, useState} from 'react'
import Logo from './components/Logo/Logo';
import Instructions from './components/Instructions/Instructions';
import Game from './components/Game/Game';
import Footer from './components/Footer/Footer';
import {GameContext} from './contexts/GameContext';
import {Pokemon, AppContextInterface, Guess} from './interfaces'
import buildPokemon from './utils/buildPokemon';
import './App.sass';

const App: FC = () => {    
  const [answer, setAnswer] = useState<Pokemon>({} as Pokemon);
  const [guessed, setGuessed] = useState<boolean>(false);
  const [guesses, setGuesses] = useState<Guess[]>([]);
  
  const appContext:AppContextInterface = {
    answer, setAnswer,
    guessed, setGuessed,
    guesses, setGuesses
  }

  useEffect(() => {
    const getAnswer = async ():Promise<void> => {
      const todaysPkmn = Math.floor(Math.random()*(904) + 1)
      const pokemon = await buildPokemon(todaysPkmn);
      setAnswer(pokemon);
    }
    getAnswer();
  }, [])

  return (
      <div className="App">
        <Logo />
        <Instructions />
        <GameContext.Provider value={appContext}>
          <Game />
        </GameContext.Provider>
        <Footer />
      </div>
  );
}

export default App;