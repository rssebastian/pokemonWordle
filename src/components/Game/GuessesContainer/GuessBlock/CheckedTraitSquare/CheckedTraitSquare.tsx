import { useContext } from 'react'
import { GameContext } from '../../../../../contexts/GameContext'
import {MdOutlineArrowDownward, MdOutlineArrowUpward} from 'react-icons/md'
import {genMap} from '../../../../../utils'
import './CheckedTraitSquare.sass'

const CheckedTraitSquare = ({values, background}: {values: string | string[], background: string}) => {
    const context = useContext(GameContext);
    if (background === 'img') {
        return (
            <div className={`guess-trait ${background}`}>
                <img src={values as string} alt="pokemon-img" />
            </div>
        )
    }
    else if (genMap.has(values as string)) {
        return (
            <div className={`guess-trait ${background}`}>
                {genMap.get(values as string)! < genMap.get(context?.answer?.generation as string)! ? <MdOutlineArrowUpward /> : null}
                <p>{values}</p>
                {genMap.get(values as string)! > genMap.get(context?.answer?.generation as string)! ? <MdOutlineArrowDownward /> : null}
            </div>
        )
    }
    else if (Array.isArray(values)) {
        return (
            <div className={`guess-trait ${background}`}>
                {values.map((value, index) => {
                    return (
                        <p key={index}>{value}</p>
                    )
                })}
            </div>
        )
    } else {
        return (
            <div className={`guess-trait ${background}`}>
                <p>{values}</p>
            </div>
        )
    }
}

export default CheckedTraitSquare