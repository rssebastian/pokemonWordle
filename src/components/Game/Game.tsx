import {FC, useContext} from 'react';

import GuessInput from './GuessInput/GuessInput';
import GuessesContainer from './GuessesContainer/GuessesContainer';
import {GameContext} from '../../contexts/GameContext';

const Game:FC = () => {
    const context = useContext(GameContext);
    return (
        <>
            <GuessInput />
            {context?.guessed ? <GuessesContainer/> : null}
        </>
  )
}

export default Game