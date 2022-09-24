
import {useEffect, useState} from 'react'
import Logo from './components/Logo/Logo';
import Instructions from './components/Instructions/Instructions';
import Game from './components/Game/Game';
import {AnswerContext} from './contexts/AnswerContext';
import './App.sass';

function App() {
  const bulbasaur = {
    name: 'bulbasaur',
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    type: ['grass', 'poison'],
    mainColor: 'green',
    eggGroup: ['monster', 'plant'],
    shape: 'quadruped',
    region: 'kanto'
  }
    
  const [answer, setAnswer] = useState(bulbasaur);
  const [guessed, setGuessed] = useState(false);
  const [guesses, setGuesses] = useState([]);
  
  // useEffect(() => {
  //   const fetchAnswer = async () => {
  //     const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
  //     const data = await response.json();
  //     setAnswer(data);
  //   }
  //   fetchAnswer();
  // }, [])

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
