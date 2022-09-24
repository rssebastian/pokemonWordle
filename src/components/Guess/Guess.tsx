import GuessTraitSquare from '../GuessTraitSquare/GuessTraitSquare';
import { GuessTrait } from '../../interfaces'
import './Guess.sass'

const Guess = ({traits}:{traits: GuessTrait[]}) => {
  return (
    <div className='guess'>
        {traits.map((trait:GuessTrait, index:number) => {
            return (
                <GuessTraitSquare key={index} values={trait.values} background={trait.background}/>
            )
        })}
    </div>
  )
}

export default Guess