import Logo from './components/Logo/Logo';
import Instructions from './components/Instructions/Instructions';
import GuessBox from './components/GuessBox/GuessBox';
import './App.sass';

function App() {
  return (
    <div className="App">
      <Logo />
      <Instructions />
      <GuessBox />
    </div>
  );
}

export default App;
