import CheckedTraitSquare from './CheckedTraitSquare/CheckedTraitSquare';
import { CheckedTrait, Guess } from '../../../../interfaces'
import './GuessBlock.sass'

const GuessBlock = ({traits}:{traits: Guess}) => {
  return (
    <div className='guess'>
        {traits.map((trait:CheckedTrait, index:number) => {
            return (
                <CheckedTraitSquare key={index} values={trait.values} background={trait.background}/>
            )
        })}
    </div>
  )
}

export default GuessBlock