
import {FC, useEffect, useState} from 'react'
import Logo from './components/Logo/Logo';
import Instructions from './components/Instructions/Instructions';
import Game from './components/Game/Game';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';
import Legend from './components/Legend/Legend';
import {GameContext} from './contexts/GameContext';
import {Pokemon, AppContextInterface, Guess} from './interfaces'
import buildPokemon from './utils/buildPokemon';
import './App.sass';

const App: FC = () => {    
  const [answer, setAnswer] = useState<Pokemon>({} as Pokemon);
  const [guessed, setGuessed] = useState<boolean>(false);
  const [guesses, setGuesses] = useState<Guess[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showLegend, setShowLegend] = useState<boolean>(true);
  const [showHints, setShowHints] = useState<boolean>(true);
  
  const appContext:AppContextInterface = {
    answer, setAnswer,
    guessed, setGuessed,
    guesses, setGuesses,
    showModal, setShowModal,
    showLegend, setShowLegend,
    showHints, setShowHints
  }

  useEffect(() => {
    const getAnswer = async ():Promise<void> => {
      const min = 1;
      const max = 905;
      const todaysPkmn = Math.floor(Math.random()*(max - min) + min);
      const pokemon = await buildPokemon(todaysPkmn);
      setAnswer(pokemon);
    }
    getAnswer();
  }, [])

  return (
      <div className="App">
        <Logo />
        <GameContext.Provider value={appContext}>
          <Instructions />
          {showModal ? <Modal/> : null}
          <Game />
          {showLegend && guessed ? <Legend/> : null}
        </GameContext.Provider>
        <Footer />
      </div>
  );
}

export default App;