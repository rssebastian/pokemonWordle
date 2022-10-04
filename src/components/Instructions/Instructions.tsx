import {FC, useContext} from 'react'
import Hints from './Hints/Hints'
import { GameContext } from '../../contexts/GameContext'

import './Instructions.sass'

const Instructions:FC = () => {
  const context = useContext(GameContext);
  
  return (
    <div className='instructions'>
        <p>Who's that Pokemon?</p>
        {context?.showHints ? <Hints/> : null}
    </div>
  )
}

export default Instructions