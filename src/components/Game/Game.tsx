import {useContext} from 'react';

import GuessInput from '../GuessInput/GuessInput';
import GuessesContainer from '../GuessesContainer/GuessesContainer';
import {AnswerContext} from '../../contexts/AnswerContext';

const Game = () => {
    const {guessed} = useContext(AnswerContext);
    return (
        <>
            <GuessInput />
            {guessed ? <GuessesContainer/> : null}
        </>
  )
}

export default Game