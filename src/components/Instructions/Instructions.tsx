import {FC} from 'react'
import './Instructions.sass'

const Instructions:FC = () => {
  return (
    <div className='instructions'>
        <p>Guess today's Pokemon!</p>
        <p>Type a name to begin</p>
    </div>
  )
}

export default Instructions