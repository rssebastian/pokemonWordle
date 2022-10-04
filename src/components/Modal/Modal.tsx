import {FC, useContext} from 'react'
import {GameContext} from '../../contexts/GameContext';
import {MdClear} from 'react-icons/md';
import './Modal.sass'

const Modal:FC = () => {
  const context = useContext(GameContext);
  
  return (
    <div className='modal' onClick={()=>context?.setShowModal(false)}>
        <div className='modal__box' onClick={(e)=>e.stopPropagation()}>
            <MdClear onClick={()=>context?.setShowModal(false)}/>
            <div className="modal__box-content">
                <h1 className='modal__box-title'>You Win!</h1>
                <div className="modal__box-img"><img src={context?.answer.img} alt="answerPokemon" /></div>
                <p className='modal__box-text'>You guessed <span className="answer">{context?.answer.name}</span> in {context?.guesses.length} guesses!</p>
                <p className="modal__box-text">Thanks for playing!</p>
                <p className="modal__box-text">Refresh the page to play again</p>
            </div>
        </div>
    </div>
  )
}

export default Modal