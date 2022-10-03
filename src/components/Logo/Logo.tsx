import {FC} from 'react'
import logo from '../../assets/images/logo.png';

import './Logo.sass';

const Logo:FC = () => {
  return (
    <div className='logo'>
      <img className='logo__img' src={logo} alt="logo" />
    </div>
  )
}

export default Logo