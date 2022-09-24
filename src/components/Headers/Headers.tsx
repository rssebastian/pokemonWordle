import GuessHeader from '../GuessesHeader/GuessHeader'

import './Headers.sass'

const Headers = () => {
    const headers = ['Name', 'Image', 'Type(s)', 'Main Color', 'Egg Group(s)', 'Shape', 'Region']
  
    return (
    <div className='guess-headers'>
        {headers.map((header, index) => <GuessHeader key={index} header={header}/>)}
    </div>
  )
}

export default Headers