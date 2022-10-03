import {FC} from 'react'
import './Footer.sass';

const Footer:FC = () => {
  return (
    <footer className='footer'>
        <p >Created by <a className='footer__link' href='https://www.rssebastian.com'>Ryan Sebastian</a> using the <a className='footer__link' href='https://pokeapi.co/'>PokeAPI</a></p>
    </footer>
  )
}

export default Footer