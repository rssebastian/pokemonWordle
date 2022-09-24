import './GuessHeader.sass'

const GuessHeader = ({header}:{header: string}) => {
  return (
    <div className='guess-header'>{header}</div>
  )
}

export default GuessHeader