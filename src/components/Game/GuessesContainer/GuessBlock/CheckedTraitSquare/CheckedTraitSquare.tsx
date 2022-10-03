import './CheckedTraitSquare.sass'

const GuessTraitSquare = ({values, background}: {values: string | string[], background: string}) => {
    if (background === 'img') {
        return (
            <div className={`guess-trait ${background}`}>
                <img src={values as string} alt="pokemon-img" />
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

export default GuessTraitSquare